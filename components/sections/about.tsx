'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-left"
            >
              <p className="text-lg text-muted-foreground">
                I'm currently a full-stack developer at <span className="text-primary font-semibold">Pure Cha</span>, building scalable and engaging web apps.
              </p>
              
              <p className="text-lg text-muted-foreground">
                Previously worked at <span className="text-primary font-semibold">AIPivot</span> on AI-powered interfaces.
              </p>
              
              <p className="text-lg text-muted-foreground">
                I'm also a Campus Ambassador at <span className="text-primary font-semibold">Devdock</span>, where I build Web3 community.
              </p>
              
              <p className="text-lg text-muted-foreground">
                I'm pursuing B.Tech in CS at <span className="text-primary font-semibold">IILM University, Greater Noida</span> (Graduating: Dec 2028).
              </p>
              
              <p className="text-lg text-muted-foreground">
                Passionate about building in the <span className="text-primary font-semibold">AI and Web3 ecosystem</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl p-8 backdrop-blur-sm border border-primary/10">
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      AK
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-semibold">Ankit Kumar</h3>
                    <p className="text-muted-foreground">Full-Stack Developer</p>
                    <div className="flex justify-center space-x-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Web3</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm">AI</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}