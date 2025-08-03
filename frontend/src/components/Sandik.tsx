import { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";

type SandikProps = {
  unlockDate: string;
  content: string;
  id: string;
  isUnlocked: boolean;
  onOpen?: () => void;
};

export default function Sandik({ unlockDate, content, id, isUnlocked, onOpen }: SandikProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (!isUnlocked) setIsOpen(false);
  }, [isUnlocked]);

  const handleClick = () => {
    if (!isUnlocked || animating) return; // Animasyon devam ediyorsa engelle
    setAnimating(true);
    setTimeout(() => {
      setIsOpen(prev => !prev);
      setAnimating(false);
      if (onOpen) onOpen();
    }, 350); // animasyon süresi
  };

  return (
    <button
      onClick={handleClick}
      disabled={!isUnlocked || animating}
      title={
        isUnlocked
          ? isOpen
            ? "Sandık açık, içeriği görüyorsun."
            : "Sandık kapalı, tıkla aç."
          : `Sandık ${new Date(unlockDate).toLocaleDateString()} tarihinde açılacak.`
      }
      className={`
        relative flex items-center justify-center gap-3
        px-6 py-3 rounded-full
        bg-gradient-to-r from-pink-500 via-red-500 to-pink-600
        text-white font-bold text-lg
        shadow-lg
        select-none
        focus:outline-none focus:ring-4 focus:ring-pink-400
        transition-transform duration-350 ease-in-out
        ${animating ? "scale-110" : ""}
        ${isOpen ? "bg-gradient-to-r from-pink-700 via-red-700 to-pink-800" : "hover:scale-105 hover:brightness-110 cursor-pointer"}
        ${!isUnlocked ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      <BiHeart
        className={`
          text-2xl
          transition-transform duration-700 ease-in-out
          ${isOpen ? "animate-pulse text-red-400 scale-125" : ""}
        `}
      />
      <span
        className={`
          transition-opacity duration-350
          ${isOpen ? "opacity-100" : "opacity-70"}
        `}
      >
        {isOpen ? content : `Açılacak: ${new Date(unlockDate).toLocaleDateString()}`}
      </span>
    </button>
  );
}
