import React, { useState } from "react";
import { faker } from "@faker-js/faker";
import TodoItem from "../components/TodoItem";
import TodoSkeleton from "../components/TodoSkeleton";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import Input from "../components/ui/Input";
import axiosInstance from "../config/axios.config";
import axios from "axios";
import Textarea from "../components/ui/Textarea";
import { useSearchParams } from "react-router-dom";
import Paginator from "../components/Paginator";
import DropDownMenu from "../components/ui/DropDownMenu";

export interface ITodo {
  id: number;
  title: string;
  description: string;
  isCompleted: boolean;
}

const Todos = () => {
  const loggedInUserString = localStorage.getItem("loggedInUser");
  const loggedInUser = loggedInUserString ? JSON.parse(loggedInUserString) : null;
  const token = loggedInUser?.token;

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const pageSize = Number(searchParams.get("pageSize")) || 10;

  const { data: paginatedData, isLoading, error, refetch } = useAuthenticatedQuery({
    queryKey: ["todos", String(page), String(pageSize), String(searchParams.get("sort"))],
    url: "/todos",
    config: {
      params: {
        page: page,
        pageSize: pageSize,
        sort: searchParams.get("sort"),
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const todos = paginatedData?.items || [];
  const totalPages = Math.ceil((paginatedData?.totalCount || 0) / pageSize);

  async function generateFakeTodos(count: number) {
    for (let i = 0; i < count; i++) {
      const todoToAdd = {
        title: faker.word.words(3),
        description: faker.lorem.sentence(10),
        isCompleted: false,
      };
      const response = await axiosInstance.post("/todos", todoToAdd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({ response });
    }
    refetch();
  }
  const [isAddTodoModalOpen, setAddTodoModalOpen] = useState(false);
  const closeAddTodoModal = () => setAddTodoModalOpen(false);
  const [newTodo, setNewTodo] = useState({ title: "", description: "" });
  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewTodo((prev) => ({ ...prev, [name]: value }));
  };
  const addTodo = async () => {
    const loggedInUserString = localStorage.getItem("loggedInUser");
    const token = loggedInUserString ? JSON.parse(loggedInUserString).token : null;
    if (!token) return Error("Not Authorized");

    const todoToAdd = {
      title: newTodo.title || "Untitled",
      description: newTodo.description || "No description",
      isCompleted: false,
    };
    try {
      const response = await axiosInstance.post("/todos", todoToAdd, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log({ response });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("Status:", error.response?.status);
        console.log("Response:", error.response?.data);
      }
    } finally {
      setAddTodoModalOpen(false);
      refetch();
    }
  };
  if (error)
    return (
      <div className="text-center p-10 text-red-600">Error fetching data!</div>
    );

  return isLoading ? (
    Array.from({ length: 5 }).map((_, index) => <TodoSkeleton key={index} />)
  ) : (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <DropDownMenu title="pageSize" choices={[5, 10, 15, 20]} />
          <DropDownMenu title="sort" choices={["Title","Date", "Status"]} />
        </div>

        <div className="flex items-center gap-4 w-full sm:w-auto">
          <Button
            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-800 transition-colors w-full sm:w-auto"
            onClick={() => generateFakeTodos(20)}
          >
            Generate Fake Todos
          </Button>
          <Button
            className="bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-rose-800 transition-colors w-full sm:w-auto"
            onClick={() => setAddTodoModalOpen(true)}
          >
            Add New Todo
          </Button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-rose-100 shadow-lg">
        <table className="w-full bg-white text-left">
          <thead className="bg-rose-500 text-white">
            <tr>
              <th className="px-6 py-4 font-semibold">ID</th>
              <th className="px-6 py-4 font-semibold">Title</th>
              <th className="px-6 py-4 font-semibold">Description</th>
              <th className="px-6 py-4 font-semibold">Status</th>
              <th className="px-6 py-4 font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-rose-100">
            {todos?.length ? (
              todos.map((todo: ITodo) => (
                <TodoItem key={todo.id} todo={todo} onUpdateSuccess={refetch} onToggle={refetch} />
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center font-medium text-gray-500">No todos found. Add a new one!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      {totalPages > 1 && <Paginator page={page} totalPages={totalPages} />}

      <Modal isOpen={isAddTodoModalOpen} title="Add New Todo" closeModal={closeAddTodoModal}>
        <div className="flex flex-col gap-3">
          <Input name="title" placeholder="Enter title" onChange={handleNewTodoChange} value={newTodo.title}/>
          <Textarea name="description" value={newTodo.description} placeholder="Enter description" onChange={handleNewTodoChange}/>
        </div>
        <div className="flex gap-4 justify-center mt-4">
          <Button className="px-10 bg-indigo-600 hover:bg-indigo-800" onClick={addTodo}>Add</Button>
          <Button className="px-9 bg-rose-600 hover:bg-rose-800" onClick={closeAddTodoModal}>Cancel</Button>
        </div>
      </Modal>
    </div>
  );
};

export default Todos;
