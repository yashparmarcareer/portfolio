import React from "react";

const FestiveReflection = () => {
    return (
        <section className="w-full bg-[#FEC4DE] py-16">
            <div className="mx-auto flex w-full max-w-[1279px] items-center justify-between px-6">
                {/* Left Content */}
                <div className="max-w-[430px]">
                    <p className="mb-4 font-jakarta font-400 text-[#70194E]  text-[12px] uppercase tracking-[2.4px] ">
                        INSTALLATION DESIGN
                    </p>

                    <h2 className="mb-6 font-newsreader text-[#0A0A0A] text-[40px] font-500  italic leading-none ">
                        Festive Reflections
                    </h2>

                    <p className="mb-12 text-[16px] font-jakarta leading-8 text-[#534249]">
                        Designed an installation that enhances the vibrant, festive spirit
                        of Navratri, creating an interactive space for people to engage with
                        and capture memorable moments.
                    </p>

                    <a
                        href=" https://www.behance.net/gallery/214430723/Festive-Reflections"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="h-12 w-[156px] font-jakarta font-bold rounded-full bg-[#F285BD] text-[#2D1D2C] transition hover:opacity-90 cursor-pointer">
                            View Details
                        </button>
                    </a>
                </div>

                {/* Image Div (528 × 400) */}
                <div className="relative flex w-[528px] h-[400px] items-start justify-start">
                    <div
                        className="absolute top-[-8px] left-[-8px] h-[400px] w-[528px] rounded-2xl bg-white/5 rotate-[2deg]"
                    />

                    <div className="relative w-[528px] h-[400px] rotate-[-2deg]">
                        <img
                            src="CR1.png"
                            alt="Festive Reflection"
                            className="block w-full h-full rounded-2xl object-cover "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FestiveReflection;