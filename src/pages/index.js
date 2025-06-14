// WeddingInvitation.jsx

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FireworksCanvas from "../components/FireworksCanvas";

export default function WeddingInvitation() {
  const [entered, setEntered] = useState(false);
  const [step, setStep] = useState(-1);
  const audioRef = useRef(null);
  const [audioStarted, setAudioStarted] = useState(false);

 useEffect(() => {
  if (!entered || step >= 4) return;

  const stepDurations = [5000, 4000, 20000, 20000]; // durations in milliseconds

  const timeout = setTimeout(() => {
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
  }, stepDurations[step]);

  return () => clearTimeout(timeout);
}, [step, entered]);


  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => setStep(0), 500);

    if (!audioStarted) {
      const playAudio = () => {
        const audio = audioRef.current;
        if (audio) {
          audio.play().catch(() => {});
          setAudioStarted(true);
        }
      };
      setTimeout(playAudio, 300);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-tr from-rose-100 via-white to-pink-200 p-6 relative overflow-hidden font-serif text-rose-900">
      {!entered && (
        <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 text-center p-8 absolute inset-0 z-50">
          <h1 className="text-3xl font-bold text-pink-700 mb-6">You're Invited! 💍</h1>
          <p className="text-lg text-pink-600 mb-4">
            Tap below to experience something magical with music 🌹🎶
          </p>
          <button
            onClick={handleEnter}
            className="px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 transition"
          >
            🌸 Tap to Begin 🌸
          </button>
        </div>
      )}

      {/* Floating hearts */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-400 text-2xl animate-ping"
            style={{
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDuration: `${3 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <div className="z-10 text-center max-w-xl">
        {step === 0 && (
          <motion.h1
            className="text-6xl font-extrabold text-pink-800 drop-shadow-md animate-pulse"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            🎉 Happy Days.. 🥰
          </motion.h1>
        )}

        {step === 1 && (
          <motion.h2
            className="text-5xl font-semibold text-pink-700 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            😍 Guess What?
          </motion.h2>
        )}

        {step === 2 && (
          <>
            <FireworksCanvas />

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: { staggerChildren: 0.7 },
                },
              }}
              className="mt-8 flex flex-col items-center text-center z-10"
            >
              {/* Venkat */}
              <motion.div className="flex gap-2 text-6xl font-extrabold text-rose-700 drop-shadow-lg tracking-widest">
                {"Venkat".split("").map((char, i) => (
                  <motion.span
                    key={`venkat-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: -50, rotate: -30 },
                      visible: { opacity: 1, y: 0, rotate: 0 },
                    }}
                    transition={{
                      duration: 0.7,
                      delay: i * 0.7,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="inline-block animate-glow"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              {/* Heart and Rose */}
              <motion.div
                className="text-5xl mt-4 animate-pulse"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.2 }}
                transition={{ delay: 4.5, duration: 2 }}
              >
                ❤️🌹
              </motion.div>

              {/* Roja */}
              <motion.div className="flex gap-2 text-6xl font-extrabold text-rose-700 drop-shadow-lg tracking-widest mt-4">
                {"Roja".split("").map((char, i) => (
                  <motion.span
                    key={`roja-${i}`}
                    variants={{
                      hidden: { opacity: 0, y: 50, rotate: 30 },
                      visible: { opacity: 1, y: 0, rotate: 0 },
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 5.2 + i * 0.7,
                      type: "spring",
                      stiffness: 120,
                    }}
                    className="inline-block animate-glow"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>

              {/* Final Line */}
              <motion.div
                className="mt-8 text-2xl text-pink-800 italic font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 11.5, duration: 2 }}
              >
                are Getting Married!... 💞
              </motion.div>
            </motion.div>
          </>
        )}

        {step === 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-3xl mt-6 text-pink-700 font-medium"
          >
            📅 On 22nd June 2025, Sunday
          </motion.div>
        )}

        {step >= 4 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="text-xl mt-6 space-y-4 bg-white bg-opacity-70 p-6 rounded-2xl shadow-2xl text-pink-900"
          >
            <div>
              📍 <strong>Venue:</strong> R D Convention Hall, Doddballapura
            </div>
            <div>🕰️ <strong>Time:</strong> 11 AM to 12 PM</div>
            <a
              href="https://www.google.com/maps/place/RD+Convention+Hall/@13.3100285,77.5459367,3808m/data=!3m1!1e3!4m6!3m5!1s0x3bb1dfe28c0c18c3:0xc8428942b46d73af!8m2!3d13.3129944!4d77.5443638!16s%2Fg%2F11q9d58c_5?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-6 py-3 bg-pink-600 text-white font-bold rounded-full shadow-lg hover:bg-pink-700 transition-all"
            >
              📌 View Venue on Google Maps
            </a>
          </motion.div>
        )}
      </div>

      {/* Hidden Audio Player */}
      <audio ref={audioRef} loop>
        <source src="/rose_theme.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
