import { motion } from 'framer-motion';
import { FaSearch, FaClipboardList, FaFlask, FaBug, FaSyncAlt, FaStar } from 'react-icons/fa';

const Approach = () => {
  const steps = [
    {
      id: 1,
      title: 'Understand',
      desc: 'Understand requirements\nand user flow',
      icon: <FaSearch />,
      colorClass: 'emerald'
    },
    {
      id: 2,
      title: 'Plan',
      desc: 'Create test strategy\nand test cases',
      icon: <FaClipboardList />,
      colorClass: 'blue'
    },
    {
      id: 3,
      title: 'Test',
      desc: 'Execute tests manually\nand via automation',
      icon: <FaFlask />,
      colorClass: 'purple'
    },
    {
      id: 4,
      title: 'Report',
      desc: 'Log bugs and\ntrack with JIRA',
      icon: <FaBug />,
      colorClass: 'pink'
    },
    {
      id: 5,
      title: 'Improve',
      desc: 'Work with team to\nimprove quality',
      icon: <FaSyncAlt />,
      colorClass: 'orange'
    }
  ];

  const getColorClasses = (colorClass) => {
    switch (colorClass) {
      case 'emerald':
        return {
          text: 'text-green-500',
          bg: 'bg-green-500/10',
          border: 'border-green-500/30',
          innerBorder: 'border-green-500/50',
          shadow: 'shadow-[0_0_15px_rgba(34,197,94,0.3)]',
          arrowGradient: 'from-green-500 to-blue-500',
          arrowColor: 'text-blue-500'
        };
      case 'blue':
        return {
          text: 'text-blue-500',
          bg: 'bg-blue-500/10',
          border: 'border-blue-500/30',
          innerBorder: 'border-blue-500/50',
          shadow: 'shadow-[0_0_15px_rgba(59,130,246,0.3)]',
          arrowGradient: 'from-blue-500 to-purple-500',
          arrowColor: 'text-purple-500'
        };
      case 'purple':
        return {
          text: 'text-purple-500',
          bg: 'bg-purple-500/10',
          border: 'border-purple-500/30',
          innerBorder: 'border-purple-500/50',
          shadow: 'shadow-[0_0_15px_rgba(168,85,247,0.3)]',
          arrowGradient: 'from-purple-500 to-pink-500',
          arrowColor: 'text-pink-500'
        };
      case 'pink':
        return {
          text: 'text-pink-500',
          bg: 'bg-pink-500/10',
          border: 'border-pink-500/30',
          innerBorder: 'border-pink-500/50',
          shadow: 'shadow-[0_0_15px_rgba(236,72,153,0.3)]',
          arrowGradient: 'from-pink-500 to-orange-500',
          arrowColor: 'text-orange-500'
        };
      case 'orange':
        return {
          text: 'text-orange-500',
          bg: 'bg-orange-500/10',
          border: 'border-orange-500/30',
          innerBorder: 'border-orange-500/50',
          shadow: 'shadow-[0_0_15px_rgba(249,115,22,0.3)]',
          arrowGradient: '',
          arrowColor: ''
        };
      default:
        return {
          text: 'text-gray-500', bg: 'bg-gray-500/10', border: 'border-gray-500/30', innerBorder: 'border-gray-500/50', shadow: '', arrowGradient: '', arrowColor: ''
        };
    }
  };

  return (
    <section
      id="approach"
      className="relative pt-10 lg:pt-8 pb-10 lg:pb-16 bg-[#03030a] overflow-hidden font-sans"
    >
      <div className="max-w-[1400px] mx-auto px-[5vw] relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4 text-purple-500 font-bold tracking-widest text-sm uppercase">
          <FaStar className="text-xl" />
          <span>MY APPROACH</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-24">
          My Testing Approach
        </h2>

        {/* Process Flow */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-4 relative">

          {steps.map((step, index) => {
            const colors = getColorClasses(step.colorClass);

            return (
              <div key={step.id} className="relative flex flex-col items-center flex-1 w-full group">

                {/* Horizontal Dotted Line connecting circles (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] z-0">
                    <div className={`h-1 w-full bg-gradient-to-r ${colors.arrowGradient} opacity-50 relative`} style={{ backgroundImage: 'linear-gradient(to right, transparent 50%, currentColor 50%)', backgroundSize: '16px 100%', color: 'transparent' }}>
                      <div className="absolute inset-0 flex items-center justify-between pointer-events-none">
                        <div className={`w-full h-[2px] bg-gradient-to-r ${colors.arrowGradient}`} style={{ maskImage: 'linear-gradient(to right, black 50%, transparent 50%)', maskSize: '12px 100%' }}></div>
                      </div>
                      <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-0 h-0 border-y-4 border-y-transparent border-l-[6px] border-l-current ${colors.arrowColor}`}></div>
                    </div>
                  </div>
                )}

                {/* Vertical Line connecting circles (Mobile only) */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute top-24 left-1/2 -translate-x-1/2 h-12 z-0">
                    <div className={`w-[2px] h-full bg-gradient-to-b ${colors.arrowGradient}`} style={{ maskImage: 'linear-gradient(to bottom, black 50%, transparent 50%)', maskSize: '100% 12px' }}></div>
                  </div>
                )}

                {/* Circle Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative z-10 w-24 h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center ${colors.bg} ${colors.border} border border-opacity-50 transition-all duration-300 hover:scale-110 cursor-default ${colors.shadow}`}
                >
                  <div className={`absolute inset-0 rounded-full border border-opacity-50 m-2 ${colors.innerBorder}`}></div>
                  <div className={`text-3xl md:text-4xl ${colors.text} drop-shadow-[0_0_8px_currentColor]`}>
                    {step.icon}
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                  className="mt-6 text-center"
                >
                  <h3 className={`text-xl font-bold mb-2 ${colors.text}`}>
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm whitespace-pre-line leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </motion.div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Approach;
