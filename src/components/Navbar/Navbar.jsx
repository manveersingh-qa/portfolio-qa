import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "work", label: "Projects" },
    // { id: "automation", label: "Automation" },
    // { id: "development", label: "Development" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[5vw] lg:px-[5vw] xl:px-[5vw] ${isScrolled ? "bg-white/80 dark:bg-[#050414]/80 backdrop-blur-md shadow-lg shadow-purple-900/10 dark:shadow-purple-900/20 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-[1400px] mx-auto text-gray-900 dark:text-white flex justify-between items-center relative">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold cursor-pointer tracking-wider flex items-baseline"
          onClick={() => handleMenuItemClick('home')}
        >
          <span className="text-gray-900 dark:text-white text-3xl">M</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 text-3xl font-extrabold italic">S</span>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 xl:space-x-8 text-gray-600 dark:text-gray-300 relative items-center">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="relative cursor-pointer"
            >
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`transition-colors duration-300 hover:text-gray-900 dark:hover:text-white text-sm xl:text-base ${activeSection === item.id ? "text-gray-900 dark:text-white" : ""
                  }`}
              >
                {item.label}
              </button>
              {activeSection === item.id && (
                <motion.div
                  layoutId="activePill"
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#8245ec] rounded-full shadow-[0_0_10px_#8245ec]"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Right Action Button */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center"
        >
          {/* Theme toggle available on desktop too just in case, but hidden in screenshot. Let's hide it on large screens if they strictly want exact match, but it's good UX to have it. I'll hide it for desktop to match exactly. */}
          <button
            onClick={() => handleMenuItemClick('contact')}
            className="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:-translate-y-1 transition-all duration-300"
          >
            Let's Connect
          </button>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center space-x-4">
          {isOpen ? (
            <FiX size={28} className="cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FiMenu size={28} className="cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-white dark:bg-[#050414] shadow-xl border-t border-gray-100 dark:border-gray-800 lg:hidden flex flex-col items-center py-6 space-y-4"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleMenuItemClick(item.id)}
                className={`text-lg font-medium transition-colors duration-300 hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : "text-gray-700 dark:text-gray-300"
                  }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => handleMenuItemClick('contact')}
              className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg"
            >
              Let's Connect
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
