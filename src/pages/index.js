// src/pages/index.js

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function WeddingInvitation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step >= 4) return; // Stop auto-advance after final step
    const interval = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }, 5000);
    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-rose-100 via-white to-pink-200 p-6 relative overflow-hidden font-serif text-rose-900">
      {/* Floating heart emoji animation */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-400 text-2xl animate-ping"
            style={{
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="z-10 text-center max-w-xl">
        {step === 0 && (
          <motion.h1
            className="text-6xl font-extrabold text-pink-800 drop-shadow-md animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            🎉 Happy News💞 🎉
          </motion.h1>
        )}

        {step === 1 && (
          <motion.h2
            className="text-5xl font-semibold text-pink-700 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            😍Guess What?
          </motion.h2>
        )}

        {step === 2 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-4xl mt-6 font-bold text-pink-900"
          >
            Venkat ❤️🌹 Roja<br />
            are Getting Married!💞
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-3xl mt-6 text-pink-700 font-medium"
          >
            📅 On 22nd June 2025
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-xl mt-6 space-y-4 bg-white bg-opacity-70 p-6 rounded-2xl shadow-2xl text-pink-900"
          >
            <div>📍 <strong>Venue:</strong> Sri Maha Hall, Anna Nagar, Dodballapura</div>
            <div>🕰️ <strong>Time:</strong> 9:00 AM</div>
            <a
              href="https://www.google.com/maps/place/13.0827,80.2707"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-6 py-3 bg-pink-600 text-white font-bold rounded-full shadow-lg hover:bg-pink-700 transition-all"
            >
              📌 View Venue on Google Maps
            </a>
          </motion.div>
        )}
      </div>

      <audio autoPlay loop className="hidden">
        <source src="/rose_theme.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
