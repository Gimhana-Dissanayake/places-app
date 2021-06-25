import { FC } from "react";
import "./Input.css";

interface IProps {
  id?: string;
  label?: string;
  element?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
}

const Input: FC<IProps> = (props) => {
  const element =
    props.element === "input" ? (
      <input id={props.id} type={props.type} placeholder={props.placeholder} />
    ) : (
      <textarea id={props.id} rows={props.rows || 3} />
    );

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {element}
    </div>
  );
};

export default Input;
