import { MapLibreGL } from "maplibre-gl";
import { NavigationControl } from "react-map-gl";
import Map from "react-map-gl/maplibre";
import "maplibre-gl/dist/maplibre-gl.css";
import { useFetchMaptilerKey } from "@/hooks/useFetchMaptilerKey";

export const StreetMap = () => {
  const { data, error, isLoading } = useFetchMaptilerKey();
  const MAPTILER_KEY = data?.data.key;

  return (
    <Map
      mapLib={MapLibreGL}
      initialViewState={{
        longitude: 0,
        latitude: 0,
        zoom: 2,
      }}
      style={{ width: "100%", height: "50vh" }}
      mapStyle={`https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`}
    >
      <NavigationControl position="top-right" />
    </Map>
  );
};
