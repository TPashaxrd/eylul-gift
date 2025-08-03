import { useState } from "react";
import Intro from "./Intro";
import { info } from "../data/info";

export default function PasswordGate() {
  const [password, setPassword] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [error, setError] = useState("");

  const correctPassword = "prensesim";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.trim().toLowerCase() === correctPassword.toLowerCase()) {
      setIsUnlocked(true);
      setError("");
    } else {
      setError(`Şifre yanlış, İPUCU: ${info.girlName} benim neyim?`);
    }
  };

  if (isUnlocked) {
    return <Intro />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-800 flex flex-col items-center justify-center px-8 text-white">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center space-y-6 bg-white/20 backdrop-blur-md p-10 rounded-3xl shadow-lg max-w-md w-full border border-pink-400"
      >
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide text-pink-200 drop-shadow-lg">
          💖 Giriş Yap 💖
        </h2>

        <input
          type="password"
          placeholder="Şifreyi gir yavrum..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-5 py-4 text-white rounded-xl bg-gray-900 text-black font-semibold text-lg shadow-inner focus:outline-none focus:ring-4 focus:ring-pink-400 transition"
          autoFocus
        />

        {error && (
          <p className="text-red-400 font-space-grotesk text-lg text-center italic animate-pulse select-none">
            {error}
          </p>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 hover:from-pink-600 hover:via-red-600 hover:to-pink-700
            text-white font-bold text-lg rounded-xl py-4 shadow-lg shadow-pink-500/60
            transform transition-transform active:scale-95 duration-150"
        >
          Giriş Yap
        </button>

        <p className="mt-4 text-pink-100 italic text-center select-none tracking-wide">
          Şifreyi bilmiyorsan ipucuna bak! 🔐
        </p>
      </form>
    </div>
  );
}
