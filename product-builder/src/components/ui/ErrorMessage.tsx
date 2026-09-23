interface IProps {
  message: string
}

const ErrorMessage = ({message}: IProps) => {
  return (
    message ? <span className="block text-orange-700  pl-2 font-semibold text-sm">{message}</span> : null
  );
};

export default ErrorMessage;