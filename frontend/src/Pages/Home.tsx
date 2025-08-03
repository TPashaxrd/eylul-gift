
import { useState } from "react";
import { BiPhotoAlbum, BiMusic, BiMap, BiGift, BiUser } from "react-icons/bi";

import Gallery from "../components/Gallery";
import Spotify from "../components/Spotify";
import Tanishma from "../components/Tanishma";
import { pictures } from "../data/pictures";
import Celebration from "../components/Celebration";
import LoveMap from "../components/LoveMapLive";
import SurpriseBox from "../components/SupriseBoxes";

type Selected = "galeri" | "spotify" | "tanişma" | "lovemap" | "suprisebox" | null;

const buttons: { key: Selected; label: string; icon: JSX.Element }[] = [
  { key: "galeri", label: "Galeri", icon: <BiPhotoAlbum size={28} /> },
  { key: "spotify", label: "Spotify", icon: <BiMusic size={28} /> },
  { key: "tanişma", label: "Tanişma", icon: <BiUser size={28} /> },
  { key: "lovemap", label: "Love Map", icon: <BiMap size={28} /> },
  { key: "suprisebox", label: "Sürpriz Kutusu", icon: <BiGift size={28} /> },
];

export default function Home() {
  const [selected, setSelected] = useState<Selected>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 flex flex-col items-center justify-center p-8 text-white font-semibold">
      <Celebration />

      <h1 className="text-6xl font-extrabold mb-4 drop-shadow-lg select-none">
        Balım, Nereye gitmek istersin?
      </h1>
      <p className="mb-10 text-lg text-pink-200 select-none">
        Hımm. Birtaneme özel {selected ? selected.toUpperCase() : ""}
      </p>

      {!selected && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
          {buttons.map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setSelected(key)}
              className="flex flex-col items-center justify-center gap-3 rounded-3xl bg-pink-600 bg-opacity-70 hover:bg-pink-700 hover:scale-110 transition-transform duration-300 shadow-xl shadow-pink-400/60 py-8 text-white cursor-pointer select-none"
              aria-label={label}
              title={label}
              type="button"
            >
              <div className="text-pink-300 drop-shadow-md">{icon}</div>
              <span className="text-2xl font-bold tracking-wider">{label}</span>
            </button>
          ))}
        </div>
      )}

      {selected === "galeri" && <Gallery pictures={pictures} onBack={() => setSelected(null)} />}
      {selected === "spotify" && <Spotify onBack={() => setSelected(null)} />}
      {selected === "tanişma" && <Tanishma onBack={() => setSelected(null)} />}
      {selected === "lovemap" && <LoveMap onBack={() => setSelected(null)} />}
      {selected === "suprisebox" && <SurpriseBox onBack={() => setSelected(null)} />}
    </div>
  );
}
