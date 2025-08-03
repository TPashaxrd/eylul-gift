import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";
import ayicik from "../Pictures/ayicik-kisses.gif";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-pink-300 to-rose-400 flex flex-col items-center justify-center px-6 text-center text-rose-900 select-none">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6 max-w-xl"
      >
        <img
          src={ayicik}
          alt="Aşık Ayıcıklar"
          className="w-40 h-40 mx-auto rounded-full shadow-xl border-4 border-rose-300"
        />

        <h1 className="text-7xl font-extrabold tracking-widest drop-shadow-sm text-white">
          404
        </h1>

        <p className="text-xl font-medium text-white drop-shadow">
          Yanlış? Sayfa?.
        </p>

        <p className="text-red-600 font-space-grotesk text-white/80">
          Bu dallama developer yanlış kodlamış olabilir. Üzgünüm, sevgiyle kal 💞
        </p>

        <FaHeart className="text-4xl text-red-400 mx-auto animate-pulse" />

        <Link
          to="/"
          className="inline-block mt-4 px-8 py-3 rounded-full bg-white text-pink-600 font-space-grotesk font-bold shadow-lg hover:bg-pink-100 transition-all duration-300"
        >
          Kalbe Dön 💖
        </Link>
      </motion.div>
    </div>
  );
}
