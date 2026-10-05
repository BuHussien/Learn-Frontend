
const TodoSkeleton = () => {
  return (
    <tr className="animate-pulse flex items-center justify-center gap-3">
        {/* ID */}
        <td className="px-6 py-4"><div className="h-4 w-8 mx-auto rounded bg-gray-200" /></td>

        {/* Title */}
        <td className="px-6 py-4"><div className="h-4 w-32 rounded bg-gray-200" /></td>

        {/* Description */}
        <td className="px-6 py-4"><div className="h-4 w-48 rounded bg-gray-200" /></td>

        {/* Status */}
        <td className="px-6 py-4"><div className="h-6 w-20 mx-auto rounded-full bg-gray-200" /></td>

        {/* Actions */}
        <td className="px-6 py-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-8 w-8 rounded bg-gray-200" />
            <div className="h-8 w-8 rounded bg-gray-200" />
          </div>
        </td>
      </tr>
  );
};

export default TodoSkeleton;