import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../App.css";

const photos = ["11.png", "2.png", "3.png", "4.png", "5.png"];

export default function FourPhotos() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "auto";

    const handleKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKey);
    };
  }, [selected]);

  return (
    <section className="py-24 bg-[#FBF9F4] overflow-hidden">
      <div className="text-center mb-20">
        <h1 className="font-newsreader italic font-[300] text-[48px]">
          Over the years
        </h1>

        <p className="font-jakarta uppercase tracking-[2px] text-[#857279] text-[14px] mt-3">
          A tiny archive of memories
        </p>
      </div>

      <div className="carousel-wrapper">
        <div
          className="carousel3d"
          style={{
            animationPlayState: selected ? "paused" : "running",
          }}
        >
          {photos.map((photo, index) => (
            <span
              key={photo}
              style={{ "--i": index }}
              className="carousel-item"
            >
              <motion.img
                layoutId={photo}
                src={photo}
                alt=""
                whileHover={{
                  scale: 1.06,
                  y: -8,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 22,
                }}
                onClick={() => setSelected(photo)}
                className="cursor-pointer rounded-2xl"
              />
            </span>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: .25 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              layoutId={selected}
              src={selected}
              onClick={(e) => e.stopPropagation()}
              initial={{
                scale: .8,
                opacity: 0,
                rotate: 4,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              exit={{
                scale: .85,
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 24,
              }}
              className="max-w-[82vw] max-h-[88vh] rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,.45)]"
            />

            <motion.button
              initial={{ opacity: 0, scale: .8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: .9 }}
              onClick={() => setSelected(null)}
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/15 text-white text-3xl backdrop-blur-lg"
            >
              ×
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}