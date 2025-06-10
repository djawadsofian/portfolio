import React, { useMemo } from "react";
import {
  FiMapPin,
  FiCalendar,
  FiCode,
  FiLayers,
} from "react-icons/fi";
import { useInView } from "react-intersection-observer";

// Types
interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

interface StatItem {
  number: string;
  label: string;
}

interface ServiceItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

interface InfoItemProps {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  inView: boolean;
}

interface StatCardProps {
  stat: StatItem;
  index: number;
  inView: boolean;
}

// Constants
const STATS: StatItem[] = [
  { number: "3+", label: "Years Experience" },
  { number: "10+", label: "Projects Completed" },
  { number: "5+", label: "Team Projects Collaborated On" },
  { number: "100%", label: "Commitment to Learning" },
];

const SERVICES: ServiceItem[] = [
  {
    icon: FiCode,
    title: "Frontend Development",
    desc: "React, TypeScript, Next.js",
  },
  {
    icon: FiCode,
    title: "Mobile Development",
    desc: "JetPack Compose, Kotlin",
  },
  {
    icon: FiLayers,
    title: "Full Stack Solutions",
    desc: "End-to-end application development",
  },
];

const INFO_ITEMS = [
  { icon: FiMapPin, text: "Algeria" },
  { icon: FiCalendar, text: "Available for projects" },
];

// Simplified components
const GlassCard: React.FC<GlassCardProps> = React.memo(
  ({ children, className = "", ...props }) => (
    <div
      className={`rounded-xl hover:scale-[1.02] transition-transform duration-300 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
);

const InfoItem: React.FC<InfoItemProps> = React.memo(({ icon: Icon, text }) => (
  <div className="flex items-center space-x-4 text-gray-300 dark:text-gray-400 hover:translate-x-2 transition-transform duration-300">
    <div className="p-2 bg-yellow-400/20 rounded-lg backdrop-blur-sm border border-yellow-400/20 hover:rotate-12 transition-transform duration-300">
      <Icon className="w-5 h-5 text-yellow-400" />
    </div>
    <span>{text}</span>
  </div>
));

const ServiceCard: React.FC<ServiceCardProps> = React.memo(
  ({ service, index }) => (
    <div
      className="flex items-start space-x-4 group hover:translate-x-1 transition-transform duration-300"
      style={{ 
        animationDelay: `${0.6 + index * 0.1}s`,
        opacity: 0,
        animation: 'fadeInUp 0.5s ease-out forwards'
      }}
    >
      <div className="p-3 bg-yellow-400/20 rounded-xl group-hover:bg-yellow-400/30 transition-all duration-300 backdrop-blur-sm border border-yellow-400/10 hover:rotate-12 hover:scale-110">
        <service.icon className="w-6 h-6 text-yellow-400" />
      </div>
      <div>
        <h4 className="font-semibold text-white dark:text-gray-100 group-hover:text-yellow-400 transition-colors duration-300">
          {service.title}
        </h4>
        <p className="text-gray-300 dark:text-gray-400 text-sm">
          {service.desc}
        </p>
      </div>
    </div>
  )
);

const StatCard: React.FC<StatCardProps> = React.memo(
  ({ stat, index }) => (
    <div
      style={{ 
        animationDelay: `${0.8 + index * 0.1}s`,
        opacity: 0,
        animation: 'scaleIn 0.5s ease-out forwards'
      }}
    >
      <GlassCard className="p-6 text-center bg-black/30 dark:bg-gray-800/30 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40 group hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 group-hover:scale-110 transition-transform duration-300">
          {stat.number}
        </div>
        <div className="text-gray-300 dark:text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
          {stat.label}
        </div>
      </GlassCard>
    </div>
  )
);

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Memoized components lists
  const serviceCards = useMemo(
    () =>
      SERVICES.map((service, index) => (
        <ServiceCard
          key={index}
          service={service}
          index={index}
          inView={inView}
        />
      )),
    [inView]
  );

  const statCards = useMemo(
    () =>
      STATS.map((stat, index) => (
        <StatCard key={index} stat={stat} index={index} inView={inView} />
      )),
    [inView]
  );

  const infoItems = useMemo(
    () =>
      INFO_ITEMS.map((item, index) => (
        <InfoItem key={index} icon={item.icon} text={item.text} />
      )),
    []
  );

  return (
    <section
      id="about"
      className="py-20 relative"
      ref={ref}
    >
      {/* Section-specific subtle overlay for content separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div 
          className={`text-center mb-16 transition-all duration-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-gray-100 mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div 
            className={`h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-6 transition-all duration-800 delay-300 ${
              inView ? 'w-24' : 'w-0'
            }`}
          />
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer crafting digital solutions with modern
            technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div 
            className={`space-y-6 transition-all duration-600 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-lg text-gray-200 dark:text-gray-300 leading-relaxed hover:translate-x-1 transition-transform duration-300">
              I am a passionate React developer currently studying Computer
              Science at ESI SBA. I specialize in building responsive and
              dynamic web applications using modern technologies like React,
              TypeScript, and Tailwind CSS. In addition to web development, I
              have experience in mobile development using technologies like
              Kotlin and Jetpack Compose. 
            </p>
            <p className="text-lg text-gray-200 dark:text-gray-300 leading-relaxed hover:translate-x-1 transition-transform duration-300">
              I'm currently expanding my skills by
              learning backend development to become a more versatile full-stack
              developer. I enjoy turning ideas into user-friendly interfaces and
              continuously improving through hands-on projects.
            </p>

            <div className="space-y-4">
              {infoItems}
            </div>
          </div>

          <div 
            className={`transition-all duration-600 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <GlassCard className="p-8 bg-black/30 dark:bg-gray-800/30 backdrop-blur-xl border border-yellow-400/20 hover:border-yellow-400/40">
              <h3 className="text-2xl font-bold text-white dark:text-gray-100 mb-6">
                What I Do
              </h3>
              <div className="space-y-4">{serviceCards}</div>
            </GlassCard>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-600 delay-600 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
        >
          {statCards}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes scaleIn {
          from { 
            opacity: 0; 
            transform: scale(0.8); 
          }
          to { 
            opacity: 1; 
            transform: scale(1); 
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;