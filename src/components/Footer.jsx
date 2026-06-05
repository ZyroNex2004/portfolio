"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800  py-4" style={{ fontFamily: "Delius" }}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-sm text-zinc-200 dark:text-zinc-200">
          Built with <span className="animate-pulse text-pink-500">♥️</span> by{" "}
          <span className="font-semibold text-white">
            Rohit
          </span>
        </p>
      </div>
    </footer>
  );
}
