"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="flex flex-col justify-center gap-5 px-10 py-5 md:pt-[30px] bg-white lg:pt-0 min-h-screen"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent text-center"
      >
        ABOUT ME
      </motion.h2>

      <div className="lg:flex lg:justify-center lg:pl-32">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center my-3.5"
        >
          <Image
            src="/Photo.png"
            alt="Rohit Kumar"
            width={250}
            height={100}
            className="rounded-lg border-4 border-zinc-700 shadow-xl object-cover h-[300px] w-80 object-top"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-full flex flex-col gap-3 text-lg leading-relaxed text-zinc-700 text-center md:text-left md:px-20 md:pl-10"
          style={{ fontFamily: "Delius" }}
        >
          <p>
            Hello, I am{" "}
            <span className="text-sky-500 font-semibold">
              Rohit Kumar
            </span>
            , a{" "}
            <span className="text-purple-500 font-semibold">
              B.Tech Computer Science Engineering Student
            </span>
            . I am passionate about{" "}
            <span className="text-pink-500 font-semibold">
              Full Stack Development
            </span>{" "}
            and{" "}
            <span className="text-green-500 font-semibold">
              Artificial Intelligence
            </span>
            , building modern web applications and AI-powered solutions that
            solve real-world problems.
          </p>

          <p>
            I specialize in creating scalable applications using{" "}
            <span className="text-yellow-500 font-semibold">
              React.js
            </span>
            ,{" "}
            <span className="text-indigo-500 font-semibold">
              Node.js
            </span>
            ,{" "}
            <span className="text-red-500 font-semibold">
              MongoDB
            </span>
            , REST APIs, and Google Gemini AI integration. My focus is on
            delivering clean, efficient, and user-friendly products.
          </p>

          <p className="hidden md:block lg:block">
            Some of my notable projects include{" "}
            <span className="text-blue-600 font-semibold">
              SmartGPT
            </span>
            ,{" "}
            <span className="text-emerald-500 font-semibold">
              QuickBlog
            </span>
            ,{" "}
            <span className="text-orange-500 font-semibold">
              Stockify
            </span>
            , and{" "}
            <span className="text-pink-500 font-semibold">
              GlobeTrek
            </span>
            . These projects helped me strengthen my skills in full-stack
            development, authentication systems, AI integration, and cloud
            deployment.
          </p>

          <p className="hidden md:block lg:block">
            Beyond coding, I enjoy solving DSA problems, exploring emerging
            technologies, participating in hackathons, and continuously
            improving my software engineering skills.
          </p>

          <p className="font-medium">
            Here are a few technologies I've been working with recently:
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2 pt-3 text-sm sm:text-base text-zinc-600">
            <span className="before:content-['▸'] before:mr-2 text-orange-500">
              Java
            </span>

            <span className="before:content-['▸'] before:mr-2 text-yellow-500">
              JavaScript
            </span>

            <span className="before:content-['▸'] before:mr-2 text-sky-500">
              ReactJS
            </span>

            <span className="before:content-['▸'] before:mr-2 text-lime-600">
              NodeJS
            </span>

            <span className="before:content-['▸'] before:mr-2 text-purple-500">
              ExpressJS
            </span>

            <span className="before:content-['▸'] before:mr-2 text-green-600">
              MongoDB
            </span>

            <span className="before:content-['▸'] before:mr-2 text-blue-600">
              MySQL
            </span>

            <span className="before:content-['▸'] before:mr-2 text-pink-500">
              Tailwind CSS
            </span>

            <span className="before:content-['▸'] before:mr-2 text-zinc-700">
              Git
            </span>

            <span className="before:content-['▸'] before:mr-2 text-black">
              GitHub
            </span>

            <span className="before:content-['▸'] before:mr-2 text-red-500">
              Gemini API
            </span>

            <span className="before:content-['▸'] before:mr-2 text-emerald-500">
              Prompt Engineering
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}