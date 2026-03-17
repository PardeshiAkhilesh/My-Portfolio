'use client';

import { motion } from 'framer-motion';

const skills = [
  { category: 'Programming', items: ['Python', 'C', 'HTML', 'FastAPI', 'Flask', 'OOP', 'Exception Handling'] },
  { category: 'Machine Learning & AI', items: ['Regression', 'Classification', 'ANN', 'CNN', 'RNN', 'LSTM', 'Keras'] },
  { category: 'NLP & Generative AI', items: ['BOW', 'TF-IDF', 'Word2Vec', 'Embedding', 'Cosine Similarity', 'RAG', 'Agentic AI', 'LangChain', 'n8n'] },
  { category: 'Libraries & Visualization', items: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Scikit-learn', 'TensorFlow'] },
  { category: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
];

export default function Skills() {
  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 md:px-24 z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Left column: Sticky Title */}
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight"
            >
              Core <br /><span className="font-bold">Expertise.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 text-gray-400 max-w-sm text-lg leading-relaxed"
            >
              Passionate about designing AI-driven solutions that automate decision-making, generate insights, and solve real-world problems.
            </motion.p>
          </div>
        </div>

        {/* Right column: Skills List */}
        <div className="md:w-2/3 flex flex-col gap-12">
          {skills.map((skillSet, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border-t border-white/10 pt-8"
            >
              <h3 className="text-2xl text-white font-medium mb-6 uppercase tracking-widest text-sm text-gray-400">{skillSet.category}</h3>
              <div className="flex flex-wrap gap-3">
                {skillSet.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 rounded-full border border-white/20 bg-white/5 text-gray-200 text-sm backdrop-blur-sm hover:bg-white/10 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
