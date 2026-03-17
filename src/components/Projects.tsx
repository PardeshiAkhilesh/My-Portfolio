'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { id: 1, title: 'AI-Powered Doctor Appointment Booking Agent', category: 'Voice Automation / GenAI', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2564' },
  { id: 2, title: 'Chat Constitution Chatbot', category: 'RAG / Document Retrieval', image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=2564' },
  { id: 3, title: 'Movie Recommendation System', category: 'Machine Learning / NLP', image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=2564' },
];

export default function Projects() {
  return (
    <section className="relative w-full min-h-screen bg-[#050505] py-32 px-6 md:px-24 overflow-hidden z-20">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <h2 className="text-5xl md:text-7xl font-light text-white mb-20 tracking-tight">
          Selected <br className="md:hidden" /><span className="font-bold">Works.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pl-0 md:pl-24 pr-0 md:pr-12">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
  const [hovered, setHovered] = useState(false);
  const isOffset = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative group cursor-pointer overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md p-8 h-[500px] md:h-[600px] flex flex-col justify-end transition-colors duration-500 hover:bg-white/[0.04] ${isOffset ? 'md:mt-32' : ''}`}
    >
      {/* Hover glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity duration-700 ${hovered ? 'opacity-90' : 'opacity-70'}`} />
      
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${project.image})`,
          transform: hovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div className="relative z-20 transform transition-transform duration-700 ease-out translate-y-6 group-hover:translate-y-0">
        <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-3">{project.category}</p>
        <h3 className="text-4xl font-semibold text-white tracking-tight leading-tight">{project.title}</h3>
        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 h-[1px] w-12 bg-white" />
      </div>
    </motion.div>
  );
}
