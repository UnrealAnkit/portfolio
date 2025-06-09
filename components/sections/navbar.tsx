'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'home', href: '#home' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact' },
];

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }).format(now);
      setCurrentTime(istTime);
    };

    updateTime();
    const timeInterval = setInterval(updateTime, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500`}
    >
      <div className={`mx-auto transition-all duration-500 bg-gradient-to-r from-primary/10 via-background to-primary/10 backdrop-blur-md rounded-full ${
        isScrolled 
          ? 'px-4 sm:px-6 lg:px-8 max-w-5xl border-x border-border/50 shadow-sm my-2'
          : 'px-6 sm:px-8 lg:px-12 max-w-7xl my-3'
      }`}>
        <div className={`flex items-center justify-between transition-all duration-500 ${
          isScrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <div className={`bg-gradient-to-r from-primary to-primary/80 rounded-full flex items-center justify-center transition-all duration-500 ${
              isScrolled ? 'w-7 h-7' : 'w-9 h-9'
            }`}>
              <span className={`text-background font-bold transition-all duration-500 ${
                isScrolled ? 'text-xs' : 'text-sm'
              }`}>AK</span>
            </div>
            <span className={`font-semibold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent transition-all duration-500 ${
              isScrolled ? 'text-base' : 'text-lg'
            }`}>ANKIT</span>
          </motion.div>

          {/* Center - Time */}
          <div className={`hidden md:flex items-center gap-2 font-mono transition-all duration-500 ${
            isScrolled ? 'text-xs scale-95' : 'text-sm'
          }`}>
            <span className="text-primary/80">{currentTime}</span>
            <span className="text-muted-foreground">IST</span>
          </div>

          {/* Right - Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className={`text-muted-foreground hover:text-primary transition-all duration-500 underline-animate ${
                  isScrolled ? 'text-sm' : 'text-base'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-9 h-9'
              }`}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-9 h-9'
              }`}
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`transition-all duration-500 ${
                isScrolled ? 'w-8 h-8' : 'w-9 h-9'
              }`}
            >
              {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden border-t border-border/50"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2 text-sm">
                <span className="text-primary/80">{currentTime}</span>
                <span className="text-muted-foreground ml-2">IST</span>
              </div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors w-full text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}