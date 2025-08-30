'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="w-full h-screen flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-48 h-48 rounded-full overflow-hidden mb-8"
      >
        <Image
          src="/image/protfolio.svg" // Using the SVG placeholder
          alt="Saurabh Jadhav Profile"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 0px 0px rgba(255, 215, 0, 0.7)',
              '0 0 15px 5px rgba(255, 215, 0, 0.7)',
              '0 0 0px 0px rgba(255, 215, 0, 0.7)',
            ],
            borderColor: [
              'rgba(255, 215, 0, 0.7)',
              'rgba(139, 69, 19, 0.7)',
              'rgba(255, 215, 0, 0.7)',
            ],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-4xl md:text-6xl font-bold tracking-tighter mb-4"
      >
        Saurabh Jadhav
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
        className="flex gap-4 justify-center"
      >
        <Button asChild size="lg">
          <a href="#projects">View Projects</a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href="#contact">Contact Me</a>
        </Button>
      </motion.div>
    </section>
  );
}