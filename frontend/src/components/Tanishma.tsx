import { info } from "../data/info";
import { useState, useEffect } from "react";
import { FaCalendarDay, FaHourglassHalf } from "react-icons/fa";

type TanishmaProps = {
  onBack: () => void;
};

function daysSince(dateStr: string): number {
  const start = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - start.getTime();
  return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getWeekday(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", { weekday: "long" });
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Tanishma({ onBack }: TanishmaProps) {
  const [daysPassed, setDaysPassed] = useState(0);
  const [weekday, setWeekday] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    setDaysPassed(daysSince(info.date));
    setWeekday(getWeekday(info.date));
    setFormattedDate(formatDate(info.date));
  }, []);

  return (
    <section className="mt-8 max-w-4xl w-full bg-white bg-opacity-20 rounded-3xl p-8 shadow-lg text-gray-100">
      <button
        onClick={onBack}
        className="mb-6 text-sm underline text-purple-300 hover:text-purple-500"
      >
        ← Geri dön
      </button>

      <h2 className="text-3xl font-bold mb-6">Tanışma Günü</h2>

      <div className="space-y-6 max-w-md mx-auto">
        <div className="flex items-center bg-purple-700 bg-opacity-40 rounded-xl p-4 shadow-md">
          <FaHourglassHalf className="text-4xl mr-4 text-pink-400" />
          <div>
            <p className="text-sm uppercase tracking-widest text-pink-300 font-semibold">
              Kaç Gün Geçti
            </p>
            <p className="text-3xl font-bold">{daysPassed} gün</p>
          </div>
        </div>

        <div className="flex items-center bg-purple-700 bg-opacity-40 rounded-xl p-4 shadow-md">
          <FaCalendarDay className="text-4xl mr-4 text-pink-400" />
          <div>
            <p className="text-sm uppercase tracking-widest text-pink-300 font-semibold">
              Hangi Gün
            </p>
            <p className="text-3xl font-bold capitalize">{weekday}</p>
          </div>
        </div>

        <div className="flex items-center bg-purple-700 bg-opacity-40 rounded-xl p-4 shadow-md">
          <FaCalendarDay className="text-4xl mr-4 text-pink-400" />
          <div>
            <p className="text-sm uppercase tracking-widest text-pink-300 font-semibold">
              Hangi Tarih
            </p>
            <p className="text-3xl font-bold">{formattedDate}</p>
          </div>
        </div>
      </div>

      <p className="mt-10 text-lg leading-relaxed text-center italic text-pink-300">
        {info.dateDescription || "O özel gün, hayatımızın en güzel başlangıcıydı..."}
      </p>
    </section>
  );
}
