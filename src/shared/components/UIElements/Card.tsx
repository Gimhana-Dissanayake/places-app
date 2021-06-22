import React, { FC } from "react";
import "./Card.css";

interface ICard {
  className?: string;
  style?: React.CSSProperties;
}

const Card: FC<ICard> = (props) => {
  return (
    <div className={`card ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
