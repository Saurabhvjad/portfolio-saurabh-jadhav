'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function AnimatedBackground() {
  return (
    <motion.div
      className="fixed inset-0 -z-10"
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: "100% 50%" }}
      transition={{
        duration: 10,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={{
        background: `linear-gradient(270deg, var(--color-metallic-gold-light-dark), var(--color-rust-light-dark), var(--color-metallic-gold-dark-dark), var(--color-rust-dark-dark))`, // Using custom CSS variables
        backgroundSize: "400% 400%",
      }}
    />
  );
}
