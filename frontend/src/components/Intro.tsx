import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMusic, FaCoffee, FaSun, FaCalendarAlt } from "react-icons/fa";
import ayicik from '../Pictures/girl-dance.gif';
import { info } from "../data/info";

const ortaklar = [
  { icon: <FaMusic className="text-indigo-500" />, text: "Cumhuriyet’in ilk günleri gibisiniz hanimefendi" },
  { icon: <FaCoffee className="text-yellow-500" />, text: "Hmm. Bazı şeyler hissedilir, kelimelerle anlatılmaz." },
  { icon: <FaSun className="text-orange-400" />, text: "Hey! Unutma. Anıtkabir'de fotoğraf çekileceğiz" },
  { icon: <FaCalendarAlt className="text-purple-600" />, text: `${info.date}, Unutulmayacak gün ;)` },
];

export default function Intro({ onEnter }: { onEnter?: () => void }) {
  const [showIntro, setShowIntro] = useState(true);
  const [showGiris, setShowGiris] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
      setShowGiris(true);
    }, 7500);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterClick = () => {
    setShowGiris(false);
    if (onEnter) onEnter();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 flex flex-col items-center justify-center px-8 relative overflow-hidden text-white select-none">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 1.2 } }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.8 } }}
            className="text-center max-w-xl"
          >
            <motion.h1
              className="text-8xl font-extrabold mb-6 drop-shadow-xl"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              E &lt;3 T
            </motion.h1>
            <motion.p
              className="text-xl tracking-wide font-semibold mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 1.5, duration: 1 } }}
            >
              Hoş geldin Tatlımm! Hadii biraz gezinelim.
            </motion.p>

            <motion.ul
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-6 text-lg font-medium"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.9,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: { duration: 0.8 },
                },
              }}
            >
              {ortaklar.map(({ icon, text }, i) => (
                <motion.li
                  key={i}
                  className="flex items-center space-x-5"
                  variants={{
                    hidden: { opacity: 0, x: -40 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
                  }}
                >
                  <span className="text-4xl">{icon}</span>
                  <span className="italic text-white/90">{text}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}

        {showGiris && (
          <motion.div
            key="giris"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeOut" } }}
            exit={{ opacity: 0, y: -30, transition: { duration: 0.8 } }}
            className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-12 flex flex-col items-center cursor-pointer select-none"
            onClick={handleEnterClick}
          >
            <img src={ayicik} alt="Bear Kiss" className="w-24 h-24 rounded-full mb-6 shadow-lg border-4 border-pink-500" />
            <span className="text-4xl font-extrabold text-pink-700 tracking-wider">
              E &lt;3 T
            </span>
            <p className="mt-3 font-bold text-pink-500 text-center max-w-xs leading-relaxed">
              Hoş geldin hanimefendicim!. <br />
              Rica etsem, Dokunurmusun??.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
