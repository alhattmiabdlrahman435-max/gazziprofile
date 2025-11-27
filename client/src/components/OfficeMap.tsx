import { useEffect, useMemo } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

export type OfficeLocation = {
  description: any;
  title: string;
  mapUrl: string;
  coords: {
    lat: number;
    lng: number;
  };
};

export type OfficeMapProps = {
  offices: OfficeLocation[];
};

function FitToOffices({ offices }: { offices: OfficeLocation[] }) {
  const map = useMap();

  useEffect(() => {
    if (!map || offices.length === 0) return;

    if (offices.length === 1) {
      const { coords } = offices[0];
      map.setView([coords.lat, coords.lng], 13);
      return;
    }

    const bounds = L.latLngBounds(
      offices.map(({ coords }) => [coords.lat, coords.lng]) as [number, number][]
    );
    map.fitBounds(bounds, { padding: [40, 40] });
  }, [map, offices]);

  return null;
}

const DEFAULT_ICON = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function OfficeMap({ offices }: OfficeMapProps) {
  const center = useMemo(() => {
    if (offices.length === 0) return { lat: 24.7136, lng: 46.6753 };
    const sum = offices.reduce(
      (acc, office) => ({
        lat: acc.lat + office.coords.lat,
        lng: acc.lng + office.coords.lng,
      }),
      { lat: 0, lng: 0 }
    );
    return {
      lat: sum.lat / offices.length,
      lng: sum.lng / offices.length,
    };
  }, [offices]);

  return (
    <MapContainer
      center={center}
      zoom={11.5}
      scrollWheelZoom={false}
      className="h-full min-h-[420px] w-full rounded-3xl"
      attributionControl={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <FitToOffices offices={offices} />
      {offices.map((office) => (
        <Marker key={office.title} position={office.coords} icon={DEFAULT_ICON}>
          <Popup>
            <div className="space-y-2">
              <p className="font-semibold">{office.title}</p>
              <a
                href={office.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="text-primary underline"
              >
                افتح في خرائط Google
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
