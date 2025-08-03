import { useState } from "react";
import { videos } from "../data/videos";

type Picture = {
  src: string;
};

type Video = {
  src: string;
};

type GalleryProps = {
  pictures: Picture[];
  onBack: () => void;
};

type Selected = {
  type: "picture" | "video";
  index: number;
} | null;

export default function Gallery({ pictures, onBack }: GalleryProps) {
  const [selected, setSelected] = useState<Selected>(null);

  return (
    <section className="mt-8 max-w-5xl w-full relative px-4">
      <button
        onClick={onBack}
        className="mb-6 text-sm underline text-pink-300 hover:text-pink-500"
      >
        ← Geri dön
      </button>
      <h2 className="text-3xl font-bold mb-6">Fotoğraflar</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {pictures.map((pic, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer transform hover:scale-105 transition-transform duration-300"
            onClick={() => setSelected({ type: "picture", index: i })}
          >
            <img
              src={pic.src}
              alt={`Picture ${i + 1}`}
              className="w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold mb-6">Videolar</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg cursor-pointer overflow-hidden relative group"
            onClick={() => setSelected({ type: "video", index: i })}
          >
            <video
              className="w-full h-64 object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            //   poster={video.poster}
            >
              <source src={video.src} type="video/mp4" />
              Tarayıcın video etiketini desteklemiyor.
            </video>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <svg
                className="w-16 h-16 text-white drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 84 84"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="42" cy="42" r="42" fill="currentColor" />
                <polygon points="33,26 60,42 33,58" fill="black" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer p-6"
        >
          {selected.type === "picture" && (
            <img
              src={pictures[selected.index].src}
              alt={`Selected Picture ${selected.index + 1}`}
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              loading="lazy"
            />
          )}
          {selected.type === "video" && (
            <video
              src={videos[selected.index].src}
              controls
              autoPlay
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          )}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-white text-4xl font-bold bg-black bg-opacity-50 rounded-full px-4 py-1 cursor-pointer select-none"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
