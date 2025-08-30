'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { category: 'Programming', name: 'Python' },
  { category: 'Programming', name: 'R' },
  { category: 'Web Development', name: 'Next.js' },
  { category: 'Web Development', name: 'Tailwind CSS' },
  { category: 'Data Science', name: 'Data Science' },
  { category: 'Data Science', name: 'Statistics' },
  { category: 'Data Science', name: 'Machine Learning' },
  { category: 'Databases', name: 'Appwrite' },
  { category: 'Business Intelligence', name: 'Power BI' },
  { category: 'Engineering', name: 'Process Optimization' },
  { category: 'Engineering', name: 'Project Management' },
  { category: 'Engineering', name: 'SAP Automation' },
  { category: 'Quality', name: 'ISO 9001' },
  { category: 'Quality', name: 'ISO 45001' },
  { category: 'Quality', name: 'ISO 14001' },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="w-full py-20 lg:py-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
