import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/unrealankit', label: 'X (Twitter)' },
    { icon: Linkedin, href: 'https://linkedin.com/in/unrealankit', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/unrealankit', label: 'GitHub' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-gray-900 dark:text-white"
        >
          AK
        </motion.a>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
}