'use client';
import React from 'react';

import { motion } from 'framer-motion';

import { 
  SiPython, SiC, SiHtml5, SiFastapi, SiFlask, SiPandas, SiNumpy,
  SiScikitlearn, SiTensorflow, SiKeras, SiMysql, SiPostgresql, SiMongodb 
} from 'react-icons/si';
import { 
  FaBug, FaChartLine, FaLayerGroup, FaNetworkWired, FaLanguage, 
  FaDatabase, FaRobot 
} from 'react-icons/fa';
import { TbMathFunction, TbCode } from 'react-icons/tb';

const row1 = [
  { name: 'Python', icon: <SiPython className="w-5 h-5 text-blue-400" /> },
  { name: 'C', icon: <SiC className="w-5 h-5 text-blue-500" /> },
  { name: 'HTML', icon: <SiHtml5 className="w-5 h-5 text-orange-500" /> },
  { name: 'FastAPI', icon: <SiFastapi className="w-5 h-5 text-teal-400" /> },
  { name: 'Flask', icon: <SiFlask className="w-5 h-5 text-white" /> },
  { name: 'OOP', icon: <TbCode className="w-5 h-5 text-gray-400" /> },
  { name: 'Exception Handling', icon: <FaBug className="w-5 h-5 text-red-400" /> },
  { name: 'Regression', icon: <FaChartLine className="w-5 h-5 text-green-400" /> },
  { name: 'Classification', icon: <FaLayerGroup className="w-5 h-5 text-blue-300" /> },
  { name: 'ANN', icon: <FaNetworkWired className="w-5 h-5 text-purple-400" /> },
  { name: 'CNN', icon: <FaNetworkWired className="w-5 h-5 text-indigo-400" /> },
  { name: 'RNN', icon: <FaNetworkWired className="w-5 h-5 text-pink-400" /> },
  { name: 'LSTM', icon: <FaNetworkWired className="w-5 h-5 text-fuchsia-400" /> },
  { name: 'Keras', icon: <SiKeras className="w-5 h-5 text-red-500" /> },
  { name: 'Pandas', icon: <SiPandas className="w-5 h-5 text-blue-800" /> },
  { name: 'NumPy', icon: <SiNumpy className="w-5 h-5 text-blue-600" /> }
];

const row2 = [
  { name: 'BOW', icon: <FaLanguage className="w-5 h-5 text-yellow-400" /> },
  { name: 'TF-IDF', icon: <FaLanguage className="w-5 h-5 text-yellow-500" /> },
  { name: 'Word2Vec', icon: <FaLanguage className="w-5 h-5 text-yellow-600" /> },
  { name: 'Embedding', icon: <FaDatabase className="w-5 h-5 text-teal-500" /> },
  { name: 'Cosine Similarity', icon: <TbMathFunction className="w-5 h-5 text-pink-300" /> },
  { name: 'RAG', icon: <FaDatabase className="w-5 h-5 text-cyan-400" /> },
  { name: 'Agentic AI', icon: <FaRobot className="w-5 h-5 text-gray-300" /> },
  { name: 'LangChain', icon: <FaRobot className="w-5 h-5 text-green-500" /> },
  { name: 'n8n', icon: <FaRobot className="w-5 h-5 text-orange-400" /> },
  { name: 'Matplotlib', icon: <FaChartLine className="w-5 h-5 text-blue-400" /> },
  { name: 'Seaborn', icon: <FaChartLine className="w-5 h-5 text-green-500" /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn className="w-5 h-5 text-orange-400" /> },
  { name: 'TensorFlow', icon: <SiTensorflow className="w-5 h-5 text-orange-500" /> },
  { name: 'MySQL', icon: <SiMysql className="w-5 h-5 text-blue-500" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-blue-400" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-5 h-5 text-green-500" /> }
];

const MarqueeRow = ({ items, direction }: { items: { name: string, icon: React.ReactNode }[], direction: 'left' | 'right' }) => {
  return (
    <div 
      className="flex w-full overflow-hidden whitespace-nowrap py-4 relative"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
      }}
    >
      <motion.div
        className="flex gap-4 min-w-max items-center"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
      >
        {[...items, ...items].map((item, i) => (
          <span 
             key={i}
             className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 text-gray-200 text-lg md:text-xl backdrop-blur-sm cursor-default hover:bg-white/10 transition-colors"
          >
            {item.icon}
            {item.name}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default function Skills() {
  return (
    <section className="relative w-full py-32 bg-[#050505] overflow-hidden z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-24 flex flex-col items-center text-center">
        
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
           className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            Core <span className="font-bold">Expertise.</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Passionate about designing AI-driven solutions that automate decision-making, generate insights, and solve real-world problems.
          </p>
        </motion.div>

      </div>

      {/* Marquee Effect Container */}
      <div className="w-full relative mt-8 flex flex-col gap-6">
         {/* Background Glows for Aesthetics */}
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[300px] h-[300px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
         <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

         <MarqueeRow items={row1} direction="left" />
         <MarqueeRow items={row2} direction="right" />
      </div>

    </section>
  );
}
