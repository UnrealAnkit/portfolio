'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart, Eye } from 'lucide-react';

export function Footer() {
  const [visitors, setVisitors] = useState<number | null>(null);

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/unrealankit/portfolio/up')
      .then(res => res.json())
      .then(data => {
        const count = data.value || data.count;
        if (typeof count === 'number') {
          setVisitors(count);
        }
      })
      .catch(err => console.error('Error fetching visitor count:', err));
  }, []);

  return (
    <footer className="pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h3 className="text-2xl font-semibold">Ankit Kumar</h3>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://github.com/unrealankit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/unrealankit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://twitter.com/unrealankit"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Twitter className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:work.ankit2@gmail.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </div>

          {/* Last Updated & Visitors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs text-muted-foreground font-mono">
            <span>Last updated: July 12, 2026, 01:16 PM IST</span>
            {visitors !== null && (
              <>
                <span className="hidden sm:inline text-muted-foreground/50">•</span>
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" />
                  {visitors.toLocaleString()} Views
                </span>
              </>
            )}
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025. Made with <Heart className="inline-block h-4 w-4 text-red-500 fill-current" /> by ankitXdevs
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
