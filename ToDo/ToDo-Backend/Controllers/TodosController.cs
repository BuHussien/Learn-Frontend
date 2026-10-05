using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Contracts;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers;

[ApiController]
[Authorize]
[Route("api/todos")]
public sealed class TodosController(TodoDbContext database) : ControllerBase
{
    [HttpGet]
    [ProducesResponseType<PagedResponse<TodoResponse>>(StatusCodes.Status200OK)]
    public async Task<ActionResult<PagedResponse<TodoResponse>>> GetAll(
        [FromQuery] int page = 1, 
        [FromQuery] int pageSize = 10,
        [FromQuery] string sort = "",
        CancellationToken cancellationToken = default)
    {
        // 1. Validate and cap the inputs
        page = page < 1 ? 1 : page;
        pageSize = pageSize < 1 ? 1 : (pageSize > 100 ? 100 : pageSize);

        var userId = GetUserId();

        // 2. Build the base query
        var query = database.Todos
            .AsNoTracking()
            .Where(todo => todo.UserId == userId);

        var totalCount = await query.CountAsync(cancellationToken);

        query = sort?.ToLower() switch
        {
            "title" => query.OrderBy(e => e.Title),
            "date" => query.OrderByDescending(e => e.CreatedAt),
            "status" => query.OrderByDescending(e => e.IsCompleted),
            _ => query.OrderByDescending(e => e.CreatedAt) 
        };
        
        var todos = await query
            .Skip((page - 1) * pageSize)
            .Take(pageSize)
            .ToListAsync(cancellationToken);
    
        var responseItems = todos.Select(ToResponse).ToList();

        
        return Ok(new PagedResponse<TodoResponse>(responseItems, totalCount, page, pageSize, sort));
    }



    [HttpGet("{id:int}")]
    [ProducesResponseType<TodoResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<TodoResponse>> GetById(int id, CancellationToken cancellationToken)
    {
        var todo = await FindTodo(id, cancellationToken);
        return todo is null ? NotFound() : Ok(ToResponse(todo));
    }

    [HttpPost]
    [ProducesResponseType<TodoResponse>(StatusCodes.Status201Created)]
    public async Task<ActionResult<TodoResponse>> Create(
        CreateTodoRequest request,
        CancellationToken cancellationToken)
    {
        var todo = new TodoItem
        {
            Title = request.Title.Trim(),
            Description = request.Description?.Trim(),
            UserId = GetUserId()
        };

        database.Todos.Add(todo);
        await database.SaveChangesAsync(cancellationToken);
        var response = ToResponse(todo);
        return CreatedAtAction(nameof(GetById), new { id = todo.Id }, response);
    }

    [HttpPut("{id:int}")]
    [ProducesResponseType<TodoResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<TodoResponse>> Update(
        int id,
        UpdateTodoRequest request,
        CancellationToken cancellationToken)
    {
        var todo = await FindTodo(id, cancellationToken);
        if (todo is null)
        {
            return NotFound();
        }

        todo.Title = request.Title.Trim();
        todo.Description = request.Description?.Trim();
        todo.IsCompleted = request.IsCompleted;
        await database.SaveChangesAsync(cancellationToken);

        return Ok(ToResponse(todo));
    }
    
    [HttpPatch("{id:int}")]
    [ProducesResponseType<TodoResponse>(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<ActionResult<TodoResponse>> Patch( int id, CancellationToken cancellationToken)
    {
        var todo = await FindTodo(id, cancellationToken);
        if (todo is null)
        {
            return NotFound();
        }
        
        todo.IsCompleted = !todo.IsCompleted;
        database.Todos.Update(todo);
        await database.SaveChangesAsync(cancellationToken);

        return Ok(ToResponse(todo));
    }


    [HttpDelete("{id:int}")]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    public async Task<IActionResult> Delete(int id, CancellationToken cancellationToken)
    {
        var todo = await FindTodo(id, cancellationToken);
        if (todo is null)
        {
            return NotFound();
        }

        database.Todos.Remove(todo);
        await database.SaveChangesAsync(cancellationToken);
        return NoContent();
    }

    private int GetUserId() =>
        int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

    private Task<TodoItem?> FindTodo(int id, CancellationToken cancellationToken) =>
        database.Todos.SingleOrDefaultAsync(
            todo => todo.Id == id && todo.UserId == GetUserId(),
            cancellationToken);

    private static TodoResponse ToResponse(TodoItem todo) =>
        new(todo.Id, todo.Title, todo.Description, todo.IsCompleted, todo.CreatedAt);
}
