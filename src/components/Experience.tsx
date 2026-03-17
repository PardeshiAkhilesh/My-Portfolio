'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <section className="relative w-full py-32 bg-[#050505] px-6 md:px-24 z-20 overflow-hidden">
      
      {/* Background glow for contrast */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/3">
          <div className="sticky top-32">
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light text-white tracking-tight"
            >
              Professional <br /><span className="font-bold">Experience.</span>
            </motion.h2>
          </div>
        </div>

        <div className="md:w-2/3">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="border-l border-white/20 pl-8 relative"
          >
            {/* Timeline Dot */}
            <div className="absolute left-[-5px] top-2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
            
            <h3 className="text-3xl text-white font-semibold mb-2">Python Developer (Full-time Trainee)</h3>
            <h4 className="text-xl text-gray-400 font-light mb-6">AAROHI INFO</h4>
            
            <ul className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 opacity-50">▹</span>
                Designed and implemented RESTful APIs in FastAPI with asynchronous CRUD operations for appointments, doctor profiles, and availability management, using MongoDB for scalable data storage.
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 opacity-50">▹</span>
                Integrated real-time communication using Socket.IO and WebSockets for secure video/meeting functionality between patients and doctors.
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 opacity-50">▹</span>
                Implemented authentication using Google OAuth 2.0 and JWT-based session management.
              </li>
              <li className="flex items-start">
                <span className="text-white mr-3 mt-1 opacity-50">▹</span>
                Developed mail service using SMTP / transactional email APIs for notifications and reminders.
              </li>
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
