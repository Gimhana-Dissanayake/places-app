import { FC, useRef } from "react";
import Button from "./Button";
import "./ImageUpload.css";

interface IProps {
  id: string;
  center?: boolean;
}

const ImageUpload: FC<IProps> = (props) => {
  const filePickerRef = useRef<HTMLInputElement | null>(null);

  const pickedHandler = (event: any) => {
    console.log(event.target);
  };

  const pickImageHandler = () => {
    const fP = filePickerRef as any;

    console.log(fP);

    fP && fP.current.click();
  };

  return (
    <div className="form-control">
      <input
        ref={filePickerRef}
        id={props.id}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,jpeg"
        onChange={pickedHandler}
      />
      <div className={`image-upload ${props.center && "center"}`}>
        <div className="image-upload__preview">
          <img src="" alt="Preview" />
        </div>
        <Button type="button" onClick={pickImageHandler}>
          PICK IMAGE
        </Button>
      </div>
    </div>
  );
};

export default ImageUpload;
