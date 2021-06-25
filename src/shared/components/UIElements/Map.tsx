import { FC, useRef } from "react";
import { Coordinates } from "../../../models/Coordinates";
import "./Map.css";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  coordinates?: Coordinates;
  zoom?: number;
}

const Map: FC<IProps> = (props) => {
  const mapRef = useRef(null);

  return (
    <div ref={mapRef} className={`map ${props.className}`} style={props.style}>
      GOOGLE MAP HERE
    </div>
  );
};

export default Map;
