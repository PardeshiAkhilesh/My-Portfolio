'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';
import GroupProject from '@/components/GroupProject';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import { MagneticButton } from '@/components/nano-banana';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full flex flex-col relative bg-[#050505]">
      <ScrollyCanvas>
        {(progress) => <Overlay progress={progress} />}
      </ScrollyCanvas>

      {/* Scroll indicator with Awwwards-style magnetic button */}
      <div className="absolute top-[85vh] left-1/2 -translate-x-1/2 z-20 pointer-events-auto mix-blend-difference">
        <MagneticButton>
          <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm cursor-pointer">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </div>
        </MagneticButton>
      </div>

      <Projects />
      <GroupProject />
      <Experience />
      <Skills />
      <Contact />
    </main>
  );
}
