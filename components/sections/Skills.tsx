'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skills = [
  { category: 'Programming', name: 'Python', icon: <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" width="30" height="30" /> },
  { category: 'Programming', name: 'R', icon: <img src="https://img.icons8.com/?size=100&id=m9e5OmVgkKCL&format=png&color=000000" width="30" height="30" /> },
  { category: 'Web Development', name: 'Next.js', icon: <img src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" width="30" height="30" /> },
  { category: 'Web Development', name: 'Tailwind CSS', icon: <img src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000" width="30" height="30" /> },
  { category: 'Data Science', name: 'Data Science', icon: <img src="https://img.icons8.com/?size=100&id=nhndz8YLqqT2&format=png&color=000000" width="30" height="30" /> },
  { category: 'Data Science', name: 'Statistics', icon: <img src="https://img.icons8.com/?size=100&id=DVKimbavSlYT&format=png&color=000000" width="30" height="30" /> },
  { category: 'Data Science', name: 'Machine Learning', icon: <img src="https://img.icons8.com/?size=100&id=6Q2SAdhaPhXM&format=png&color=000000" width="30" height="30" /> },
  { category: 'Databases', name: 'Appwrite', icon: <img src="/images/appwrite.png" width="30" height="30" /> },
  { category: 'Business Intelligence', name: 'Power BI', icon: <img src="https://img.icons8.com/?size=100&id=Ny0t2MYrJ70p&format=png&color=000000" width="30" height="30" /> },
  { category: 'Engineering', name: 'Process Optimization', icon: <img src="https://img.icons8.com/?size=100&id=63649&format=png&color=000000" width="30" height="30" /> },
  { category: 'Engineering', name: 'Project Management', icon: <img src="https://img.icons8.com/?size=100&id=D47p6uA2kE9C&format=png&color=000000" width="30" height="30" /> },
  { category: 'Engineering', name: 'SAP Automation', icon: <img src="https://img.icons8.com/?size=100&id=38192&format=png&color=000000" width="30" height="30" /> },
  { category: 'Quality', name: 'ISO 9001', icon: <img src="https://img.icons8.com/?size=100&id=VxIna6HTRWlt&format=png&color=000000" width="30" height="30" /> },
  { category: 'Quality', name: 'ISO 45001', icon: <img src="https://img.icons8.com/?size=100&id=VxIna6HTRWlt&format=png&color=000000" width="30" height="30" /> },
  { category: 'Quality', name: 'ISO 14001', icon: <img src="https://img.icons8.com/?size=100&id=VxIna6HTRWlt&format=png&color=000000" width="30" height="30" /> },
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
                  {skill.icon}
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