'use client';

import { motion } from 'motion/react';

const verse = [
  { sentence: "In the age of circuits and code,", highlight: false },
  { sentence: "where thought is forged in silicon,", highlight: false },
  { sentence: "the ancient vow still breathes —", highlight: true },
  { sentence: "protect the truth, and it will protect you.", highlight: true },
  { sentence: "Train the mind of the machine", highlight: false },
  { sentence: "not just to answer,", highlight: false },
  { sentence: "but to understand.", highlight: true },
  { sentence: "Not just to predict,", highlight: false },
  { sentence: "but to preserve.", highlight: true },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const wordVariants = {
  hover: {
    scale: 1.1,
    color: "#fca5a5",
    transition: { duration: 0.2 },
  },
};

export default function AnimatedVerse() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="text-base text-muted-foreground mt-8 p-4 rounded-lg glass-effect-2"
    >
      {verse.map((line, index) => (
        <motion.p
          key={index}
          variants={lineVariants}
          className={`mb-2 ${line.highlight ? 'text-white' : ''}`}
        >
          {line.sentence.split(" ").map((word, i) => (
            <motion.span key={i} variants={wordVariants} whileHover="hover">
              {word}{" "}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </motion.div>
  );
}