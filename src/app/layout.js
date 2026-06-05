// import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Rohit Kumar | MERN Stack Developer",
  description:
    "Portfolio of Rohit Kumar - MERN Stack Developer, AI Enthusiast and Software Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CA:wght@100..400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playwrite+CA:wght@100..400&family=Satisfy&display=swap"
          rel="stylesheet"
        ></link>
        <link href="https://fonts.googleapis.com/css2?family=Delius&display=swap" rel="stylesheet">
        </link>
      </head>
      <body className="bg-slate-900 text-slate-100">
        <Navbar />
        <div className={` sm:pt-14 md:pt-14 lg:pt-14`}>{children}</div>
      </body>
    </html>
  );
}
