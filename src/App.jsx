import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Approach from "./components/Approach/Approach";
import Work from "./components/Work/Work";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import BlurBlob from './components/BlurBlob';

const App = () => {
  return (
    <div className="bg-gray-50 dark:bg-[#050414] transition-colors duration-500 min-h-screen text-gray-900 dark:text-white">

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />



      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        {/* <Services /> */}
        <Skills />
        <Experience />
        <Approach />
        <Work />
        <Education />
        <Contact />
      </div>

    </div>
  );
};

export default App;
