'use client';

import { useState, useEffect } from "react";

const projects = [
  {
    title: "Shazam Redesign",
    image: "/shazam.png",
    tag: "Redesign",
    brief: "Improved music identification flow by simplifying navigation and prioritising the core action.",
    highlight: "Faster song recognition + clearer primary action",
    link: "https://www.notion.so/Improving-Usability-in-Shazam-Through-Clarity-Driven-Design-34ad054a19d480c4bb2dd0c28c740801"
  },
  {
    title: "Amul Ordering Experience",
    image: "/amul.png",
    tag: "UX / Concept",
    brief: "Designed a zero-to-one ordering system for everyday dairy purchases.",
    highlight: "Simplified ordering flow for instant purchases",
    link: "https://www.notion.so/Amul-Ordering-Experience-352d054a19d480e49d39caac53429387"
  },
  {
    title: "Apple Music Redesign",
    image: "/applemusic.png",
    tag: "Redesign",
    brief: "Reworked content hierarchy to improve discoverability and engagement.",
    highlight: "Improved navigation + content discovery",
    link: "https://www.notion.so/Apple-Music-Redesign-Case-Study-1e8d054a19d480e9a8e0d39e7b478136"
  },
  {
    title: "Prime Sports Drink",
    image: "/prime.png",
    tag: "Concept",
    brief: "Concept design exploring bold branding and high-energy product experience.",
    highlight: "High-energy branding + bold UI direction",
    link: "https://www.notion.so/Prime-Beverages-Website-Design-1e8d054a19d4803d9ee0c7163740096f"
  },
  {
    title: "YouTube Recreation",
    image: "/youtube.png",
    tag: "Recreation",
    brief: "Rebuilt layout structure to understand usability patterns.",
    highlight: "Deep dive into layout + usability patterns",
    link: "https://www.notion.so/Youtube-UI-Recreating-1e9d054a19d48029b7d1fc5cd523be80"
  },
  {
    title: "FLUX Banking",
    image: "/flux.png",
    tag: "Concept",
    brief: "Concept banking app focused on simplicity and intuitive finance actions.",
    highlight: "Minimal finance UX with intuitive flows",
    link: "https://www.notion.so/Banking-Site-Design-1ecd054a19d48067b272e96a7e6caedf"
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0b0c] text-white px-6 md:px-20 py-12 relative overflow-hidden">

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed top-0 left-0 w-[300px] h-[300px] rounded-full bg-white/10 blur-3xl z-30 transition-transform duration-150"
        style={{ transform: `translate(${mouse.x - 150}px, ${mouse.y - 150}px)` }}
      />

      {/* Header */}
      <div className="fixed top-0 left-0 w-full z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">
          <h1 className="text-lg font-semibold tracking-tight">Neil's Portfolio</h1>
          <span onClick={() => setContactOpen(true)} className="cursor-pointer px-4 py-1.5 rounded-full bg-white text-black">Contact</span>
        </div>
      </div>

      <div className="h-16" />

      {/* Hero */}
      <section className="mb-32 text-center">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-6">
          Neil J John
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Designing intuitive digital experiences that simplify complexity and elevate user interaction.
        </p>
      </section>

      {/* Featured */}
      <section className="mb-28 relative">
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-white/5 blur-3xl rounded-full pointer-events-none" />

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-tight text-center">
            Featured Work
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {projects.slice(0,2).map(p => (
              <div
                key={p.title}
                onClick={() => setSelectedProject(p)}
                className="group cursor-pointer rounded-2xl p-8 bg-gradient-to-br from-white/15 to-white/5 border border-white/20 shadow-[0_20px_80px_rgba(0,0,0,0.7)] hover:scale-[1.03] hover:border-white/50 transition duration-500 flex flex-col items-center text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition duration-500" />

                <div className="w-full flex justify-center mb-8 relative z-10">
                  <img src={p.image} alt={p.title} className="max-h-[340px] object-contain group-hover:scale-105 transition duration-500" />
                </div>

                <div className="w-12 h-[2px] bg-white/50 mb-4 group-hover:w-16 transition-all duration-500" />

                <h3 className="text-2xl font-semibold relative z-10">{p.title}</h3>
                <p className="text-sm text-gray-400 mt-2">{p.highlight}</p>
                <span className="text-xs mt-2 text-gray-500">Case Study • {p.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ALL PROJECTS */}
      <section className="mb-24">
        <h2 className="text-lg font-semibold mb-6">All Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(2).map(p => (
            <div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer bg-white/5 p-5 rounded-xl border border-white/10 hover:border-white/30 hover:scale-[1.02] transition duration-300"
            >
              <img src={p.image} alt={p.title} className="mb-4 rounded-md" />
              <h3 className="font-medium mb-1">{p.title}</h3>
              <p className="text-xs text-gray-400 mb-2">{p.highlight}</p>
              <span className="text-[10px] text-gray-500">{p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}
      {selectedProject && (
        <div
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white/10 border border-white/20 backdrop-blur-xl p-7 rounded-2xl max-w-md w-full relative shadow-[0_20px_80px_rgba(0,0,0,0.7)] text-center"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl transition"
            >
              ×
            </button>

            <h2 className="text-2xl font-semibold mb-3 tracking-tight">
              {selectedProject.title}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm mx-auto">
              {selectedProject.brief}
            </p>

            <div className="flex justify-center gap-4">
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-black rounded-lg text-sm font-medium hover:opacity-90 transition"
              >
                View Case Study
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 border border-white/30 rounded-lg text-sm hover:bg-white hover:text-black transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact */}
      {contactOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-white text-black p-6 rounded-xl w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-4">Get in touch</h3>
            <div className="flex flex-col gap-3">
              <a href="mailto:neiljjohn07@gmail.com" className="px-4 py-2 bg-black text-white rounded-md text-center">Email</a>
              <a href="https://www.linkedin.com/in/neil-j-john/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-black rounded-md text-center">LinkedIn</a>
              <a href="tel:+919048147551" className="px-4 py-2 border border-black rounded-md text-center">Call</a>
            </div>
            <button onClick={() => setContactOpen(false)} className="mt-4 text-sm text-gray-600 w-full">Close</button>
          </div>
        </div>
      )}

    </div>
  );
}
