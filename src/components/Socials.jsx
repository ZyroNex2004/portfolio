"use client";

import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaDiscord,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function SocialSection() {
  const socials = [
    { name: "GitHub", icon: <FaGithub />, link: "https://github.com/xeylous" },
    { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/apurvsinha2003/" },
    { name: "Twitter", icon: <FaXTwitter />, link: "https://twitter.com/xeylous" },
    // { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/xeylous" }
  ];

  return (
    <section className="w-full  bg-white py-4">
      <div className="max-w-5xl mx-auto px-6">
        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-700 text-2xl hover:text-black transition-colors duration-300"
              aria-label={s.name}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
