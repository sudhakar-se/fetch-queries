// src/components/HazardMap.jsx
import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import hazardData from "./data/hazardData.json"; // Adjust the path according to your project structure

const HazardMap = () => {
  const getColor = (temperature) => {
    return temperature > 300
      ? "#800026"
      : temperature > 290
        ? "#BD0026"
        : temperature > 280
          ? "#E31A1C"
          : temperature > 270
            ? "#FC4E2A"
            : temperature > 260
              ? "#FD8D3C"
              : temperature > 250
                ? "#FEB24C"
                : temperature > 240
                  ? "#FED976"
                  : "#FFEDA0";
  };
  a;
  const style = (feature) => ({
    fillColor: getColor(feature.properties.temperature),
    weight: 1,
    opacity: 1,
    color: "blue",
    fillOpacity: 0.7,
  });

  return (
    <>
      <h1>Hi this me</h1>
      <MapContainer
        center={[0, 0]}
        zoom={2}
        style={{ height: "600px", width: "800px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        <GeoJSON data={hazardData} style={style} />
      </MapContainer>
    </>
  );
};

export default HazardMap;
