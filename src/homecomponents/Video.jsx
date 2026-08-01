import React from 'react'
import { Link } from "react-router-dom";
import Work from "../pages/Work.jsx"
const Video = () => {
    return (
        <div className='flex flex-row justify-center gap-8'>
            <div>
                <div className="overflow-hidden rounded-[40px] w-[738px] h-[415px]">
                    <video
                        src="/video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover scale-x-[1.15] scale-y-[1.00]"
                    />
                </div>

            </div>

            <div className="w-[357.33px] h-[419px] rounded-2xl bg-[#EAE8E3] p-5 flex flex-col">
                <img className="w-8 ml-5 mt-1" src="Icon.png" alt="" />

                <h2 className="px-5 pt-5 font-newsreader italic text-[30px] leading-tight">
                    Merging ideas with <br />
                    functional design <br />
                    principles.
                </h2>

                {/* This takes all remaining space */}
                <div className="flex-1"></div>

                <div className="px-1 pb-4">
                    <p className="px-5 mb-5 text-[16px] leading-8 w-[300px] ">
                        A journey through pixels, materials, and experience.
                    </p>

                    <Link
                        to="/Work"
                        className="block w-full py-3 rounded-full bg-[#9A3C70] text-white text-center"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Video
