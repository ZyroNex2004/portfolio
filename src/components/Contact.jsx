// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";

// export default function Contact() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(form),
//       });

//       if (res.ok) {
//         setStatus("✅ Message sent successfully!");
//         setForm({ name: "", email: "", message: "" });
//       } else {
//         setStatus("❌ Failed to send. Try again!");
//       }
//     } catch (error) {
//       console.error(error);
//       setStatus("⚠️ Something went wrong!");
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="flex flex-col md:flex-row items-center justify-center px-6  bg-white text-zinc-900 gap-12"
//     >
//       {/* Vertical Title */}
//       <motion.h2
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true }}
//         className="text-4xl md:text-6xl font-extrabold tracking-wider text-zinc-900"
//       >
//         {/* Horizontal (mobile) */}
//         <span className="block md:hidden bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent">
//           Get in Touch
//         </span>

//         {/* Vertical (md and above) */}
//         <span
//           className="hidden md:block bg-gradient-to-b from-zinc-900 via-zinc-500 to-zinc-900 bg-clip-text text-transparent"
//           style={{
//             writingMode: "vertical-rl",
//             textOrientation: "mixed",
//           }}
//         >
//           Get in Touch
//         </span>
//       </motion.h2>

//       {/* Contact Form */}
//       <motion.form
//         onSubmit={handleSubmit}
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         viewport={{ once: true }}
//         className="w-full max-w-lg bg-white backdrop-blur-lg border border-zinc-200 shadow-md rounded-2xl p-6"
//       >
//         <div className="mb-4">
//           <label className="block text-sm font-medium text-zinc-700">
//             Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             placeholder="Your Name"
//             className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/70 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none transition"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-zinc-700">
//             Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             required
//             placeholder="you@example.com"
//             className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/70 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none transition"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium text-zinc-700">
//             Message
//           </label>
//           <textarea
//             rows="5"
//             name="message"
//             value={form.message}
//             onChange={handleChange}
//             required
//             placeholder="Your Message..."
//             className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white/70 shadow-sm focus:ring-2 focus:ring-zinc-900 focus:outline-none transition"
//           ></textarea>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-zinc-900 text-white py-3 rounded-xl font-medium hover:bg-zinc-800 transition"
//         >
//           Send Message
//         </button>

//         {status && (
//           <p className="text-center text-sm text-zinc-700 mt-4">{status}</p>
//         )}
//       </motion.form>
//     </section>
//   );
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import validator from "validator";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Email validation using validator
  if (!validator.isEmail(form.email)) {
    setStatus({ type: "error", message: "⚠️ Please enter a valid email address." });
    return;
  }

  setLoading(true);
  setStatus(null);

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus({ type: "success", message: "✅ Your message has been sent successfully!" });
      setForm({ name: "", email: "", subject: "", message: "" }); // clear form
    } else {
      setStatus({ type: "error", message: "❌ Failed to send message. Please try again later." });
    }
  } catch (error) {
    console.error(error);
    setStatus({ type: "error", message: "⚠️ Something went wrong. Please try again." });
  }

  setLoading(false);
};


  return (
    <section id="contact" className="w-full bg-white text-zinc-900 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-zinc-200 rounded-2xl shadow-md p-8 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-zinc-600 mb-6">
              I'm passionate about creating digital experiences that make a
              difference. Reach out via email, phone, or socials.
            </p>
            <div className="space-y-4 text-zinc-700">
              <p className="flex items-center gap-3">
                <FaEnvelope />rohitkumar99421@gmail.com
              </p>
              {/* <p className="flex items-center gap-3"><FaPhone /> +123 456 7890</p> */}
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt /> Jaipur, Rajasthan, India
              </p>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold mb-3">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/ZyroNex2004"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-300 hover:bg-zinc-100 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-813927290/"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-300 hover:bg-zinc-100 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/irohit_59"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-300 hover:bg-zinc-100 transition"
              >
                <FaXTwitter />
              </a>
              {/* <a
                href="https://instagram.com/xeylous"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg border border-zinc-300 hover:bg-zinc-100 transition"
              >
                <FaInstagram />
              </a> */}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white border border-zinc-200 rounded-2xl shadow-md p-8 space-y-6"
        >
          <h3 className="text-2xl font-bold mb-2">Start a Conversation</h3>
          <p className="text-zinc-600 mb-6">
            Fill out the form below and I'll get back to you soon.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Full Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            placeholder="Subject"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
          />

          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-zinc-900 focus:outline-none"
          ></textarea>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-lg font-medium transition cursor-pointer ${
              loading
                ? "bg-gray-400 text-white cursor-not-allowed"
                : "bg-zinc-900 text-white hover:bg-zinc-800"
            }`}
          >
            {loading ? "Sending..." : "Send Message →"}
          </button>

          {/* Status messages */}
          {status && (
            <p
              className={`text-center text-sm mt-4 ${
                status.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
