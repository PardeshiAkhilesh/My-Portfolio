'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Download, Eye } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (err) {
      setStatus('An error occurred.');
    }
  };

  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 md:px-24 z-20 border-t border-white/5 overflow-hidden">
      
      {/* Background glow for contrast */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        
        <div className="md:w-1/2 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-8">
              Let's <span className="font-bold">Talk.</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-md">
              Interested in collaborating or have an open role? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 backdrop-blur-md inline-block">
               <h3 className="text-2xl text-white mb-2">My Resume</h3>
               <p className="text-gray-400 text-sm mb-6 max-w-sm">View my qualifications, experience, and complete technical background.</p>
               <div className="flex flex-wrap gap-4">
                 <a 
                   href="/AKHILESH_PARDESHI_RESUME.pdf" 
                   target="_blank" 
                   rel="noreferrer"
                   className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                 >
                   <Eye className="w-4 h-4" /> View Resume
                 </a>
                 <a 
                   href="/AKHILESH_PARDESHI_RESUME.pdf" 
                   download
                   className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
                 >
                   <Download className="w-4 h-4" /> Download
                 </a>
               </div>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 mt-12 md:mt-0">
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <label htmlFor="name" className="block text-gray-400 text-sm mb-2 ml-1">Name</label>
              <input 
                id="name"
                type="text" 
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 text-sm mb-2 ml-1">Email</label>
              <input 
                id="email"
                type="email" 
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-400 text-sm mb-2 ml-1">Message</label>
              <textarea 
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-white/30 transition-colors resize-none"
                placeholder="Hello Akhilesh..."
              />
            </div>
            <button 
              type="submit"
              className="mt-4 bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gray-200 transition-colors disabled:opacity-50"
              disabled={status === 'Sending...'}
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
            {status && status !== 'Sending...' && (
              <p className={`mt-2 ml-2 ${status.includes('success') ? 'text-green-400' : 'text-red-400'}`}>{status}</p>
            )}
          </motion.form>
        </div>

      </div>
    </section>
  );
}
