import { BiHeart } from "react-icons/bi";
import { info } from "../data/info";

type SpotifyProps = {
  onBack: () => void;
};

export default function Spotify({ onBack }: SpotifyProps) {
  return (
    <section className="mt-8 max-w-4xl w-full flex flex-col items-center">
      <button
        onClick={onBack}
        className="mb-6 text-sm underline text-green-300 hover:text-green-500"
      >
        ← Geri dön
      </button>
      <h2 className="text-3xl font-bold mb-4">Spotify Playlist</h2>
      <iframe
        title="Spotify Playlist"
        src={info.favoriteSong}
        width="100%"
        height="380"
        frameBorder={0}
        allow="encrypted-media"
        className="rounded-xl shadow-lg"
      ></iframe>
      <p className="mt-4 text-xl flex text-center gap-3 text-red-400">
        Hımm, Favori şarkımız <BiHeart className="mt-1" />
      </p>
    </section>
  );
}
