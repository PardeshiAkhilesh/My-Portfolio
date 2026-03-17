'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion';

const TOTAL_FRAMES = 120;

interface ScrollyCanvasProps {
  children?: React.ReactNode | ((progress: MotionValue<number>) => React.ReactNode);
}

export default function ScrollyCanvas({ children }: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Track the scroll position of the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map 0-1 progress to 0-119 frame index
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  useEffect(() => {
    let loadedCount = 0;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
        const img = new Image();
        const frameNum = String(i).padStart(3, '0');
        img.src = `/sequence/frame_${frameNum}_delay-0.066s.png`;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === TOTAL_FRAMES) {
                setImagesLoaded(true);
            }
        };
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index: number) => {
      if (!canvasRef.current || images.length === 0) return;
      const img = images[Math.round(index)];
      if (!img) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Update canvas logical size if needed to avoid flashing
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
          canvas.width = rect.width * dpr;
          canvas.height = rect.height * dpr;
          ctx.scale(dpr, dpr);
      }

      // Simulate object-fit: cover
      const canvasRatio = rect.width / rect.height;
      const imgRatio = img.width / img.height;
      let renderWidth, renderHeight, x, y;

      if (canvasRatio > imgRatio) {
          renderWidth = rect.width;
          renderHeight = rect.width / imgRatio;
          x = 0;
          y = (rect.height - renderHeight) / 2;
      } else {
          renderHeight = rect.height;
          renderWidth = rect.height * imgRatio;
          y = 0;
          x = (rect.width - renderWidth) / 2;
      }

      ctx.clearRect(0, 0, rect.width, rect.height);
      ctx.drawImage(img, x, y, renderWidth, renderHeight);
  };

  // Draw initial frame
  useEffect(() => {
      if (imagesLoaded) {
          drawFrame(0);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imagesLoaded]);

  // Update canvas on scroll
  useMotionValueEvent(frameIndex, 'change', (latest) => {
      if (imagesLoaded) {
          drawFrame(latest);
      }
  });

  return (
    <section ref={containerRef} className="relative h-[500vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 z-10 pointer-events-none">
          {typeof children === 'function' ? children(scrollYProgress) : children}
        </div>
      </div>
    </section>
  );
}
