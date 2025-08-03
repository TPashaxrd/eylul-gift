import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const eylulPosition: [number, number] = [41.0033, 27.7750];
const toprakPosition: [number, number] = [41.048, 27.9498];

function createPhotoIcon(url: string) {
  return L.divIcon({
    html: `
      <div style="width: 60px; height: 60px; border-radius: 50%; overflow: hidden; border: 4px solid purple; box-shadow: 0 0 5px purple;">
        <img src="${url}" alt="photo" style="width: 60px; height: 60px; object-fit: cover; pointer-events: none;" />
      </div>
    `,
    className: "",
    iconSize: [60, 60],
    iconAnchor: [30, 60],
  });
}

function calculateDistance(pos1: [number, number], pos2: [number, number]) {
  const toRad = (x: number) => (x * Math.PI) / 180;

  const lat1 = pos1[0];
  const lon1 = pos1[1];
  const lat2 = pos2[0];
  const lon2 = pos2[1];

  const R = 6371; 
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;

  return d.toFixed(2);
}
const eylulPhoto = "https://www.shutterstock.com/shutterstock/videos/3566856285/thumb/1.jpg?ip=x480";
const toprakPhoto = "https://media.istockphoto.com/id/133835367/photo/fire-alphabets-t.jpg?s=612x612&w=0&k=20&c=05orerK29k2WBi76DiXaTu5N_DkUh5oo5x5WSt22DzE=";

export default function HeartLineMap({ onBack }: { onBack: () => void }) {
  const distance = calculateDistance(eylulPosition, toprakPosition);


  return (
    <>
      <button
        onClick={onBack}
        className="mb-6 text-sm underline text-green-300 hover:text-green-500"
      >
       ← Geri dön
      </button>
    <div style={{ width: "100%", height: "500px", border: "4px solid purple", borderRadius: "12px", marginTop: 32, overflow: "hidden", boxShadow: "0 0 15px purple" }}>
      <div style={{
        position: "absolute",
        top: 12,
        left: "50%",
        transform: "translateX(-50%)",
        backgroundColor: "rgba(255 255 255 / 0.8)",
        padding: "4px 20px",
        borderRadius: 9999,
        color: "purple",
        fontWeight: "bold",
        boxShadow: "0 0 8px rgba(128, 0, 128, 0.6)",
        userSelect: "none",
        zIndex: 1000,
        fontSize: 18,
      }}>
        Love Line 🚇💕
      </div>

      <MapContainer
        center={[41.025, 28.86]}
        zoom={12.5}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://github.com/TPashaxrd" target="_blank" rel="noopener noreferrer">Toprak</a>'
        />

        <Marker position={eylulPosition} icon={createPhotoIcon(eylulPhoto)}>
          <Popup><span className="text-pink-500 font-space-grotesk text-xl">Eylül</span> - Küçükçekmece<br />Toprak 💖</Popup>
        </Marker>

        <Marker position={toprakPosition} icon={createPhotoIcon(toprakPhoto)}>
          <Popup><span className="text-blue-500 font-space-grotesk text-xl">Toprak</span> - Okmeydanı<br />Eylul 💜</Popup>
        </Marker>

        <Polyline
          positions={[eylulPosition, toprakPosition]}
          pathOptions={{ color: "pink", weight: 6, dashArray: "8 12" }}
        >
      <Tooltip
        direction="center"
        permanent
        offset={[0, -10]}
        opacity={0.9}
        className="custom-tooltip"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-pink-600 text-white rounded-2xl shadow-lg text-sm font-bold font-space-grotesk">
          💖 Mesafe: {distance} km
        </div>
      </Tooltip>
        </Polyline>
      </MapContainer>
    </div>
   </> 
  );
}
