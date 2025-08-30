'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label'; // Assuming Label is available or will be installed

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 lg:py-32">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Get In Touch
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 max-w-md mx-auto lg:mx-0"
          >
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@example.com" />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." rows={5} />
              </div>
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2 max-w-md mx-auto lg:mx-0 flex flex-col items-center lg:items-start"
          >
            <h3 className="text-2xl font-bold mb-4">Connect with me</h3>
            <p className="text-muted-foreground mb-6 text-center lg:text-left">
              Feel free to reach out through the form or connect with me on social media.
            </p>
            <div className="flex space-x-6">
              <motion.a
                href="mailto:saurabh.jadhav@example.com" // Placeholder email
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Mail size={32} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/saurabh-jadhav-example" // Placeholder LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={32} />
              </motion.a>
              <motion.a
                href="https://github.com/saurabh-jadhav-example" // Placeholder GitHub
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-foreground hover:text-primary transition-colors"
              >
                <Github size={32} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
