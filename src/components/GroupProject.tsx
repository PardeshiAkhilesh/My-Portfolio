'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function GroupProject() {
  return (
    <section className="relative w-full py-24 bg-[#050505] px-6 md:px-24 z-20 overflow-hidden border-t border-white/5">
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 -left-1/4 w-[600px] h-[600px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-gray-400 font-mono text-sm tracking-widest uppercase mb-4 block">Hackathon Group Project</span>
          <h2 className="text-5xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            AI-Driven Autonomous <br className="hidden md:block"/> Recruitment System
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Description & Problem */}
          <div className="lg:w-1/2 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h3 className="text-2xl text-white mb-4">The Problem</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Corporate HR departments face massive application volumes, leading to manual sorting, unconscious bias, and inefficiency. Scheduling interviews feels like endless "email tag", and standard screenings are resource-intensive loops lacking structured feedback.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-2xl text-white mb-4">The Solution</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                A smart recruitment application featuring an **Adaptive Interview Bot** built on FastAPI, React, and OpenAI GPT. It parses resumes with NLP, automates calendar scheduling, conducts proctored technical behavioral interviews, and generates data-driven scorecards for objective hiring.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a 
                href="https://ai-driven-autonomous-recruitment-an.vercel.app/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                View Live Demo <ArrowUpRight className="w-4 h-4" />
              </a>
              <a 
                href="https://github.com/SuyashBhavalkar3/AI-Driven-Autonomous-Recruitment-and-Candidate-Assesment-System.git" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                GitHub Repository <ArrowUpRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Key Features List */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md h-full"
            >
              <h3 className="text-xl text-white mb-8 border-b border-white/10 pb-4">Core Bot Features</h3>
              <ul className="space-y-6">
                {[
                  { title: "Adaptive Questioning", desc: "Dynamically generates follow-ups or moves to new topics based on response depth." },
                  { title: "Human-in-the-Loop (HITL)", desc: "Gracefully escalates complex issues or candidate requests to human recruiters." },
                  { title: "Context Awareness", desc: "Remembers prior answers to maintain a coherent, professional conversational flow." },
                  { title: "Legal & Compliant", desc: "Strictly follows job-relevant prompts avoiding any biased or discriminatory lines of questioning." }
                ].map((feature, i) => (
                  <li key={i} className="flex gap-4">
                    <span className="text-white mt-1 opacity-50 font-mono">0{i+1}</span>
                    <div>
                      <h4 className="text-white font-medium mb-1">{feature.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
