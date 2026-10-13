import { useParams, Link } from "react-router-dom";
import { useGetPostQuery } from "../app/posts/postsApiSlice";

const PostDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data: post, isLoading, isError } = useGetPostQuery(id!);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <p className="text-lg font-medium text-gray-500">Loading post...</p>
      </div>
    );
  }

  if (isError || !post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100">
        <p className="text-lg text-red-500">Failed to load post.</p>

        <Link to="/posts" className="text-blue-600 hover:underline">
          Back to Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/posts"
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
        >
          ← Back to Posts
        </Link>

        <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          {/* Header */}
          <div className="border-b border-gray-100 p-6 sm:p-8">
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                Post #{post.id}
              </span>

              <span className="text-sm text-gray-500">
                👁 {post.views} views
              </span>
            </div>

            <h1 className="mb-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Content */}
          <div className="p-6 sm:p-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">
              Post Content
            </h2>

            <p className="whitespace-pre-line text-base leading-8 text-gray-600 sm:text-lg">
              {post.body}
            </p>
          </div>

          {/* Author & Reactions */}
          <div className="flex flex-col gap-5 border-t border-gray-100 bg-gray-50 p-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <div>
              <p className="text-sm text-gray-500">Published by</p>
              <p className="mt-1 font-semibold text-gray-800">
                User #{post.userId}
              </p>
            </div>

            <div className="flex items-center gap-5">
              <span className="font-semibold text-green-600">
                👍 {post.reactions.likes} Likes
              </span>

              <span className="font-semibold text-red-500">
                👎 {post.reactions.dislikes} Dislikes
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostDetails;
