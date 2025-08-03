import { useState, useEffect } from "react";
import { surpriseBoxData, type SurpriseData } from "../data/surpriseData";
import Sandik from "./Sandik";

type SurpriseBoxesProps = {
  onBack: () => void;
};

export default function SurpriseBoxes({ onBack }: SurpriseBoxesProps) {
  const [now, setNow] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000); // Her dakika kontrol
    return () => clearInterval(interval);
  }, []);

  const isUnlocked = (unlockDate: string) => now >= new Date(unlockDate);

  return (
    <section className="max-w-4xl w-full p-6 bg-purple-800 rounded-xl shadow-lg text-white flex flex-col items-center gap-8 overflow-y-auto" style={{ maxHeight: "80vh" }}>
      <button
        onClick={onBack}
        className="self-start mb-4 text-sm underline text-green-300 hover:text-green-500"
      >
        ← Geri dön
      </button>

      <h2 className="text-3xl font-bold mb-6">Sürpriz Sandıklar</h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {surpriseBoxData.map(({ id, unlockDate, content }: SurpriseData) => (
          <Sandik
            key={id}
            id={id}
            unlockDate={unlockDate}
            content={content}
            isUnlocked={isUnlocked(unlockDate)}
          />
        ))}
      </div>
    </section>
  );
}
