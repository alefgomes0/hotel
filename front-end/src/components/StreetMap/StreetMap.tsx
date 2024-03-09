import "maplibre-gl/dist/maplibre-gl.css";
import Map from "react-map-gl/maplibre";
import { Marker } from "react-map-gl";
import { NavigationControl } from "react-map-gl";
import { useFetchMaptilerKey } from "@/hooks/useFetchMaptilerKey";

export const StreetMap = () => {
  const { data, error, isLoading } = useFetchMaptilerKey();
  const MAPTILER_KEY = data?.data.key;
  const latitude = 40.7056013;
  const longitude = -74.0087755;

  return (
    <Map
      initialViewState={{
        latitude,
        longitude,
        zoom: 13,
      }}
      style={{ width: "100%", height: "50vh" }}
      mapStyle={`https://api.maptiler.com/maps/openstreetmap/style.json?key=${MAPTILER_KEY}`}
    >
      <NavigationControl position="top-right" />
      <Marker latitude={latitude} longitude={longitude} color="#0f766e" />
    </Map>
  );
};
