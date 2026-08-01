import React, { useState } from "react";
import { Link } from "react-router-dom";
const bits = [
  {
    image: "CR2.png",
    category: "VISIT TO DENMARK",
    title: "A Danish Home",
    description:
      "A glimpse into Danish culture through everyday things and how they have evolved.",
    link: "https://heyzine.com/flip-book/10df329ed0.html#page/1",
  },
  {
    image: "CR3.png",
    category: "EXPERIENCE DESIGN",
    title: "Recho",
    description:
      "Designed a sustainable gift box kit with customizable audio messages.",
    link: " https://www.youtube.com/watch?v=UL2xwa7nvmA",
  },
  {
    image: "CR4.png",
    category: "SYSTEM DESIGN",
    title: "Coldplay Concert",
    description:
      "Coldplay India concert was more than a live show, it became a social phenomenon.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7417785175394234368/",
  },
  {
    image: "CR5.png",
    category: "HEURISTIC EVALUATION",
    title: "Myntra App",
    description:
      "Closely observed everyday user flows through the lens of usability principles.",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7413087537180839936/",
  },
  {
    image: "CR6.png",
    category: "WEBSITE PROTOTYPE",
    title: "Global Recipes",
    description:
      "One platform to explore recipes across multiple cuisines.",
    link: "https://www.figma.com/proto/mT5R3oEZzBx5i3A2tQ2Ibr/Global-Recipe--Shreya-Agrawal-?node-id=1-2&p=f&t=BrZD3Fq5C2SqTGiN-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
  },
  {
    image: "CR7.png",
    category: "BUSINESS MODEL",
    title: "Swiggy on Campus",
    description:
      "How Swiggy Can Become the Go-To Food Companion on Campus?",
    link: "https://drive.google.com/drive/folders/1RwFtuDcEaj48a8RaubtwUXmLlBD-simE",
  },
];

const Bits = () => {
  const [mousePos, setMousePos] = useState({});

  return (
    <section className="bg-[#FCF8F3] py-24">
      <div className="mx-auto max-w-[1280px]">
        <h2 className="mb-16 text-center font-newsreader text-[40px] italic text-[#0A0A0A]">
          Explore Other Bits
        </h2>

        <div className="grid grid-cols-3 justify-items-center gap-x-8 gap-y-10">
          {bits.map((item, index) => (
            <div
              key={index}
              className="group relative w-[347px] overflow-hidden rounded-2xl bg-white p-3 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();

                setMousePos((prev) => ({
                  ...prev,
                  [index]: {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                  },
                }));
              }}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[300px] w-full rounded-xl object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-0"
                />

                {/* Spotlight ONLY on image */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(
                      circle 160px at ${mousePos[index]?.x || 170}px ${mousePos[index]?.y || 150
                      }px,
                      rgba(255,255,255,0.30),
                      rgba(255,255,255,0.05) 45%,
                      rgba(0,0,0,0.35) 100%
                    )`,
                  }}
                />
              </div>

              {/* CONTENT */}
              <div className="mt-5 px-2">
                <p className="font-jakarta text-[10px] uppercase tracking-[2px] text-[#F285BD]">
                  {item.category}
                </p>

                <h3 className="mt-1 font-newsreader text-[26px] italic text-[#222]">
                  {item.title}
                </h3>

                <p className="mt-3 font-jakarta text-[13px] leading-6 text-[#666]">
                  {item.description}
                </p>
              </div>

              {/* BUTTON */}
              {/* BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto translate-y-6 scale-90 cursor-pointer rounded-full bg-white px-8 py-3 font-jakarta font-semibold text-[#70194E] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 hover:scale-105 hover:bg-[#F285BD] hover:text-white"
                >
                  Know More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bits;