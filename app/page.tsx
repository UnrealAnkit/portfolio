'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Projects } from '@/components/sections/projects';
import { Experience } from '@/components/sections/experience';
import { TechStack } from '@/components/sections/tech-stack';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Contact />
        <Footer />
      </main>
    </motion.div>
  );
}