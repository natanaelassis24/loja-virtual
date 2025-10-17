"use client";

import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L, { LatLngExpression } from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import iconShadowUrl from "leaflet/dist/images/marker-shadow.png";
import build from "next/dist/build";

// Agora explicita o tipo LatLngExpression (que é um tuple com dois números)
const position: LatLngExpression = [-23.55052, -46.633308];

export default function Map() {
  useEffect(() => {
    // @ts-ignore
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconUrl,
      shadowUrl: iconShadowUrl,
    });
  }, []);

  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Nossa loja está aqui! Venha nos visitar.</Popup>
      </Marker>
    </MapContainer>
  );
}
