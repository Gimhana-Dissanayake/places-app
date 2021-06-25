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

// interface IAction {
//   type: "INPUT_CHANGE" | "SET_DATA";
//   inputId: any;
//   isValid: boolean;
//   value: string;
// }

const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          if (!state.inputs["name"]) {
            continue;
          }

          if (inputId === "title") {
            formIsValid = formIsValid && state.inputs["title"].isValid;
          } else if (inputId === "description") {
            formIsValid = formIsValid && state.inputs["description"].isValid;
          } else if (inputId === "address") {
            formIsValid = formIsValid && state.inputs["address"].isValid;
          } else if (inputId === "password") {
            formIsValid = formIsValid && state.inputs["password"].isValid;
          }
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

    case "SET_DATA":
      return {
        inputs: action.inputs,
        isValid: action.formIsValid,
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

  const setFormData = useCallback((inputData: any, formValidity: any) => {
    dispatch({
      type: "SET_DATA",
      inputs: inputData,
      formIsValid: formValidity,
    });
  }, []);

  return [formState, inputHandler, setFormData];
};
