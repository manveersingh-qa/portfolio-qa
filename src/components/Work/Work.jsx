import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

import loopbynavImg from '../../assets/work_logo/loopbynav.png';
import lmsImg from '../../assets/work_logo/lms.png';
import vtnImg from '../../assets/vtn.png';
import pwebImg from '../../assets/pweb.png';

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Development', 'Testing Projects'];

    {
      id: 1,
      title: 'Loopbynav',
      subtitle: 'E-commerce / Brand Website',
      category: 'Development',
      image: loopbynavImg,
      link: 'https://loopbynav.com',
      tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS']
    },
    {
      id: 2,
      title: 'Learning Management System (LMS)',
      subtitle: '',
      category: 'Development',
      image: lmsImg,
      // link: '#',
      tags: ['MERN Stack', 'JavaScript (ES6+)']
    },
    {
      id: 3,
      title: 'VoiceToNotes.ai',
      subtitle: 'Test Cases, Bug Reports - QA Testing (Web & Mobile)',
      category: 'Testing Projects',
      image: vtnImg,
      //link: '#',
      tags: ['Postman', 'JIRA', 'Excel']
    },
    {
      id: 4,
      title: 'Portfolio Website',
      subtitle: 'Personal Portfolio Website',
      category: 'Development',
      image: pwebImg,
      //  link: '#',
      tags: ['React', 'Tailwind CSS']
    }
  ];

  const filteredProjects = projects.filter(project =>
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  return (
    <section
      id="work"
      className="relative py-20 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-gray-50 dark:bg-[#03030a]"
    >
      <div className="max-w-[1400px] mx-auto w-full z-10">

        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-purple-500 uppercase">
            FEATURED PROJECTS
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mt-2">
            Some Things I've Built & Tested
          </h2>
        </div>



        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                href={project.link}
                target={project.link !== '#' ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#13131e] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden shadow-xl flex flex-col group hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-700 cursor-pointer block"
              >
                {/* Image */}
                <div className="h-56 xl:h-48 overflow-hidden bg-gray-200 dark:bg-[#1c1c28]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-1">
                    {project.subtitle}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-[11px] font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-[#1c1c28] border border-gray-200 dark:border-gray-700 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Work;
