import { FC, useEffect, useReducer } from "react";
import { validate } from "../../util/validators";
import "./Input.css";

interface IProps {
  id?: string;
  label?: string;
  element?: string;
  type?: string;
  placeholder?: string;
  rows?: number;
  errorText?: string;
  validators?: any[];
  onInput: (id: string | undefined, value: string, isValid: boolean) => void;
  value?: any;
  valid?: boolean;
}

interface IState {
  value: string;
  isTouched: boolean;
  isValid: boolean;
}

interface IAction {
  type: "CHANGE" | "TOUCH";
  val?: any;
  validators?: any[];
}

const inputReducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH": {
      return {
        ...state,
        isTouched: true,
      };
    }
    default:
      return state;
  }
};

const Input: FC<IProps> = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
    isValid: false,
  });

  const { onInput, id } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid);
  }, [onInput, id, value, isValid]);

  const changeHandler = (event: any) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const element =
    props.element === "input" ? (
      <input
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    ) : (
      <textarea
        id={props.id}
        rows={props.rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
      />
    );

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isTouched && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
