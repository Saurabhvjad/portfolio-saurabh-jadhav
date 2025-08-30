'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const timelineEvents = [
  {
    date: '2018',
    title: 'Mechanical Engineering Diploma',
    description: 'Graduated with a diploma in Mechanical Engineering, laying the foundation for a career in the industrial sector.',
  },
  {
    date: '2018 - Present',
    title: 'Planner, CSP Mill - Tunnel Furnace Dept.',
    description: 'Managing and optimizing production processes in a dynamic steel mill environment. Also serving as an Internal Auditor for ISO 9001, 45001, and 14001.',
  },
  {
    date: '2022',
    title: 'BCA in Data Analytics',
    description: 'Embarked on a new journey to bridge my industrial expertise with the world of data, pursuing a Bachelor\'s degree in Computer Applications with a focus on Data Analytics.',
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-20 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a unique blend of a hands-on mechanical engineer and a forward-thinking data enthusiast. My career began in the heart of the steel industry, where I honed my skills in process optimization, project management, and operational excellence. Driven by a passion for technology and its potential to revolutionize industries, I am now in my third year of a BCA in Data Analytics, actively building my expertise in data science, machine learning, and AI.
            </p>
          </div>
          <div className="lg:w-1/2">
            <div className="relative border-l-2 border-primary/20">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="mb-8 ml-4"
                >
                  <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
                  <time className="mb-1 text-sm font-normal leading-none text-muted-foreground">{event.date}</time>
                  <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
                  <p className="text-base font-normal text-muted-foreground">{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
