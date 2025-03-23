import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen flex items-center justify-center relative bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-400 via-indigo-400/20 to-purple-400/10 dark:from-blue-900 dark:via-indigo-900/20 dark:to-purple-900/10"
    >
      <div className="container mx-auto px-6 py-24 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 p-1 shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.7)] transition-shadow duration-300"
        >
          {/* <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
            <img 
              src="/logo.jpg"
              alt="Profile Picture"
              className="w-full h-full object-cover rounded-full"
            />
          </div> */}

           <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center text-3xl font-bold">
            <span className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              AK
            </span>
          </div>



        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Ankit Kumar
          <motion.span 
            className="block text-2xl md:text-3xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent mt-2"
            animate={{ 
              backgroundPosition: ['0% center', '100% center', '0% center'],
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            Web Developer
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-12 backdrop-blur-sm"
        >
          Crafting beautiful, responsive web experiences with modern technologies
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-3 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 text-white rounded-lg font-medium overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-shadow duration-300"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-3 rounded-lg font-medium border-2 border-transparent bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 relative"
          >
            <span className="bg-white dark:bg-gray-900 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500">
              Contact Me
            </span>
            <div className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300" style={{ margin: '-2px' }}></div>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="text-blue-500 dark:text-blue-400 animate-pulse" size={24} />
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] -top-32 -right-32 bg-purple-500/30 dark:bg-purple-900/30 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute w-[500px] h-[500px] top-1/2 -left-32 bg-blue-500/30 dark:bg-blue-900/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute w-[500px] h-[500px] bottom-0 right-0 bg-indigo-500/30 dark:bg-indigo-900/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>
    </motion.section>
  );
}
