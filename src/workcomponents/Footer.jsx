import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-[#FBF9F4] px-6 py-28">

      <div className="w-full max-w-[1120px] flex flex-col items-center">

        {/* Name */}
        <h2 className="font-libertinus font-[400] italic text-[30px] text-[#18181B] tracking-[-1px]">
          Shreya Agrawal
        </h2>

        {/* Links */}
        <div className="flex items-center gap-14 mt-12">

          <a
            href="mailto:shreya.u22159@cept.ac.in"
            className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
          >
            EMAIL
          </a>

          <a
            href="https://www.linkedin.com/in/shreya-agrawal-b855a6341/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
          >
            LINKEDIN
          </a>

          <a
            href=" https://www.youtube.com/@shreyaagrawal3268"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
          >
            YOUTUBE
          </a>

          <a
            href="https://www.behance.net/shreyaagrawal33"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[400] text-[14px] tracking-[1.4px] text-[#71717A] underline"
          >
            BEHANCE
          </a>

        </div>

        {/* Bottom Text */}
        <p className="mt-16 text-[14px] tracking-[1.4px] font-[400] uppercase text-[#BE185D] font-jakarta">
          © 2026 Design Portfolio. Shreya Agrawal.
        </p>

      </div>
    </footer>
  );
};

export default Footer;