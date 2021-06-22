import React from "react";
import "./Avatar.css";

interface IAvatar {
  className?: string;
  style?: React.CSSProperties;
  image: string;
  alt: string;
  width?: number;
}

const Avatar = (props: IAvatar) => {
  return (
    <div className={`avatar ${props.className}`} style={props.style}>
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: props.width, height: props.width }}
      />
    </div>
  );
};

export default Avatar;
