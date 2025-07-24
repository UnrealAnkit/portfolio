'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'SHELeads',
    description: 'SHELeads is dedicated to empowering women entrepreneurs and professionals by providing a tailored business solution for establishing and growing their businesses in the digital world.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://sheleadsindia.in/',
    githubUrl: '#',
    image: '/she-leads-logo.png',
  },
  {
    title: 'RK Visa Solutions',
    description: 'Your trusted partner for immigration and education services. We help students and professionals achieve their global aspirations.',
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://rkvisasolutions.netlify.app/',
    githubUrl: 'https://github.com/UnrealAnkit/rkruss',
    image: 'https://images.pexels.com/photos/1464143/pexels-photo-1464143.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'AsliAstro',
    description: 'Astrology platform for personalized horoscopes with AI-powered predictions.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'APIs'],
    liveUrl: 'https://asliastro.netlify.app/',
    githubUrl: 'https://github.com/UnrealAnkit/asli-astro',
    image: 'https://images.pexels.com/photos/6044198/pexels-photo-6044198.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-16"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of projects that showcase my skills and passion for building great user experiences.
            </p>
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-foreground/20 hover:shadow-lg h-full">
                  {/* Project Image */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6 space-y-4 flex flex-col h-[calc(100%-56.25%)]">
                    <div className="space-y-2 flex-grow">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-2">
                      {project.liveUrl !== '#' && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl !== '#' && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
