import { motion } from 'framer-motion';
import { FaUserCheck, FaShieldAlt, FaGem, FaRocket, FaJava, FaReact, FaNodeJs, FaTheaterMasks } from 'react-icons/fa';
import { SiSelenium, SiTypescript, SiJavascript, SiMongodb } from 'react-icons/si';
import profileImage from '../../assets/hero.jpeg'; // Reusing hero image for now

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative pt-16 lg:pt-24 pb-16 lg:pb-24 bg-[#03030a] overflow-hidden flex flex-col">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-[5vw] relative z-10">
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
          
          {/* Left Side (Text & Features) */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="w-full lg:w-[55%] flex flex-col text-left"
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4 text-purple-500 font-bold tracking-widest text-sm uppercase">
              <FaUserCheck className="text-xl" /> 
              <span>ABOUT ME</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-8">
              About Me
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-xl font-medium">
              I am a Software QA Engineer with hands-on experience in Manual Testing, Test Automation (Selenium & Playwright) and Web Development (MERN Stack).
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 max-w-xl font-medium">
              I enjoy breaking things to make them better, automating repetitive tasks and building modern web applications.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="flex items-center gap-4 bg-[#0a0a0f] border border-gray-800/80 rounded-xl p-4 shadow-lg">
                <FaShieldAlt className="text-green-500 text-xl" />
                <span className="text-gray-300 font-medium text-sm md:text-base">Detail Oriented</span>
              </div>
              <div className="flex items-center gap-4 bg-[#0a0a0f] border border-gray-800/80 rounded-xl p-4 shadow-lg">
                <FaShieldAlt className="text-green-500 text-xl" />
                <span className="text-gray-300 font-medium text-sm md:text-base">Problem Solver</span>
              </div>
              <div className="flex items-center gap-4 bg-[#0a0a0f] border border-gray-800/80 rounded-xl p-4 shadow-lg">
                <FaGem className="text-purple-500 text-xl" />
                <span className="text-gray-300 font-medium text-sm md:text-base">Quality Focused</span>
              </div>
              <div className="flex items-center gap-4 bg-[#0a0a0f] border border-gray-800/80 rounded-xl p-4 shadow-lg">
                <FaRocket className="text-blue-500 text-xl" />
                <span className="text-gray-300 font-medium text-sm md:text-base">Quick Learner</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side (Tech Stack Grid Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[45%] flex justify-center lg:justify-end relative mt-12 lg:mt-0"
          >
            <div className="w-full max-w-[450px] bg-[#0a0a0f] border border-gray-800/80 rounded-3xl p-8 lg:p-10 shadow-2xl relative z-20 flex flex-col">
              <h3 className="text-purple-400 font-bold mb-10 text-center uppercase tracking-widest text-sm lg:text-base">TECH I LOVE WORKING WITH</h3>
              
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-10">
                <div className="flex flex-col items-center gap-3">
                  <SiSelenium className="text-5xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide">Selenium</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <FaTheaterMasks className="text-5xl text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide">Playwright</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <FaJava className="text-5xl text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide">Java</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <SiTypescript className="text-5xl text-blue-500 bg-white rounded drop-shadow-[0_0_8px_rgba(59,130,246,0.4)] p-[2px]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide mt-1">TypeScript</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <SiJavascript className="text-5xl text-yellow-400 bg-black rounded drop-shadow-[0_0_8px_rgba(250,204,21,0.4)] p-[2px]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide mt-1">JavaScript</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <FaReact className="text-5xl text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide">React</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <FaNodeJs className="text-5xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide">Node.js</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <SiMongodb className="text-5xl text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                  <span className="text-xs text-gray-300 font-medium tracking-wide">MongoDB</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
