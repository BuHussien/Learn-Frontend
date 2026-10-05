import { useState, ChangeEvent } from "react";
import axiosInstance from "../config/axios.config";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Modal from "./ui/Modal";
import Textarea from "./ui/Textarea";
import { ITodo } from "../pages/Todos";

interface IProps {
  todo: ITodo;
  onUpdateSuccess?: () => void;
  onToggle?: () => void;
}

const TodoItem = ({ todo, onUpdateSuccess, onToggle }: IProps) => {
  const [editModalState, setEditModalState] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const [deleteModalState, setDeleteModalState] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState({
    id: todo.id,
  });

  const [todoToEdit, setTodoToEdit] = useState({
    title: todo.title,
    description: todo.description,
    isCompleted: todo.isCompleted,
  });

  const onChangeHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setTodoToEdit({
      ...todoToEdit,
      [name]: value,
    });
  };

  const updateTodo = async () => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const token = loggedInUserString
      ? JSON.parse(loggedInUserString).token
      : null;

    if (!token) return Error("Not Authorized");

    setIsUpdating(true);
    try {
      const response = await axiosInstance.put(
        `/todos/${todo.id}`,
        todoToEdit,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      console.log("Todo updated:", response.data);
      setEditModalState(false);

      if (onUpdateSuccess) onUpdateSuccess();
    } catch (error) {
      console.error("Error updating todo:", error);
    } finally {
      setIsUpdating(false);
    }
  };
  const deleteTodo = async () => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const token = loggedInUserString
      ? JSON.parse(loggedInUserString).token
      : null;

    if (!token) return Error("Not Authorized");

    setIsDeleting(true);
    try {
      const response = await axiosInstance.delete(`/todos/${todoToDelete.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Todo deleted:", response.data);
      setDeleteModalState(false);

      if (onUpdateSuccess) onUpdateSuccess();
    } catch (error) {
      console.error("Error deleting todo:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const ToggleStatus = async () => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const token = loggedInUserString ? JSON.parse(loggedInUserString).token : null;

    if (!token) return Error("Not Authorized");

    try {
      const response = await axiosInstance.patch(`/todos/${todo.id}`, null, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Todo patched:", response.data);
      if (onToggle) onToggle();
    } catch (error) {
      console.error("Error patch todo:", error);
    }
  };

  return (
    <>
      <tr className="transition-colors hover:bg-rose-50">
        <td className="px-6 py-4 font-medium text-rose-600">{todo.id}</td>
        <td className="px-6 py-4 font-semibold text-gray-800">{todo.title}</td>
        <td className="px-6 py-4 text-gray-600">{todo.description}</td>
        <td className="px-6 py-4 flex items-center gap-4">
          <span
            className={`rounded-full px-3 py-1 text-sm font-medium cursor-pointer ${
              todo.isCompleted
                ? "bg-rose-100 text-rose-700"
                : "bg-gray-100 text-gray-600"
            }`}
            onClick={ToggleStatus}
          >
            {todo.isCompleted ? "Completed" : "Not completed"}
          </span>
        </td>

        <td className="px-6 py-4 text-gray-600">
          <div className="flex gap-3">
            <svg
              className="cursor-pointer hover:text-indigo-600 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setEditModalState(true)}
            >
              <path d="M12 20h9" />
              <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
            </svg>

            <svg
              className="cursor-pointer hover:text-rose-600 transition-colors"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setDeleteModalState(true)}
            >
              <path d="M3 6h18" />
              <path d="M8 6V4h8v2" />
              <path d="M19 6v14H5V6" />
              <path d="M10 11v5" />
              <path d="M14 11v5" />
            </svg>
          </div>
        </td>
      </tr>

      {/* Edit Modal */}
      <Modal
        title="Edit ToDo"
        isOpen={editModalState}
        closeModal={() => setEditModalState(false)}
      >
        <div className="flex flex-col gap-3">
          <Input
            name="title"
            value={todoToEdit.title}
            onChange={onChangeHandler}
            placeholder="Todo Title"
          />
          <Textarea
            name="description"
            value={todoToEdit.description}
            onChange={onChangeHandler}
            placeholder="Todo Description"
          />

          <div className="flex gap-4 justify-center mt-4">
            <Button
              className={`px-10 bg-indigo-600 hover:bg-indigo-800 ${isUpdating ? "cursor-not-allowed opacity-60" : ""}`}
              onClick={isUpdating ? undefined : updateTodo}
            >
              {isUpdating ? "Updating..." : "Update"}
            </Button>
            <Button
              className="px-9 bg-rose-600 hover:bg-rose-800"
              onClick={() => {
                setTodoToEdit({
                  title: todo.title,
                  description: todo.description,
                  isCompleted: todo.isCompleted,
                });
                setEditModalState(false);
              }}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Delete Modal */}
      <Modal
        title="Delete ToDo"
        isOpen={deleteModalState}
        closeModal={() => setDeleteModalState(false)}
      >
        <div className="flex flex-col gap-3">
          <p>
            please confirm that you want to delete this todo item. This action
            cannot be undone.
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Button
              className={`px-10 bg-indigo-600 hover:bg-indigo-800 ${isDeleting ? "cursor-not-allowed opacity-60" : ""}`}
              onClick={isDeleting ? undefined : deleteTodo}
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </Button>
            <Button
              className="px-9 bg-rose-600 hover:bg-rose-800"
              onClick={() => {
                setTodoToDelete({ id: todo.id });
                setDeleteModalState(false);
              }}
              type="button"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TodoItem;
