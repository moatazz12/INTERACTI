'use client';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function SocialIcons() {
  return (
    <>
      <a
        href="https://www.facebook.com/interactiagency"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 border border-[#330052] rounded-full flex items-center justify-center text-[#330052] hover:bg-[#330052] hover:text-white transition"
      >
        <FaFacebookF size={14} />
      </a>

      <a
        href="https://www.linkedin.com/company/interactiagency/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 border border-[#330052] rounded-full flex items-center justify-center text-[#330052] hover:bg-[#330052] hover:text-white transition"
      >
        <FaLinkedinIn size={14} />
      </a>

      <a
        href="https://www.instagram.com/interactiagency/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 border border-[#330052] rounded-full flex items-center justify-center text-[#330052] hover:bg-[#330052] hover:text-white transition"
      >
        <FaInstagram size={14} />
      </a>
    </>
  );
}
