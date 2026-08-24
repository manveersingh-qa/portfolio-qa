import { motion } from 'framer-motion';
import { FaRegEnvelope, FaMobileAlt, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaStar } from 'react-icons/fa';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import contactBg from '../../assets/contact_bg.png';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        e.target.reset();
        setTimeout(() => setSubmitStatus(''), 5000);
    }, (error) => {
        setIsSubmitting(false);
        setSubmitStatus('error');
        console.error(error.text);
    });
  };

  return (
    <section
      id="contact"
      className="relative pt-20 pb-6 px-[5vw] md:px-[7vw] lg:px-[10vw] font-sans bg-[#03030a] overflow-hidden min-h-[80vh] flex flex-col justify-center"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 blur-[2px]"
        style={{ backgroundImage: `url(${contactBg})` }}
      ></div>
      {/* Gradient overlays to blend seamlessly with sections above/below */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#03030a] via-[#03030a]/60 to-[#03030a] z-0 pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto w-full z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4 text-purple-500 font-bold tracking-widest text-sm uppercase">
              <FaStar className="text-xl" />
              <span>LET'S CONNECT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Have a project in mind?
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's work together!
            </h2>

            <p className="text-gray-300 mb-10 text-lg max-w-md">
              I'm open to freelance projects, full-time opportunities and exciting collaborations.
            </p>

            {/* Desktop Contact Details */}
            <div className="hidden lg:flex flex-col space-y-6 mb-10">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                  <FaRegEnvelope className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">manveersingh2033@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                  <FaMobileAlt className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">+91 8195900722</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                  <FaMapMarkerAlt className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">Mohali, Punjab, India</span>
              </div>
            </div>

            {/* <div className="flex gap-4 mb-10">
              <a href="#" className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all shadow-lg hover:shadow-purple-500/20">
                <FaLinkedinIn className="text-lg" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500 hover:bg-purple-600/20 transition-all shadow-lg hover:shadow-purple-500/20">
                <FaGithub className="text-lg" />
              </a>
            </div> */}

            {/* <div>
              <a
                href="#form"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-xl shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_25px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all duration-300 w-fit"
              >
                Send Message <span className="ml-2">→</span>
              </a>
            </div> */}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0f]/80 backdrop-blur-xl border border-gray-800/80 rounded-3xl p-8 md:p-10 shadow-2xl mt-10 lg:mt-0"
            id="form"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-[#13131e]/80 border border-gray-800/60 text-white placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-[#13131e]/80 border border-gray-800/60 text-white placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                />
              </div>
              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full bg-[#13131e]/80 border border-gray-800/60 text-white placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
              />
              <textarea
                name="message"
                required
                placeholder="Your Message"
                rows="5"
                className="w-full bg-[#13131e]/80 border border-gray-800/60 text-white placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 text-white font-bold text-lg rounded-xl transition-all duration-300 mt-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 shadow-[0_4px_15px_rgba(139,92,246,0.3)] hover:shadow-[0_6px_25px_rgba(139,92,246,0.5)] hover:-translate-y-1'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {submitStatus === 'success' && (
                <p className="text-green-500 text-center font-medium mt-2">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="text-red-500 text-center font-medium mt-2">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
          
          {/* Mobile Contact Details (Appears below form on small screens) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex lg:hidden flex-col space-y-6 mt-4"
          >
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                <FaRegEnvelope className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">manveersingh2033@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                <FaMobileAlt className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">+91 8195900722</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[#13131e]/80 backdrop-blur-md border border-gray-800 flex items-center justify-center group-hover:border-purple-500 transition-colors">
                <FaMapMarkerAlt className="text-purple-500 text-lg group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-gray-200 font-medium group-hover:text-purple-400 transition-colors">Mohali, Punjab, India</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Line */}
      <div className="relative z-10 w-full mt-16 border-t border-gray-800/60 pt-6 pb-2 text-center">
        <p className="text-gray-400 font-medium">
          © {new Date().getFullYear()} Manveer Singh. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Contact;
