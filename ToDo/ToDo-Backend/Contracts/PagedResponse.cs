namespace TodoApi.Contracts;

public record PagedResponse<T>(IReadOnlyList<T> Items, int TotalCount, int Page, int PageSize,string Sort);