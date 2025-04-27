"use client";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import { PassportData, PassportEvent } from "@/types/passport";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";

interface MapViewProps {
  events: PassportData;
  selectedEvent?: PassportEvent | null;
  onSelectEvent: (event: PassportEvent) => void;
}

const defaultIcon = L.icon({
  iconUrl: "/pin-default.png",
  iconSize: [40, 40],
  iconAnchor: [15, 40],
});

const selectedIcon = L.icon({
  iconUrl: "/pin-selected.png",
  iconSize: [40, 40],
  iconAnchor: [15, 40],
});

function ZoomToMarker({
  selectedEvent,
}: {
  selectedEvent?: PassportEvent | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (selectedEvent) {
      map.flyTo([selectedEvent.location.lat, selectedEvent.location.lng], 16);
    } else {
      map.setView([13.736717, 100.523186], 13);
    }
  }, [selectedEvent, map]);

  return null;
}

export default function MapView({
  events,
  selectedEvent,
  onSelectEvent,
}: MapViewProps) {
  return (
    <MapContainer
      center={[13.736717, 100.523186]}
      zoom={13}
      zoomControl={false}
      className="w-full h-full z-0"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {events.passport.events.map((event) => (
        <Marker
          key={event.id}
          position={[event.location.lat, event.location.lng]}
          icon={selectedEvent?.id === event.id ? selectedIcon : defaultIcon}
          eventHandlers={{
            click: () => onSelectEvent(event), // <<<< เพิ่มตรงนี้
          }}
        />
      ))}
      <ZoomToMarker selectedEvent={selectedEvent} />
    </MapContainer>
  );
}
