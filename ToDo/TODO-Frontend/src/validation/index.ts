import * as yup from "yup"

export const registerSchema = yup
  .object({
    username: yup.string().required('Username is required').min(5,'Username should be at least 5 characters'),
    email: yup.string().required('Email is required').matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,{message:"Invalid Email Address"}),
    password: yup.string().required('password is required').min(6,'Password should be at least 6 characters'),
  })
  .required()


export const loginSchema = yup
  .object({
    EmailOrUsername: yup.string().required('Username/Email is required').min(5,'Username should be at least 5 characters'),
    password: yup.string().required('password is required').min(6,'Password should be at least 6 characters'),
  })
  .required()