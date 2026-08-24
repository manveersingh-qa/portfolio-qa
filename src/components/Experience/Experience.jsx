import { motion } from 'framer-motion';
import { FaCheck, FaUserTie, FaFingerprint, FaFileAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Junior Quality Analyst',
      company: 'Ditinus Technology Pvt. Ltd.',
      date: 'March 2026 –Present',
      dateColor: 'text-green-500',
      icon: <FaFingerprint className="text-purple-500 text-2xl" />,
      bullets: [
        'Execute manual, functional, regression, smoke, and sanity testing for CRM and e-commerce web applications.',
        'Design test cases from business and functional requirements; conduct API testing and validate backend responses using Postman',
        'Identify, document, and track defects through the full defect lifecycle in JIRA, collaborating with developers in an Agile/Scrum setup.'
      ]
    },
    {
      id: 2,
      title: 'Software Tester Intern',
      company: ' Dooritt (Real Estate Tech Platform)',
      date: 'Sept 2025 – Feb 2026',
      dateColor: 'text-blue-500',
      icon: <FaFileAlt className="text-purple-500 text-2xl" />,
      bullets: [
        'Reviewed requirements to derive test scenarios and executed manual and API testing (Postman) on web and mobile applications.',
        'Reported and tracked defects in JIRA across Regression, Smoke, and Functional testing cycles; gained exposure to Selenium WebDriver and JMeter.'
      ]
    },
    {
      id: 3,
      title: 'MERN Stack Developer Trainee',
      company: 'Sensation Software Pvt. Ltd.',
      date: 'Jan 2025 – June 2025',
      dateColor: 'text-blue-500',
      icon: <FaFileAlt className="text-purple-500 text-2xl" />,
      bullets: [
        'Developed a full-stack Learning Management System (LMS) with authentication and role-based access control in an Agile team.'
      ]
    }
  ];

  return (
    <section id="experience" className="relative pt-10 lg:pt-8 pb-10 lg:pb-8 bg-[#03030a] overflow-hidden font-sans">
      <div className="max-w-[1000px] mx-auto px-[5vw] relative z-10">

        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4 text-purple-500 font-bold tracking-widest text-sm uppercase">
          <FaUserTie className="text-xl" />
          <span>EXPERIENCE</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-16">
          Work Experience
        </h2>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-10 bottom-10 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent"></div>

          <div className="flex flex-col space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative flex items-start gap-6 md:gap-10">

                {/* Timeline Icon */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center flex-shrink-0 bg-[#0a0a0f] border-2 border-gray-800 shadow-[0_0_15px_rgba(168,85,247,0.3)] mt-1"
                >
                  <div className="absolute inset-0 rounded-full border border-purple-500/30 m-1"></div>
                  {exp.icon}
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex-1 bg-[#0a0a0f] border border-gray-800/80 rounded-2xl p-6 md:p-8 shadow-xl"
                >
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-blue-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]">
                        {exp.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-400 mt-2 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <span className={`text-sm md:text-base font-bold ${exp.dateColor} mt-1 md:mt-0`}>
                      {exp.date}
                    </span>
                  </div>

                  <ul className="space-y-4 mt-6">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <FaCheck className="text-green-500 text-sm mt-1 flex-shrink-0 drop-shadow-[0_0_4px_rgba(34,197,94,0.8)]" />
                        <span className="text-gray-300 font-medium text-sm md:text-base">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
