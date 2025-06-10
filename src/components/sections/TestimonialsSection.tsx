import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUsers, FiMessageSquare, FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

import yacine from "../../images/yacine.jpg";
import moh from "../../images/moh.jpg";
import sohaib from "../../images/sohaib.jpg";
import walid from "../../images/walid.jpg";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Djaaraoui Yacine",
      role: "FrontEnd Developer",
      company: "ESI SBA",
      content: "I had the pleasure of working with Djawad during our time at ESI SBA. His strong foundation in web development and quick adaptability to new technologies stood out. Whether in class projects or team collaborations, he consistently brought quality and innovation to the table.",
      avatar: yacine,
      rating: 5,
    },
    {
      id: 2,
      name: "Zaarir Mohamed",
      role: "Backend Developer",
      company: "OVA Digital",
      content: "Collaborating with Djawad on the OVA Store project was a great experience. He transformed our UI designs into seamless, interactive interfaces with precision. His attention to user experience and front-end performance really elevated the final product.",
      avatar: moh,
      rating: 5,
    },
    {
      id: 3,
      name: "Chebah Sohaib",
      role: "FrontEnd Developer",
      company: "OVA Digital",
      content: "Djawad is a talented and reliable web developer. His contributions to the OVA Store were essential — from clean, maintainable code to thoughtful UX improvements. He works well in a team and always pushes to stay updated with the latest in web technologies.",
      avatar: sohaib,
      rating: 5,
    },
    {
      id: 4,
      name: "Benecheikh LeHocine Walid",
      role: "Backend Developer",
      company: "ESI SBA",
      content: "Djawad combines technical skill with strong communication, making him a key member in any project. During our time at ESI SBA and on collaborative work, he showed a great ability to connect frontend and backend development with clarity and effectiveness.",
      avatar: walid,
      rating: 5,
    },
  ];

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex justify-center lg:justify-start space-x-1 mb-6">
        {[...Array(5)].map((_, index) => (
          <FiStar
            key={index}
            className={`w-5 h-5 transition-colors duration-300 ${
              index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <motion.section 
      id="testimonials" 
      className="py-20 relative"
      ref={ref}
    >
      {/* Simplified overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Simplified animations */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            What People{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Say
            </span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Testimonials from colleagues, professors, and collaborators
          </p>
        </motion.div>

        {/* Main Testimonial Display - Optimized animations */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentTestimonial}
              custom={direction}
              initial={{ 
                opacity: 0, 
                x: direction > 0 ? 30 : -30
              }}
              animate={{ 
                opacity: 1, 
                x: 0
              }}
              exit={{ 
                opacity: 0, 
                x: direction > 0 ? -30 : 30
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
            >
              <div className="relative group">
                {/* Simplified card without heavy blur */}
                <div className="relative bg-black/40 dark:bg-gray-800/40 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 md:p-12 hover:border-yellow-400/50 transition-colors duration-300">
                  {/* Quote Icon - Simplified hover */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <FiMessageSquare className="w-6 h-6 text-black" />
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 pt-6">
                    {/* Avatar - Simplified hover */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400/40 shadow-lg hover:border-yellow-400/60 transition-colors duration-300">
                          <img
                            src={testimonials[currentTestimonial].avatar}
                            alt={testimonials[currentTestimonial].name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-yellow-500 p-2.5 rounded-full shadow-lg">
                          <FiUsers className="w-4 h-4 text-black" />
                        </div>
                      </div>
                    </div>

                    {/* Content - Removed staggered animations */}
                    <div className="text-center lg:text-left flex-1">
                      <StarRating rating={testimonials[currentTestimonial].rating} />
                      
                      <p className="text-gray-200 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic font-light">
                        "{testimonials[currentTestimonial].content}"
                      </p>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white dark:text-gray-100 mb-2">
                          {testimonials[currentTestimonial].name}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-lg md:text-xl mb-1">
                          {testimonials[currentTestimonial].role}
                        </p>
                        <p className="text-gray-400 dark:text-gray-400 text-base">
                          {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows - Simplified animations */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 z-10 shadow-lg hover:shadow-xl"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Testimonial Indicators - Simplified */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentTestimonial ? 1 : -1);
                setCurrentTestimonial(index);
              }}
              className={`cursor-pointer h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-yellow-400 w-10"
                  : "bg-yellow-400/40 hover:bg-yellow-400/60 w-3"
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;