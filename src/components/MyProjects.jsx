"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github } from "lucide-react";

const projects = [
  {
    title: "SmartGPT",
    subtitle: "AI Powered Chat Application",
    description:
      "SmartGPT is a full-stack AI chatbot built using Google Gemini API. It provides real-time conversational responses, persistent chat history, context-aware interactions, and a modern ChatGPT-style interface.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
    ],
    image: "/smartgpt.png",
    github: "https://github.com/ZyroNex2004/SmartGPT",
    site: "https://smart-gpt-azure.vercel.app",
  },

  {
    title: "QuickBlog",
    subtitle: "AI Powered Blogging Platform",
    description:
      "QuickBlog is a MERN-based blogging platform integrated with Google Gemini AI. Users can generate blog content automatically, manage articles, upload images, and securely authenticate using JWT.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "JWT",
      "Gemini API",
      "ImageKit",
    ],
    image: "/quickblog.png",
    github: "https://github.com/ZyroNex2004/Quick_Blog",
    site: "https://quick-blog-three-orpin.vercel.app",
  },

  {
    title: "Stockify",
    subtitle: "Zerodha Inspired Trading Platform",
    description:
      "Stockify is a stock trading and portfolio management platform inspired by Zerodha. It provides stock tracking, watchlists, portfolio monitoring, responsive dashboards, and a clean modern UI.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    image: "/stockify.png",
    github: "https://github.com/ZyroNex2004/Stockify",
    site: "https://stockify-amber.vercel.app",
  },

  {
    title: "GlobeTrek",
    subtitle: "Travel & Tourism Platform",
    description:
      "GlobeTrek is a travel and tourism platform that helps users discover destinations, explore attractions, and plan journeys. It focuses on responsive design and a smooth user experience.",
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Express.js",
    ],
    image: "/globetrek.png",
    github: "https://github.com/ZyroNex2004/GlobeTrek",
    site: "https://globetrek-vvfn.onrender.com",
  },
];

export default function FeaturedProjects() {
  const [overlayVisible, setOverlayVisible] = useState(true);

  useEffect(() => {
    let timer;
    if (!overlayVisible) {
      timer = setTimeout(() => setOverlayVisible(true), 1500);
    }
    return () => clearTimeout(timer);
  }, [overlayVisible]);

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setOverlayVisible(false);
    }
  };

  return (
    <section id="projects" className="w-full bg-white py-5">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl pb-7 sm:text-5xl font-extrabold text-center bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent mb-16"
        >
          My Projects
        </motion.h2>

        <div className="flex flex-col space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className="relative w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 group"
                onClick={handleClick}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div
                  className={`absolute inset-0 bg-teal-600/50 transition-opacity duration-700
                  ${overlayVisible ? "opacity-100" : "opacity-0"}
                  md:group-hover:opacity-0`}
                />
              </div>

              {/* CONTENT */}
              <div className="w-full md:w-1/2 space-y-4">
                <p className="text-teal-600 text-sm uppercase tracking-wide">
                  {project.subtitle}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold text-zinc-800">
                  {project.title}
                </h3>

                <div className="bg-zinc-100 rounded-lg p-5 shadow-inner">
                  <p
                    className="text-zinc-700 leading-relaxed"
                    style={{ fontFamily: "Delius" }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 pt-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm bg-zinc-200 text-zinc-700 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="flex items-center gap-6 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-700 hover:text-zinc-900 transition"
                  >
                    <Github className="w-6 h-6" />
                  </a>

                  <a
                    href={project.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg bg-zinc-800 text-white hover:bg-zinc-700 transition text-sm"
                  >
                    Visit Site ↗
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}