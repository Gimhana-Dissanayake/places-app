import { FC, useEffect, useRef } from "react";
import { Coordinates } from "../../../models/Coordinates";
import "./Map.css";

interface IProps {
  className?: string;
  style?: React.CSSProperties;
  center?: Coordinates;
  zoom?: number;
}

const Map: FC<IProps> = (props) => {
  const mapRef = useRef<HTMLDivElement>(null);

  const { center, zoom } = props;

  useEffect(() => {
    const win = window as any;

    new win.ol.Map({
      target: mapRef?.current?.id,
      layers: [
        new win.ol.layer.Tile({
          source: new win.ol.source.OSM(),
        }),
      ],
      view: new win.ol.View({
        center: win.ol.proj.fromLonLat([center?.lng, center?.lat]),
        zoom: zoom,
      }),
    });
  }, [center, zoom]);

  return (
    <div
      ref={mapRef}
      className={`map ${props.className}`}
      style={props.style}
      id="map"
    ></div>
  );
};

export default Map;
