import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiUsers, FiMessageSquare, FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { useInView } from "react-intersection-observer";

// Import all images at the top
import yacine from "../../images/yacine.jpg";
import moh from "../../images/moh.jpg";
import sohaib from "../../images/sohaib.jpg";
import walid from "../../images/walid.jpg";

// Create a static image map that won't change between renders
const AVATAR_MAP = {
  yacine,
  moh,
  sohaib,
  walid
} as const;

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: keyof typeof AVATAR_MAP; // Now using the key instead of direct image
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Memoize testimonials to prevent unnecessary re-renders
  const testimonials = useMemo<Testimonial[]>(() => [
    {
      id: 1,
      name: "Djaaraoui Yacine",
      role: "FrontEnd Developer",
      company: "ESI SBA",
      content: "I had the pleasure of working with Djawad during our time at ESI SBA. He is a truly outstanding full-stack developer. His deep understanding of both robust backend architecture and dynamic frontend interfaces made him indispensable. In every team project, he expertly bridged the gap between servers and users.",
      avatar: 'yacine',
      rating: 5,
    },
    {
      id: 2,
      name: "Zaarir Mohamed",
      role: "Backend Developer",
      company: "OVA Digital",
      content: "Collaborating with Djawad on the OVA Store was a great experience. As a full-stack developer, he didn't just build secure, scalable backend APIs; he also transformed UI designs into seamless frontend interfaces. His holistic approach to end-to-end development elevated the final product considerably.",
      avatar: 'moh',
      rating: 5,
    },
    {
      id: 3,
      name: "Chebah Sohaib",
      role: "FrontEnd Developer",
      company: "OVA Digital",
      content: "Djawad is an incredibly talented and reliable full-stack developer. His end-to-end contributions to the OVA Store were essential—from writing clean backend logic to implementing thoughtful UX improvements on the frontend. He works flawlessly and adaptably across the entire tech stack.",
      avatar: 'sohaib',
      rating: 5,
    },
    {
      id: 4,
      name: "Benecheikh LeHocine Walid",
      role: "Backend Developer",
      company: "ESI SBA",
      content: "Djawad combines technical expertise across the entire stack with strong communication skills. During our collaborative work, his ability to architect robust Django backends while simultaneously delivering polished React frontends proved that he is a truly exceptional full-stack developer.",
      avatar: 'walid',
      rating: 5,
    },
  ], []);

  // Preload all images when component mounts
  useEffect(() => {
    Object.values(AVATAR_MAP).forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play with cleanup and pause on hover
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const StarRating = React.memo(({ rating }: { rating: number }) => (
    <div className="flex justify-center lg:justify-start space-x-1 mb-6">
      {[...Array(5)].map((_, index) => (
        <FiStar
          key={index}
          className={`w-5 h-5 ${index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
        />
      ))}
    </div>
  ));

  // Extract the current testimonial to a variable
  const current = testimonials[currentTestimonial];

  return (
    <motion.section 
      id="testimonials" 
      className="py-20 relative"
      ref={ref}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
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
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Testimonials from colleagues, professors, and collaborators
          </p>
        </motion.div>

        {/* Main Testimonial Display */}
        <motion.div
          className="relative max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current.id} // Use testimonial ID instead of index
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="relative">
                <div className="relative bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-3xl p-8 md:p-12">
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <FiMessageSquare className="w-6 h-6 text-black" />
                  </div>

                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-10 pt-6">
                    {/* Avatar - Using the static image map */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-yellow-400/40 shadow-lg">
                          <img
                            src={AVATAR_MAP[current.avatar]}
                            alt={current.name}
                            className="w-full h-full object-cover"
                            loading="eager"
                            key={current.avatar} // Key ensures React doesn't re-mount
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-gradient-to-br from-yellow-400 to-yellow-500 p-2.5 rounded-full shadow-lg">
                          <FiUsers className="w-4 h-4 text-black" />
                        </div>
                      </div>
                    </div>

                    <div className="text-center lg:text-left flex-1">
                      <StarRating rating={current.rating} />
                      
                      <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic font-light">
                        "{current.content}"
                      </p>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {current.name}
                        </h3>
                        <p className="text-yellow-400 font-semibold text-lg md:text-xl mb-1">
                          {current.role}
                        </p>
                        <p className="text-gray-400 text-base">
                          {current.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 z-10 shadow-lg"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-black/40 backdrop-blur-sm border border-yellow-400/30 rounded-full flex items-center justify-center text-yellow-400 hover:bg-yellow-400/20 hover:border-yellow-400/50 transition-all duration-300 z-10 shadow-lg"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-4">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => {
                setDirection(index > currentTestimonial ? 1 : -1);
                setCurrentTestimonial(index);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-yellow-400 w-10"
                  : "bg-yellow-400/40 w-3"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default React.memo(TestimonialsSection);