import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import InputErrorMessage from "../components/InputErrorMessage";
import { LOGIN_FORM } from "../data";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../validation";
import { AxiosError } from "axios";
import axiosInstance from "../config/axios.config";
import { useState } from "react";
import { IErrorResponse } from "../interfaces";
import toast from "react-hot-toast";


interface IFormInput {
  EmailOrUsername: string;
  password: string;
}

const Login = () => {
  const [isPending, setIsPending] = useState(false);
  const { register, handleSubmit, formState: { errors }} = useForm<IFormInput>({ resolver: yupResolver(loginSchema) });


  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    try {
      setIsPending(true);
      const response = await axiosInstance.post("/auth/login", data);
      if(response.status === 200){
        toast.success(`${response.status} ${response.statusText}`, {
          position: "top-center",
          duration: 1000,
        });
        localStorage.setItem('loggedInUser',JSON.stringify(response.data))
      }
      setTimeout(() => {
        location.replace('/');
      }, 1000);
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>;
      toast.error(errorObj.response?.data?.message || "Something went wrong", {
        position: "top-center",
        duration: 1000,
      });
    } finally {
      setIsPending(false);
    }
  };
  // ** Render
  const renderLoginForm = LOGIN_FORM.map((row, idx) => {
    return (
      <div key={idx}>
        <Input
          placeholder={row.placeholder}
          type={row.type}
          {...register(row.name, {
            required: row.validation.required,
            minLength: row.validation.minLength,
          })}
        />
        {errors[row.name] && (
          <InputErrorMessage msg={errors[row.name]?.message ?? ""} />
        )}
      </div>
    );
  });
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-center mb-4 text-3xl font-semibold">
        {" "}
        Login to get access!
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {renderLoginForm}
        <Button fullWidth isLoading={isPending}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
