'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ExternalLink, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    title: 'Pure Cha',
    type: 'Full Stack Developer',
    period: 'April 2024 – Present',
    description: 'Building scalable web applications and enhancing user experience for a tea marketplace platform with modern React architecture.',
    skills: ['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    link: '#',
  },
   {
    title: 'RK Visa Solutions',
    type: 'Full Stack Developer',
    period: 'Jan 2024 - Present',
    description: 'Your trusted partner for immigration and education services. We help students and professionals achieve their global aspirations.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://rkvisasolutions.netlify.app/',
  },
  {
    title: 'AIPivot',
    type: 'Software Developer Intern',
    period: 'Dec 2024 – Mar 2025',
    description: 'Developed AI-powered interfaces and contributed to machine learning integration projects using cutting-edge technologies.',
    skills: ['React', 'TypeScript', 'AI/ML', 'Python', 'APIs'],
    link: '#',
  },
  {
    title: 'Devdock',
    type: 'Campus Ambassador',
    period: 'Ongoing',
    description: 'Building Web3 community and organizing tech events to promote blockchain adoption among students.',
    skills: ['Web3', 'Community Building', 'Event Management', 'Blockchain'],
    link: '#',
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-5 w-24 h-24 bg-green-500/5 rounded-full animate-float"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-blue-500/5 rounded-full animate-blob animation-delay-2000"></div>
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Work Experience</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              A timeline of my learning journey and the Projects I've developed along the way.
            </p>
          </div>
          
          {/* Experience Cards */}
          <div className="space-y-8 sm:space-y-12 relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-border"></div>
            
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-background border-2 border-primary"></div>
                
                {/* Experience Card */}
                <div className="glass rounded-2xl p-6 sm:p-8 text-left max-w-3xl mx-auto relative">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold">{exp.title}</h3>
                        <p className="text-muted-foreground">{exp.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground sm:text-right">
                      <Calendar className="h-4 w-4 sm:hidden" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {exp.description}
                  </p>
                  
                  {/* Technologies & Skills */}
                  <div className="space-y-3 mb-6">
                    <p className="text-sm font-medium flex items-center gap-2">
                      <span>🔧</span>
                      Technologies & Skills
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="tech-badge text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {exp.link !== '#' && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={exp.link} target="_blank" rel="noopener noreferrer">
                        View Repo
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
