'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';

interface OverlayProps {
  progress: MotionValue<number>;
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% -> "Akhilesh Pardeshi. AI Engineer."
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0]);
  const y1 = useTransform(progress, [0, 0.25], [0, -100]);

  // Section 2: 30% -> "I build digital experiences." (left)
  const opacity2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(progress, [0.2, 0.3, 0.45, 0.55], [100, 0, 0, -100]);

  // Section 3: 60% -> "Bridging design and engineering." (right)
  const opacity3 = useTransform(progress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
  const y3 = useTransform(progress, [0.5, 0.6, 0.8, 0.9], [100, 0, 0, -100]);

  return (
    <div className="absolute inset-0 flex flex-col pointer-events-none p-8 md:p-24 z-10 font-sans w-full h-full">
      
      {/* Section 1: Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-0 flex items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mix-blend-difference text-white drop-shadow-lg">
          Akhilesh Pardeshi. <br />
          <span className="text-gray-300 font-light opacity-80 text-3xl md:text-5xl mt-4 block">AI Engineer & Python Developer.</span>
        </h1>
      </motion.div>

      {/* Section 2: Left */}
      <motion.div 
        style={{ opacity: opacity2, y: y2 }}
        className="absolute inset-0 flex items-center justify-start text-left w-full h-full"
      >
        <div className="ml-8 md:ml-[10%] max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mix-blend-difference drop-shadow-md">
            I build digital <br />
            <span className="italic font-serif text-gray-400 font-light">experiences.</span>
          </h2>
        </div>
      </motion.div>

      {/* Section 3: Right */}
      <motion.div 
        style={{ opacity: opacity3, y: y3 }}
        className="absolute inset-0 flex items-center justify-end text-right w-full h-full"
      >
        <div className="mr-8 md:mr-[10%] max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-tight mix-blend-difference drop-shadow-md">
            Bridging design <br />
            <span className="text-blue-200 opacity-90 italic">and engineering.</span>
          </h2>
        </div>
      </motion.div>

    </div>
  );
}
