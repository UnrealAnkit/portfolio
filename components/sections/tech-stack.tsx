'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techStack = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Tailwind', icon: '🎨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Express.js', icon: '🚀' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'MongoDB', icon: '🍃' },
  { name: 'Next.js', icon: '▲' },
  { name: 'PostgreSQL', icon: '🐘' },
  { name: 'Firebase', icon: '🔥' },
  { name: 'React Native', icon: '📱' },
  { name: 'Git', icon: '🔧' },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-20 h-20 bg-blue-500/5 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full animate-blob"></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Tech Stack</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              The tools and technologies I use to build modern, scalable, and beautiful web applications.
            </p>
          </div>
          
          {/* Tech Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Border */}
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="tech-badge flex-col gap-2 aspect-square justify-center text-center p-2 sm:p-3"
                  >
                    <span className="text-xl sm:text-2xl">{tech.icon}</span>
                    <span className="text-xs font-medium leading-tight">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}