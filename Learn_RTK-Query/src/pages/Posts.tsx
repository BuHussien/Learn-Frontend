import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../app/posts/postsApiSlice";
import type { IPost } from "../interfaces/IPost";

const Posts = () => {
  const { data, isError, isLoading, error } = useGetPostsQuery(undefined);

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {String(error)}</p>;
  if (data.length === 0) return <p>No Posts Yet</p>;
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {data.posts.map((post: IPost) => (
            <div
              key={post.id}
              className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Post #{post.id}
                </span>

                <span className="text-sm text-gray-400">
                  {post.views} views
                </span>
              </div>

              <Link to={`/posts/${post.id}`}>
                <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>
              </Link>

              <p className="mb-5 flex-1 text-sm leading-7 text-gray-600">
                {post.body}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-sm">
                <span className="text-gray-500">User #{post.userId}</span>

                <div className="flex items-center gap-3">
                  <span className="font-medium text-green-600">
                    👍 {post.reactions.likes}
                  </span>

                  <span className="font-medium text-red-500">
                    👎 {post.reactions.dislikes}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
