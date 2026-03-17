'use client';

import { motion } from 'framer-motion';

const row1 = [
  'Python', 'C', 'HTML', 'FastAPI', 'Flask', 'OOP', 'Exception Handling', 
  'Regression', 'Classification', 'ANN', 'CNN', 'RNN', 'LSTM', 'Keras', 'Pandas', 'NumPy'
];

const row2 = [
  'BOW', 'TF-IDF', 'Word2Vec', 'Embedding', 'Cosine Similarity', 'RAG', 
  'Agentic AI', 'LangChain', 'n8n', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow', 'MySQL', 'PostgreSQL', 'MongoDB'
];

const MarqueeRow = ({ items, direction }: { items: string[], direction: 'left' | 'right' }) => {
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
             className="px-6 py-3 rounded-full border border-white/20 bg-white/5 text-gray-200 text-lg md:text-xl backdrop-blur-sm cursor-default hover:bg-white/10 transition-colors"
          >
            {item}
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
