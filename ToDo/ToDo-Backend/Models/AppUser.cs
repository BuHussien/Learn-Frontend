using System.ComponentModel.DataAnnotations;

namespace TodoApi.Models;

public sealed class AppUser
{
    public int Id { get; set; }

    [Required]
    [MaxLength(254)]
    public string Email { get; set; } = string.Empty;

    [Required]
    [MaxLength(30)]
    public string Username { get; set; } = string.Empty;

    [Required]
    public string PasswordHash { get; set; } = string.Empty;

    public ICollection<TodoItem> Todos { get; set; } = new List<TodoItem>();
}
