import React, { FC } from "react";
import Button from "../FormElements/Button";
import Modal from "./Modal";

interface IProps {
  onClear: () => void;
  error: boolean;
}

const ErrorModal: FC<IProps> = (props) => {
  return (
    <Modal
      onCancel={props.onClear}
      header="An Error Occurred!"
      show={!!props.error}
      footer={<Button onClick={props.onClear}>Okay</Button>}
    >
      <p>{props.error}</p>
    </Modal>
  );
};

export default ErrorModal;
