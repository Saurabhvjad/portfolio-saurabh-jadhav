'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AnimatedVerse from '@/components/shared/AnimatedVerse';

export default function Hero() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000); // Stop animation after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className="w-full h-screen flex items-center justify-center text-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-evenly gap-8 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2 text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
            style={{ color: "white" }}
          >
            {"Saurabh Jadhav".split("").map((char, index) => (
              <motion.span
                key={index}
                whileHover={{ color: "#ffdc80" }}
                className="hover:gradient-text"
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Mechanical Engineer | Data Analytics Enthusiast | Innovator
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
          <AnimatedVerse />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-64 h-64 md:w-96 md:h-96 rounded-full"
          style={{
            padding: '4px', 
            overflow: 'hidden',
            background: 'transparent',
          }}
          onHoverStart={() => setIsAnimating(true)}
          onHoverEnd={() => setIsAnimating(false)}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              borderRadius: '50%',
              background: 'conic-gradient(from 180deg at 50% 50%, #ffdc80, #fcaf45, #f77737, #f56040, #fd1d1d, #e1306c, #c13584, #833ab4, #5851db, #405de6, transparent)',
            }}
            animate={isAnimating ? { rotate: 360 } : { rotate: 0 }}
            transition={isAnimating ? { duration: 5, ease: "linear", repeat: Infinity } : { duration: 0.5, ease: "linear" }}
          />
          <div className="relative w-full h-full bg-background rounded-full overflow-hidden">
            <Image
              src="/images/profile.png"
              alt="Saurabh Jadhav Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}