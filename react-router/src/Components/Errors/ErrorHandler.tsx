import ErrorPage from "../../Pages/ErrorPage";

interface IProps {
  statusCode?: number;
  title?: string;
}

const ErrorHandler = ({ statusCode = 500, title = "Internal Server Error"}: IProps) => {
  return <ErrorPage statusCode={statusCode} title={title}/>
};

export default ErrorHandler;
