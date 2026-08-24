import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaCogs, FaAward, FaBook } from 'react-icons/fa';

const Education = () => {
  const edus = [
    {
      id: 1,
      year: '2022-25',
      color: 'text-green-500',
      borderColor: 'border-green-500/50',
      shadow: 'shadow-[0_0_15px_rgba(34,197,94,0.2)]',
      icon: <FaGraduationCap className="text-green-500 text-xl" />,
      title: 'Bachelor Vocational - Software Development (B Voc - SD)',
      subtitle: 'Punjabi University, Patiala'
    },
    {
      id: 2,
      year: '2025',
      color: 'text-blue-500',
      borderColor: 'border-blue-500/50',
      shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.2)]',
      icon: <FaCode className="text-blue-500 text-xl" />,
      title: 'MERN Stack Development',
      subtitle: 'Training / Certification'
    },
    // {
    //   id: 3,
    //   year: '2023',
    //   color: 'text-purple-500',
    //   borderColor: 'border-purple-500/50',
    //   shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.2)]',
    //   icon: <FaCogs className="text-purple-500 text-xl" />,
    //   title: 'Software Testing & Automation',
    //   subtitle: 'Selenium & Playwright with Java & TypeScript'
    // },
    {
      id: 4,
      year: '2024',
      color: 'text-orange-500',
      borderColor: 'border-orange-500/50',
      shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.2)]',
      icon: <FaAward className="text-orange-500 text-xl" />,
      title: 'Certifications',
      subtitle: 'Basic Computer Course'
    }
  ];

  return (
    <section id="education" className="relative pt-10 lg:pt-16 pb-10 lg:pb-16 bg-[#03030a] overflow-hidden font-sans">
      <div className="max-w-[900px] mx-auto px-[5vw] relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4 text-purple-500 font-bold tracking-widest text-sm uppercase">
          <FaBook className="text-xl" />
          <span>EDUCATION</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-16">
          Education & Certifications
        </h2>

        {/* Timeline Container */}
        <div className="relative flex">

          {/* Vertical Line */}
          <div className="absolute left-[92px] md:left-[116px] top-10 bottom-10 w-px bg-gradient-to-b from-green-500 via-purple-500 to-orange-500 opacity-50"></div>

          {/* Left Side: Dates and Icons */}
          <div className="flex flex-col w-[120px] md:w-[160px] shrink-0">
            {edus.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="h-[120px] md:h-[140px] flex items-center relative"
              >
                <span className={`w-[70px] md:w-[90px] whitespace-nowrap text-right text-xs md:text-base font-bold ${edu.color} pr-2 md:pr-4`}>
                  {edu.year}
                </span>

                {/* Glowing Icon */}
                <div className={`absolute right-2 md:right-5 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a0a0f] border-2 border-gray-800 flex items-center justify-center z-10 ${edu.shadow}`}>
                  <div className={`absolute inset-0 rounded-full border ${edu.borderColor} m-[2px]`}></div>
                  {edu.icon}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Big Card Container */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-[#0a0a0f] border border-gray-800/80 rounded-2xl overflow-hidden shadow-2xl flex flex-col ml-2 md:ml-4"
          >
            {edus.map((edu, index) => (
              <div
                key={edu.id}
                className={`h-[120px] md:h-[140px] px-4 md:px-10 flex flex-col justify-center ${index !== edus.length - 1 ? 'border-b border-gray-800/50' : ''}`}
              >
                <h3 className="text-base md:text-xl font-bold text-gray-100">
                  {edu.title}
                </h3>
                <p className="text-xs md:text-sm text-gray-400 mt-1 md:mt-2 whitespace-pre-line leading-relaxed font-medium">
                  {edu.subtitle}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Education;
