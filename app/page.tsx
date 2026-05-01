'use client';

import { useState, useEffect } from "react";

const projects = [
  {
    title: "Shazam Redesign",
    image: "/shazam.png",
    tag: "Redesign",
    brief: "I simplified how users identify songs by reducing clutter and making the main action clearer and faster.",
    highlight: "Reduced friction in music discovery with a clearer primary action",
    link: "https://www.notion.so/Improving-Usability-in-Shazam-Through-Clarity-Driven-Design-34ad054a19d480c4bb2dd0c28c740801"
  },
  {
    title: "Amul Ordering Experience",
    image: "/amul.png",
    tag: "UX / Concept",
    brief: "Designed a simple and fast ordering flow for ice cream purchases, focusing on speed and ease.",
    highlight: "Made ordering faster and more intuitive for quick purchases",
    link: "https://www.notion.so/Amul-Ordering-Experience-352d054a19d480e49d39caac53429387"
  },
  {
    title: "Apple Music Redesign",
    image: "/applemusic.png",
    tag: "Redesign",
    brief: "Reorganized content and navigation to make music easier to find and explore.",
    highlight: "Improved content discovery through better structure",
    link: "https://www.notion.so/Apple-Music-Redesign-Case-Study-1e8d054a19d480e9a8e0d39e7b478136"
  },
  {
    title: "Prime Sports Drink",
    image: "/prime.png",
    tag: "Concept",
    brief: "Explored bold branding and energetic UI to match the product’s personality.",
    highlight: "Created a bold and energetic visual experience",
    link: "https://www.notion.so/Prime-Beverages-Website-Design-1e8d054a19d4803d9ee0c7163740096f"
  },
  {
    title: "YouTube Recreation",
    image: "/youtube.png",
    tag: "Recreation",
    brief: "Rebuilt YouTube’s interface to understand layout systems and usability patterns.",
    highlight: "Studied layout systems and user behavior patterns",
    link: "https://www.notion.so/Youtube-UI-Recreating-1e9d054a19d48029b7d1fc5cd523be80"
  },
  {
    title: "FLUX Banking",
    image: "/flux.png",
    tag: "Concept",
    brief: "Designed a minimal banking experience focused on clarity and ease of use.",
    highlight: "Simplified finance interactions with clean UX",
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

      {/* Gradient Mesh Background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(255,255,255,0.05),transparent_40%)]" />
      </div>

      {/* Floating blobs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-white/5 rounded-full blur-3xl animate-[float1_16s_ease-in-out_infinite]" />
        <div className="absolute right-0 top-1/3 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-[float2_18s_ease-in-out_infinite]" />
      </div>

      {/* Grain texture */}
      <div className="pointer-events-none fixed inset-0 z-10 opacity-[0.04] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

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
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-6 bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
          Neil J John
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
          I design simple, easy-to-use digital experiences.
        </p>

        <p className="text-sm text-gray-500 mt-4 max-w-xl mx-auto">
          Focused on clarity, usability, and making products feel effortless.
        </p>
      </section>

      {/* Featured */}
      <section className="mb-28 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Featured Work</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.slice(0,2).map(p => (
            <div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer rounded-2xl p-8 bg-gradient-to-br from-white/20 to-white/5 border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.8)] hover:scale-[1.04] hover:border-white/60 transition duration-500 flex flex-col items-center text-center"
            >
              <div className="w-full flex justify-center mb-8">
                <img src={p.image} className="max-h-[340px] object-contain group-hover:scale-105 transition duration-500" />
              </div>

              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-sm text-gray-400 mt-2">{p.highlight}</p>
              <span className="text-xs mt-2 text-gray-500">Case Study • {p.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ALL PROJECTS */}
      <section className="mb-24">
        <h2 className="text-lg font-semibold mb-6">All Projects</h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {projects.slice(2).map(p => (
            <div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="group cursor-pointer bg-gradient-to-br from-white/10 to-white/0 p-5 rounded-xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)] hover:border-white/30 hover:scale-[1.02] transition duration-300 flex flex-col h-full"
            >
              <div className="h-[180px] flex items-center justify-center mb-4">
                <img src={p.image} className="max-h-full object-contain" />
              </div>
              <div className="mt-auto text-left">
                <h3 className="font-medium mb-1">{p.title}</h3>
                <p className="text-xs text-gray-400 mb-2">{p.highlight}</p>
                <span className="text-[10px] text-gray-500">{p.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popup */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center p-6 z-50">
          <div className="bg-white/10 border border-white/20 backdrop-blur-xl p-7 rounded-2xl max-w-md w-full text-center">
            <h2 className="text-2xl font-semibold mb-3">{selectedProject.title}</h2>
            <p className="text-gray-400 text-sm mb-6">{selectedProject.brief}</p>
            <a href={selectedProject.link} target="_blank" className="px-5 py-2.5 bg-white text-black rounded-lg text-sm">View Case Study</a>
          </div>
        </div>
      )}

    </div>
  );
}
