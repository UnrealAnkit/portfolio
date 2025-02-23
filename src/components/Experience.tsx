import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">AIPivot.io</p>
            </div>
            <div className="flex flex-col items-start md:items-end mt-2 md:mt-0">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Calendar size={16} className="mr-2" />
                <span>Jan 2024 - Present</span>
              </div>
              <div className="flex items-center text-gray-600 dark:text-gray-400 mt-1">
                <MapPin size={16} className="mr-2" />
                <span>Remote</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium">Key Responsibilities:</h4>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Developed and maintained responsive web applications using React and TypeScript</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Implemented modern UI components with Tailwind CSS and Framer Motion</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Collaborated with the design team to create intuitive user interfaces</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Optimized application performance and improved load times</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Git', 'Figma', 'REST APIs'].map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}