import { X } from "lucide-react";
import "./index.scss";
import { AlertType } from "../../../types";
interface IProps {
  type: AlertType;
  title: string;
  icon?: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}

const Alert = ({ type, title, description, icon, children }: IProps) => {
  return (
    <div className={`alert-wrapper ${type}`}>
      <div className="alert-header">
        <div className="title">
         <span> {icon}</span>
        <h3>{title}</h3>
        </div>
        <X className="close" size={20}/>
      </div>
      {children ? children : <p>{description}</p>}
    </div>
  );
};

export default Alert;
