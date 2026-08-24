import { motion } from 'framer-motion';
import { FaUserShield, FaCogs, FaDesktop, FaCheck, FaLink } from 'react-icons/fa';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const manualSkills = [
    "Test Case Design",
    "Functional Testing",
    "Regression Testing",
    "Smoke & Sanity Testing",
    "Bug Reporting (JIRA)",
    "API Testing (Postman)"
  ];

  const automationSkills = [
    "Selenium WebDriver",
    "Playwright",
    "Core Java",
    "TypeScript / JavaScript",
    "TestNG / JUnit",
    "CI/CD (Jenkins)"
  ];

  const webSkills = [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "RESTful APIs",
    "Tailwind CSS"
  ];

  return (
    <section id="skills" className="relative pt-10 lg:pt-10 pb-10 lg:pb-10 bg-[#03030a] overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-[5vw] relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4 text-purple-500 font-bold tracking-widest text-sm uppercase">
          <FaLink className="text-xl -rotate-45" /> 
          <span>SKILLS</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-16">
          Skills & Technologies
        </h2>

        {/* Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Manual Testing */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0f] border border-gray-800/80 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <FaUserShield className="text-4xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
              <h3 className="text-xl lg:text-2xl font-bold text-green-500">Manual Testing</h3>
            </div>
            <ul className="space-y-6">
              {manualSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <FaCheck className="text-green-500 text-sm drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]" />
                  <span className="text-gray-300 font-medium text-sm md:text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Automation Testing */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0f] border border-gray-800/80 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <FaCogs className="text-4xl text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
              <h3 className="text-xl lg:text-2xl font-bold text-purple-500">Automation Testing</h3>
            </div>
            <ul className="space-y-6">
              {automationSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <FaCheck className="text-purple-500 text-sm drop-shadow-[0_0_4px_rgba(168,85,247,0.8)]" />
                  <span className="text-gray-300 font-medium text-sm md:text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Web Development */}
          <motion.div variants={itemVariants} className="bg-[#0a0a0f] border border-gray-800/80 rounded-3xl p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-4 mb-10">
              <FaDesktop className="text-4xl text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]" />
              <h3 className="text-xl lg:text-2xl font-bold text-blue-500">Web Development</h3>
            </div>
            <ul className="space-y-6">
              {webSkills.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <FaCheck className="text-blue-500 text-sm drop-shadow-[0_0_4px_rgba(59,130,246,0.8)]" />
                  <span className="text-gray-300 font-medium text-sm md:text-base">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
