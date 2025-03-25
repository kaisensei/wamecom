import { useState } from "react";
import Map, { Marker, NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { MapboxStyles } from "./util";
import { twcn } from "src/util";

interface MapboxMapProps {
  mapboxToken: string;
  lat: number;
  lng: number;
  className?: string;
}

const MapboxMap = ({
  lng: longitude,
  lat: latitude,
  mapboxToken,
  className = '',
}: MapboxMapProps) => {
  const [viewState, setViewState] = useState({
    longitude,
    latitude,
    zoom: 14,
  });

  return (
    <div className={twcn("MapboxMap relative w-full h-full border-2 border-white rounded-lg", className)}>
      <Map
        {...viewState}
        mapboxAccessToken={mapboxToken}
        mapStyle={MapboxStyles.streets_v11}
        style={{ width: "100%", height: "100%" }}
        onMove={(evt) => setViewState(evt.viewState)}
      >
        <Marker longitude={longitude} latitude={latitude}>
          📍
        </Marker>
        <NavigationControl position="top-right" />
      </Map>
    </div>
  );
};

export default MapboxMap;