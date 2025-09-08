'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  details: string;
}

const projects: Project[] = [
  {
    title: 'AI-Powered Coil Defect Detection',
    description: 'Developed an AI-based system using YOLOv8 and Roboflow for real-time defect detection in steel coils.',
    image: '/images/Coil Defect identification.png',
    technologies: ['Python', 'YOLOv8', 'Roboflow', 'Machine Learning'],
    github: '#',
    live: '#',
    details:
      'This project revolutionized quality control in the steel industry by automating the detection of surface defects on hot-rolled coils. Leveraging state-of-the-art YOLOv8 models trained on a custom dataset via Roboflow, the system achieved high accuracy and significantly reduced manual inspection time, leading to improved product quality and operational efficiency.',
  },
  {
    title: 'Predictive Models for CSP Mill Stability',
    description: 'Built predictive models to forecast and optimize process stability in a Continuous Slab Production (CSP) Mill.',
    image: '/images/csp stability.png',
    technologies: ['Python', 'Data Science', 'Machine Learning', 'Statistics'],
    github: '#',
    live: '#',
    details:
      'Utilized advanced statistical and machine learning techniques to analyze vast datasets from the CSP Mill. The models developed provide early warnings for potential process deviations, enabling proactive adjustments to maintain optimal production parameters, minimize downtime, and enhance overall mill performance.',
  },
  {
    title: 'SAP Task Automation with Python',
    description: 'Automated repetitive SAP tasks using Python scripting, significantly improving operational efficiency.',
    image: '/images/SAP automation.png',
    technologies: ['Python', 'SAP', 'Automation'],
    github: '#',
    live: '#',
    details:
      'Designed and implemented Python scripts to automate various routine tasks within the SAP environment, such as data entry, report generation, and transaction processing. This automation reduced human error, freed up valuable personnel time, and streamlined critical business operations.',
  },
  {
    title: 'Power BI Dashboards for Operational Insights',
    description: 'Created interactive Power BI dashboards to visualize key operational metrics and facilitate data-driven decision-making.',
    image: '/images/power BI.png',
    technologies: ['Power BI', 'Data Visualization', 'Business Intelligence'],
    github: '#',
    live: '#',
    details:
      'Developed comprehensive Power BI dashboards that transformed raw operational data into actionable insights. These dashboards provided real-time visibility into production performance, quality metrics, and resource utilization, empowering stakeholders to make informed decisions and identify areas for improvement.',
  },
  {
    title: 'Procurement & Database Apps with Appwrite',
    description: 'Developed robust procurement and database applications using Appwrite for backend services.',
    image: '/images/Planning.png',
    technologies: ['Appwrite', 'Next.js', 'Database Management'],
    github: '#',
    live: '#',
    details:
      'Engineered full-stack applications for streamlined procurement processes and efficient database management. Leveraging Appwrite as a powerful backend-as-a-service solution, these applications offered secure authentication, real-time data synchronization, and scalable storage, significantly enhancing internal workflows.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="w-full py-20 lg:py-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Dialog>
                <DialogTrigger asChild>
                  <Card className="h-full flex flex-col cursor-pointer hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="rounded-md object-contain"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-2">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">View Details</Button>
                    </CardFooter>
                  </Card>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[800px]">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <AspectRatio ratio={16 / 9}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="rounded-md object-contain"
                      />
                    </AspectRatio>
                    <p className="text-sm text-muted-foreground">{project.details}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <DialogFooter className="flex flex-col sm:flex-row sm:justify-end gap-2">
                    {project.github && (
                      <Button asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                      </Button>
                    )}
                    {project.live && (
                      <Button asChild variant="secondary">
                        <a href={project.live} target="_blank" rel="noopener noreferrer">Live Demo</a>
                      </Button>
                    )}
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
