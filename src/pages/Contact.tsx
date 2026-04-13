import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiMapPin, FiCalendar, FiGithub, FiLinkedin, FiInstagram, FiSend, FiCheck, FiX, FiPhone, FiExternalLink } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import withLayout from "../hoc/WithLayout";

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openGmailCompose = () => {
    const emailAddress = "ds.boufelghed@esi-sba.dz";
    const subject = "Contact from Portfolio Website";
    const body = "Hello Djawad,\n\nI visited your portfolio website and would like to get in touch.\n\nBest regards,";
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ds.boufelghed@esi-sba.dz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New message from ${formData.name} - Portfolio Contact Form`,
          _captcha: 'false',
          _template: 'table'
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
      
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      content: "ds.boufelghed@esi-sba.dz",
      onClick: openGmailCompose,
    },
    {
      icon: FiMapPin,
      title: "Location",
      content: "Algeria",
      onClick: null,
    },
    {
      icon: FiCalendar,
      title: "Available",
      content: "For new opportunities",
      onClick: null,
    },
    {
      icon: FiPhone,
      title: "Phone",
      content: "+213776165266",
      onClick: null,
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/djawadsofian",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/boufelghed-djawad-soufyane-848a92190/",
      label: "LinkedIn",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/djawad_sofian/",
      label: "Instagram",
    },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Simplified background - no heavy gradients */}
      <div className="absolute inset-0 bg-black/5"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - single entrance animation */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white dark:text-gray-100 sm:text-4xl lg:text-5xl">
            Get In{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6" />
          <p className="mx-auto max-w-3xl text-base text-gray-300 dark:text-gray-400 sm:text-lg">
            Have a project in mind or want to discuss potential opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information - simplified animations */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Main Contact Card - removed heavy blur effects */}
            <div className="relative">
              <div className="bg-black/40 dark:bg-gray-800/40 border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400/50 transition-colors duration-300">
                {/* Simple top accent */}
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-6"></div>

                <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-8">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="p-3 bg-yellow-400/20 rounded-lg">
                        <info.icon className="w-5 h-5 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white dark:text-gray-100 mb-1">
                          {info.title}
                        </h4>
                        {info.onClick ? (
                          <button
                            onClick={info.onClick}
                            className="text-gray-300 dark:text-gray-400 hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-2 text-left"
                          >
                            <span>{info.content}</span>
                            <FiExternalLink className="w-4 h-4" />
                          </button>
                        ) : (
                          <p className="text-gray-300 dark:text-gray-400">
                            {info.content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Social Links - simplified */}
            <div className="bg-black/30 dark:bg-gray-800/30 border border-yellow-400/20 rounded-xl p-6">
              <h4 className="font-semibold text-white dark:text-gray-100 mb-4 flex items-center space-x-2">
                <span>Connect with me</span>
                <span>👋</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-yellow-400/10 border border-yellow-400/20 text-gray-400 hover:text-yellow-400 hover:bg-yellow-400/20 transition-all duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form - simplified */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-black/40 dark:bg-gray-800/40 border border-yellow-400/30 rounded-2xl p-8">
              {/* Simple top accent */}
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full mb-6"></div>

              <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-8">
                Send Me a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-400/30 rounded-lg text-white dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-yellow-400/30 rounded-lg text-white dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 dark:text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/30 border border-yellow-400/30 rounded-lg text-white dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full py-4 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 focus:outline-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center space-x-2"
                      >
                        <FiSend className="w-5 h-5" />
                        <span>Send Message</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>

                {/* Status Messages */}
                <AnimatePresence>
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className={`p-4 rounded-lg flex items-center space-x-3 ${
                        submitStatus === "success"
                          ? "bg-green-500/20 border border-green-500/30 text-green-400"
                          : "bg-red-500/20 border border-red-500/30 text-red-400"
                      }`}
                    >
                      <div>
                        {submitStatus === "success" ? (
                          <FiCheck className="w-6 h-6" />
                        ) : (
                          <FiX className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        {submitStatus === "success" ? (
                          <div>
                            <p className="font-semibold">Message sent successfully!</p>
                            <p className="text-sm opacity-80">I'll get back to you soon.</p>
                          </div>
                        ) : (
                          <div>
                            <p className="font-semibold">Oops! Something went wrong.</p>
                            <p className="text-sm opacity-80">Please try again or contact me directly.</p>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Quick Contact CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-300 dark:text-gray-400 mb-4">
            Prefer a quick chat? 
          </p>
          <button
            onClick={openGmailCompose}
            className="cursor-pointer inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-200"
          >
            <FiMail className="w-5 h-5" />
            <span className="font-semibold">Send me an email directly</span>
            <FiExternalLink className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default withLayout(Contact);
