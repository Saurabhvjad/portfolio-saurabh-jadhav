'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experienceData = [
  {
    year: '2018 - Present',
    title: 'Planner, Tunnel Furnace Department',
    company: 'CSP Mill',
    description: 'Responsible for production planning, process optimization, and quality assurance. Internal Auditor for ISO 9001, 45001, and 14001.',
  },
  {
    year: '2022 - Present',
    title: 'BCA in Data Analytics (Pursuing)',
    company: 'University of Mumbai',
    description: 'Currently in my third year, focusing on data science, machine learning, and statistical analysis.',
  },
  {
    year: '2015 - 2018',
    title: 'Diploma in Mechanical Engineering',
    company: 'Government Polytechnic, Mumbai',
    description: 'Completed a comprehensive diploma program, gaining foundational knowledge in mechanical systems and engineering principles.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 lg:py-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Experience & Education
        </motion.h2>

        <div className="relative border-l-2 border-primary/20 mx-auto max-w-2xl">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-8 ml-4 text-left"
            >
              <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-primary"></div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{item.title}</CardTitle>
                  <p className="text-muted-foreground">{item.company} - {item.year}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
