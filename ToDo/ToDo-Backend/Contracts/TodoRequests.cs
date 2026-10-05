using System.ComponentModel.DataAnnotations;

namespace TodoApi.Contracts;

public sealed class CreateTodoRequest
{
    [Required]
    [StringLength(200, MinimumLength = 1)]
    [RegularExpression(@".*\S.*", ErrorMessage = "Title cannot be blank.")]
    public string Title { get; init; } = string.Empty;

    [StringLength(2000)]
    public string? Description { get; init; }
}

public sealed class UpdateTodoRequest
{
    [Required]
    [StringLength(200, MinimumLength = 1)]
    [RegularExpression(@".*\S.*", ErrorMessage = "Title cannot be blank.")]
    public string Title { get; init; } = string.Empty;

    [StringLength(2000)]
    public string? Description { get; init; }

    public bool IsCompleted { get; init; }
}

public sealed record TodoResponse(
    int Id,
    string Title,
    string? Description,
    bool IsCompleted,
    DateTime CreatedAt);
