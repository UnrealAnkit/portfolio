'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export function Footer() {
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
              href="https://linkedin.com/in/unrelankit"
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

          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2025. Made with <Heart className="inline-block h-4 w-4 text-red-500 fill-current" /> by ankitXdevs
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
