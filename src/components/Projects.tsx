'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  { 
    id: 1, 
    title: 'AI-Powered Doctor Appointment Booking Agent', 
    category: 'Voice Automation / GenAI', 
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2564',
    details: [
      'Voice-based booking system using VAPI + n8n automation.',
      'Google Calendar API for real-time slots.',
      'LLM prompt flow for extracting name, date, time, phone.',
      'Reduced manual booking effort by 80%.'
    ]
  },
  { 
    id: 2, 
    title: 'Chat Constitution Chatbot', 
    category: 'RAG / Document Retrieval', 
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=2564',
    details: [
      'Built RAG chatbot using LangChain + Groq + FAISS.',
      'PDF semantic search + contextual retrieval.',
      'Flask backend for chat API.'
    ]
  },
  { 
    id: 3, 
    title: 'Movie Recommendation System', 
    category: 'Machine Learning / NLP', 
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2564',
    details: [
      'Built content-based recommender using NLP and cosine similarity.',
      'Flask web app with OMDb API and Netflix-style UI.',
      'Stored similarity matrices in .pkl files for scalability.'
    ]
  },
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
      <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent z-10 transition-opacity duration-700 ${hovered ? 'opacity-100' : 'opacity-70'}`} />
      
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-transform duration-1000 ease-out"
        style={{ 
          backgroundImage: `url(${project.image})`,
          transform: hovered ? 'scale(1.05)' : 'scale(1)'
        }}
      />
      
      <div className="relative z-20 flex flex-col justify-end h-full">
        <motion.div
           animate={{ y: hovered ? 0 : 20 }}
           transition={{ duration: 0.4, ease: "easeOut" }}
           className="pb-2"
        >
          <p className="text-gray-400 font-mono text-xs uppercase tracking-widest mb-3">{project.category}</p>
          <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight">{project.title}</h3>
        </motion.div>
        
        <motion.div 
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
           transition={{ duration: 0.4, ease: "easeOut" }}
           className="overflow-hidden"
        >
          <ul className="space-y-2 mt-4 pb-2">
            {project.details?.map((detail: string, i: number) => (
              <li key={i} className="flex items-start text-gray-300 text-sm md:text-base leading-snug">
                <span className="text-white mr-3 opacity-50">▹</span>
                {detail}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
