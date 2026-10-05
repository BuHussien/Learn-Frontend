using System.ComponentModel.DataAnnotations;

namespace TodoApi.Contracts;

public sealed class RegisterRequest
{
    [Required]
    [EmailAddress]
    [MaxLength(254)]
    public string Email { get; init; } = string.Empty;
    
    [Required]
    [MaxLength(30)]
    public string Username { get; init; } = string.Empty;

    [Required]
    [MinLength(6)]
    [MaxLength(128)]
    public string Password { get; init; } = string.Empty;
}

public sealed class LoginRequest
{
    [Required]
    [MaxLength(254)]
    public string EmailOrUsername { get; init; } = string.Empty;

    [Required]
    public string Password { get; init; } = string.Empty;
}

public sealed record AuthResponse(string Token, DateTime ExpiresAtUtc, string Email);
