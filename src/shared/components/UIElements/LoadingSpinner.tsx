import React, { FC } from "react";
import "./LoadingSpinner.css";

interface IProps {
  asOverlay?: boolean;
}

const LoadingSpinner: FC<IProps> = (props) => {
  return (
    <div className={`${props.asOverlay && "loading-spinner__overlay"}`}>
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
