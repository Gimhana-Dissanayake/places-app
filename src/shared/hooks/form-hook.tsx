import { useCallback, useReducer } from "react";

// interface IInputField {
//   value: string;
//   isValid: boolean;
// }

// interface IState {
//   inputs: {
//     title: IInputField;
//     description: IInputField;
//     address: IInputField;
//   };
//   isValid: boolean;
// }

interface IAction {
  type: "INPUT_CHANGE";
  inputId: any;
  isValid: boolean;
  value: string;
}

const formReducer = (state: any, action: IAction) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          if (inputId === "title") {
            formIsValid = formIsValid && state.inputs["title"].isValid;
          } else if (inputId === "description") {
            formIsValid = formIsValid && state.inputs["description"].isValid;
          } else {
            formIsValid = formIsValid && state.inputs["address"].isValid;
          }
          // formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
        isValid: formIsValid,
      };
    default:
      return state;
  }
};

export const useForm = (initialInputs: any, initialFormValidity: any) => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialFormValidity,
  });

  const inputHandler = useCallback(
    (id: string | undefined, value: string, isValid: boolean) => {
      dispatch({
        type: "INPUT_CHANGE",
        value: value,
        isValid: isValid,
        inputId: id,
      });
    },
    []
  );

  return [formState, inputHandler];
};
