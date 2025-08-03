import { FaImages, FaSpotify, FaRegCalendarAlt } from "react-icons/fa";

type Option = {
  id: "galeri" | "spotify" | "tanişma" | "lovemap" | "suprisebox" ;
  icon: React.ReactNode;
  title: string;
  description: string;
};

type OptionsProps = {
  onSelect: (id: Option["id"]) => void;
};

export default function Options({ onSelect }: OptionsProps) {
  const options: Option[] = [
    {
      id: "galeri",
      icon: <FaImages className="text-pink-500 text-4xl" />,
      title: "Galeri",
      description: "İki Mükemmelin Galerisi!",
    },
    {
        id: "lovemap",
        icon: <FaRegCalendarAlt className="text-purple-500 text-4xl" />,
        title: "Sizin Haritanız",
        description: "Distance is just between bodies, not between hearts!",
    },
    {
      id: "spotify",
      icon: <FaSpotify className="text-green-500 text-4xl" />,
      title: "Spotify Playlist",
      description: "O bizim şarkılarımız, ruhumuzu besleyen melodiler 🎶",
    },
    {
      id: "tanişma",
      icon: <FaRegCalendarAlt className="text-purple-500 text-4xl" />,
      title: "Tanışma Günümüz",
      description: "Bazı şeylerin başlangıçı ✨",
    },
    {
        id: "suprisebox",
        icon: <FaRegCalendarAlt className="text-yellow-500 text-4xl" />,
        title: "Sürpriz Kutusu",
        description: "Biraz gizem, biraz sürpriz! 🎁",
    }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-8 max-w-5xl w-full justify-center">
      {options.map(({ id, icon, title, description }) => (
        <div
          key={id}
          onClick={() => onSelect(id)}
          className="cursor-pointer bg-white/10 rounded-3xl p-8 flex flex-col items-center text-center hover:bg-white/20 transition"
        >
          {icon}
          <h2 className="mt-4 text-2xl font-semibold">{title}</h2>
          <p className="mt-2 max-w-xs text-sm">{description}</p>
        </div>
      ))}
    </div>
  );
}
