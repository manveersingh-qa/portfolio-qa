import { motion } from 'framer-motion';
import { FaCheck, FaFlask, FaCode, FaSearch, FaCogs } from 'react-icons/fa';
import { FiMonitor, FiSettings } from 'react-icons/fi';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section
      id="services"
      className="relative py-20 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans flex flex-col justify-center bg-gray-50 dark:bg-[#03030a]"
    >
      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-purple-500 uppercase">
            WHAT I DO
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Services I Offer
          </h2>
        </div>

        {/* Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Software Testing */}
          <motion.div 
            variants={cardVariants}
            className="relative bg-white dark:bg-[#13131e] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden group hover:border-green-500/30 transition-colors duration-300"
          >
            <div className="text-green-500 text-3xl mb-8">
              <FaFlask />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Software Testing
            </h3>
            <ul className="flex flex-col space-y-4">
              {['Manual Testing', 'API Testing', 'Test Case Design', 'Bug Reporting', 'Regression Testing'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheck className="text-green-500 text-sm flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Right Watermark Icon */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-green-500/20 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <FaSearch className="text-4xl text-green-500" />
            </div>
          </motion.div>

          {/* Card 2: Web Development */}
          <motion.div 
            variants={cardVariants}
            className="relative bg-white dark:bg-[#13131e] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden group hover:border-blue-500/30 transition-colors duration-300"
          >
            <div className="text-blue-500 text-3xl mb-8">
              <FiMonitor />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Web Development
            </h3>
            <ul className="flex flex-col space-y-4">
              {['React.js Development', 'Node.js & Express.js', 'MongoDB Integration', 'Responsive Websites', 'RESTful APIs'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <FaCheck className="text-blue-500 text-sm flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Right Watermark Icon */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-blue-500/20 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <FaCode className="text-4xl text-purple-500" />
            </div>
          </motion.div>

          {/* Card 3: QA + Developer Advantage */}
          <motion.div 
            variants={cardVariants}
            className="relative bg-white dark:bg-[#13131e] border border-gray-200 dark:border-gray-800 rounded-3xl p-8 lg:p-10 shadow-xl overflow-hidden group hover:border-purple-500/30 transition-colors duration-300"
          >
            <div className="text-purple-500 text-3xl mb-8">
              <FiSettings />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pr-4">
              QA + Developer Advantage
            </h3>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed pr-2">
              I understand how applications are built, so I test smarter, find real issues and deliver better quality.
            </p>

            {/* Bottom Right Watermark Icon */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full border border-purple-500/20 flex items-center justify-center opacity-30 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">
              <FaCogs className="text-4xl text-purple-500" />
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Services;
