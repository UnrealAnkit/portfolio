'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  SiJavascript, 
  SiTailwindcss, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiTypescript, 
  SiMongodb, 
  SiNextdotjs, 
  SiPostgresql, 
  SiFirebase, 
  SiGit 
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const techStack = [
  { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-500 dark:text-yellow-400' },
  { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500 dark:text-cyan-400' },
  { name: 'React', icon: SiReact, color: 'text-sky-500 dark:text-sky-400' },
  { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-600 dark:text-green-500' },
  { name: 'Express.js', icon: SiExpress, color: 'text-neutral-600 dark:text-neutral-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600 dark:text-blue-500' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-emerald-600 dark:text-emerald-500' },
  { name: 'Next.js', icon: SiNextdotjs, color: 'text-foreground' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-500 dark:text-blue-400' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-orange-500 dark:text-orange-400' },
  { name: 'React Native', icon: TbBrandReactNative, color: 'text-sky-600 dark:text-sky-500' },
  { name: 'Git', icon: SiGit, color: 'text-orange-600 dark:text-orange-500' },
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
                    className="tech-badge flex flex-col gap-3 aspect-square justify-center items-center text-center p-2 sm:p-3"
                  >
                    <tech.icon className={`h-8 w-8 sm:h-10 sm:w-10 transition-colors duration-300 ${tech.color}`} />
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