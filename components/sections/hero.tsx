'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, MapPin, Clock } from 'lucide-react';

const taglines = [
  "100xLearner",
  "I Break & build things...",
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/UnrealAnkit', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/unrealankit', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/unrealankit', label: 'Twitter' },
];

export function Hero() {
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(taglineInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Animated background shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-500/10 rounded-full animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-green-500/10 rounded-full animate-pulse-slow"></div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-foreground/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-foreground/20 rounded-full animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-foreground/20 rounded-full animate-float animation-delay-4000"></div>
        
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid opacity-30"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-6 pt-16 md:pt-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            >
              <motion.span
                key={currentTagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="block"
              >
                {taglines[currentTagline]}
              </motion.span>
            </motion.h1>

            {/* Underline */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              className="h-1 bg-foreground mx-auto max-w-xs sm:max-w-md"
            />
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-4 sm:space-y-6"
          >
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
              Hey, I'm Ankit a passionate full-stack developer who thrives on
              building meaningful & useful web apps. I love turning bold ideas into
              real-world solutions currently building SaaS platforms.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Have an idea or want to build something ? DMs are always open!
            </p>
          </motion.div>

          {/* Manifesting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="space-y-4"
          >
            <p className="text-muted-foreground text-sm sm:text-base px-4">
              Manifesting success via{' '}
              <span className="font-mono text-foreground bg-muted px-2 py-1 rounded text-xs sm:text-sm">
                npm install
              </span>
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center gap-4 sm:gap-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
              >
                <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.a>
            ))}
          </motion.div>

          {}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-muted-foreground font-mono px-4"
          >
            <div className="flex items-center gap-2">
              <Clock className="h-3 w-3 sm:h-4 sm:w-4" />
              <span id="current-time"></span>
              <span>IST</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>Noida, India</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
