import { motion } from 'framer-motion';
import { FaDownload, FaFlask, FaCog, FaCode, FaRegUser, FaBullseye, FaRobot, FaFolder, FaUserTie } from 'react-icons/fa';
import profileImage from '../../assets/hero.jpeg';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 lg:pt-20 pb-6 flex flex-col justify-between overflow-hidden bg-[#03030a]"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto w-full px-[5vw] lg:px-[5vw] flex flex-col lg:flex-row justify-between items-start lg:items-center relative z-10 gap-16 lg:gap-0 flex-1">

        {/* Left Column - Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-[35%] flex flex-col justify-center min-h-[80vh] lg:min-h-0 z-20"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full border border-purple-500/40 text-purple-400 text-[10px] font-bold tracking-widest uppercase shadow-[0_0_10px_rgba(168,85,247,0.1)] bg-[#03030a]">
              SOFTWARE QA ENGINEER
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="flex flex-col space-y-1 mb-5 font-extrabold text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] leading-[1.05] tracking-tight">
            <h1 className="text-white drop-shadow-md whitespace-nowrap">I BUILD.</h1>
            <h1 className="text-[#56b6c2] drop-shadow-md whitespace-nowrap">I TEST.</h1>
            <h1 className="text-[#3b82f6] drop-shadow-md whitespace-nowrap">I AUTOMATE.</h1>
            <h1 className="text-[#a855f7] drop-shadow-md whitespace-nowrap">I IMPROVE.</h1>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-sm font-medium">
            <p>QA Engineer with expertise in Manual Testing,</p>
            <p>Test Automation & Web Development. </p>
            <p className="mt-4">I help deliver reliable, high-quality digital experiences.</p>
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 w-full sm:w-auto overflow-hidden">
            <a
              href="#work"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm sm:text-base rounded-lg shadow-[0_0_15px_rgba(168,85,247,0.4)] hover:shadow-[0_0_25px_rgba(168,85,247,0.6)] hover:-translate-y-1 transition-all duration-300 text-center whitespace-nowrap flex-1 sm:flex-none"
            >
              View My Work
            </a>
            <a
              href="/Manveer Singh QA.pdf"
              download="Manveer_Singh_CV.pdf"
              className="px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-gray-600 hover:border-gray-400 text-white font-semibold text-sm sm:text-base rounded-lg flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-300 text-center whitespace-nowrap flex-1 sm:flex-none"
            >
              Download CV <FaDownload className="text-xs" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <div className="w-full lg:absolute lg:right-0 lg:top-0 lg:w-[60%] xl:w-[55%] flex justify-center items-center z-10 pointer-events-none mt-8 lg:mt-0 h-auto lg:h-full mb-8 lg:mb-0">
          <div className="relative w-[330px] h-[330px] sm:w-[400px] sm:h-[400px] lg:w-full lg:h-full flex justify-center items-center">
            {/* Mobile Background Glow */}
            <div className="absolute inset-0 bg-purple-600/30 rounded-full blur-[60px] lg:hidden z-0"></div>
            
            <motion.img
              initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.9 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              src={profileImage}
              alt="Manveer Singh"
              className="w-full h-full object-cover object-top rounded-[40px] lg:rounded-none lg:[mask-image:linear-gradient(to_right,transparent_5%,black_15%)] shadow-[0_0_40px_rgba(168,85,247,0.4)] lg:shadow-none border border-gray-800/50 lg:border-none relative z-10"
            />
          </div>
        </div>

        {/* Right Column - Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-[28%] flex flex-col items-center lg:items-end gap-6 z-20 lg:-mr-[3vw] xl:-mr-[4vw]"
        >
          {/* Card 1: What I Do */}
          <div className="w-full max-w-[260px] bg-[#0a0a0f]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-purple-400 font-semibold mb-5 text-[15px]">What I Do</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-gray-300">
                <FaFlask className="text-green-500 text-lg drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="font-medium text-xs">Manual Testing</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <FaCog className="text-blue-500 text-lg drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                <span className="font-medium text-xs">Automation Testing</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <FaCog className="text-purple-500 text-lg drop-shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                <span className="font-medium text-xs">API Testing</span>
              </li>
              <li className="flex items-center gap-4 text-gray-300">
                <FaCode className="text-blue-400 text-lg drop-shadow-[0_0_8px_rgba(96,165,250,0.6)]" />
                <span className="font-medium text-xs">Web Development</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Quality First */}
          <div className="hidden sm:flex w-full max-w-[260px] bg-[#0a0a0f]/80 backdrop-blur-md border border-gray-800/80 rounded-2xl p-5 shadow-2xl relative overflow-hidden flex-col justify-between h-[110px]">
            <div className="z-10">
              <h3 className="text-blue-400 font-bold text-[10px] uppercase tracking-wider mb-0.5">QUALITY FIRST</h3>
              <p className="text-gray-400 text-[11px] mb-1">Bugs Reduced</p>
              <div className="text-3xl font-bold text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">80%</div>
            </div>

            {/* SVG Chart */}
            <div className="absolute right-0 bottom-0 w-3/5 h-[80%] opacity-90 z-0">
              <svg viewBox="0 0 100 50" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,50 L0,40 C15,35 25,45 40,35 C55,25 65,30 80,15 C90,5 95,10 100,5 L100,50 Z" fill="url(#chartGrad)" />
                <path d="M0,40 C15,35 25,45 40,35 C55,25 65,30 80,15 C90,5 95,10 100,5" fill="none" stroke="#a855f7" strokeWidth="1.5" />
                <circle cx="100" cy="5" r="2.5" fill="#a855f7" />
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Bottom Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="w-full max-w-[1400px] mx-auto mt-10 lg:mt-4 px-[5vw] lg:px-[5vw]"
      >
        <div className="bg-[#0a0a0f] border border-gray-800/80 rounded-2xl py-3 px-6 lg:px-10 flex flex-wrap justify-between items-center gap-6 lg:gap-4 shadow-2xl relative z-30">

          <div className="flex items-center gap-4">
            <FaRegUser className="text-2xl text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">450+</span>
              <span className="text-gray-400 text-[11px] font-medium">Tests Executed</span>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-gray-800"></div>

          <div className="flex items-center gap-4">
            <FaBullseye className="text-2xl text-purple-500 drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">200+</span>
              <span className="text-gray-400 text-[11px] font-medium">Bugs Identified</span>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-gray-800"></div>

          <div className="flex items-center gap-4">
            <FaRobot className="text-2xl text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">50+</span>
              <span className="text-gray-400 text-[11px] font-medium">Automation Scripts</span>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-gray-800"></div>

          <div className="flex items-center gap-4">
            <FaFolder className="text-2xl text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">4+</span>
              <span className="text-gray-400 text-[11px] font-medium">Web Projects</span>
            </div>
          </div>

          <div className="hidden lg:block w-px h-8 bg-gray-800"></div>

          <div className="flex items-center gap-4">
            <FaUserTie className="text-2xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight">1.5+</span>
              <span className="text-gray-400 text-[11px] font-medium">Years Experience</span>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
