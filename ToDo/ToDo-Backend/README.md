# Todo API

An ASP.NET Core 10 Web API with SQLite persistence, JWT authentication, and per-user Todo CRUD.

## Run

Set a private JWT signing key with at least 32 bytes, then start the API:

```bash
export Jwt__Key="$(openssl rand -base64 48)"
dotnet run
```

The SQLite database is created as `todos.db` in the working directory on first startup. `Jwt__Key` must be supplied through configuration or an environment variable; do not commit it to source control.

## Endpoints

| Method | Endpoint | Auth | Description |
| --- | --- | --- | --- |
| `POST` | `/api/auth/register` | No | Create an account and return a JWT |
| `POST` | `/api/auth/login` | No | Authenticate and return a JWT |
| `GET` | `/api/todos` | Bearer token | List the signed-in user's Todos |
| `GET` | `/api/todos/{id}` | Bearer token | Get one of the signed-in user's Todos |
| `POST` | `/api/todos` | Bearer token | Create a Todo |
| `PUT` | `/api/todos/{id}` | Bearer token | Replace a Todo's title, description, and completion state |
| `DELETE` | `/api/todos/{id}` | Bearer token | Delete a Todo |

Register/login accept `email` and `password`; passwords must contain at least 8 characters when registering. Successful authentication returns `token`, `expiresAtUtc`, and `email`. Send the token on Todo requests as `Authorization: Bearer <token>`.

Todo creation accepts `title` (1-200 non-whitespace characters) and optional `description` (up to 2000 characters). Updates accept those same fields plus `isCompleted`. Todo IDs are only accessible to their owner; other users receive `404`.

Validation failures return `400`, duplicate registration returns `409`, invalid login returns `401`, and unauthenticated Todo requests return `401`.
