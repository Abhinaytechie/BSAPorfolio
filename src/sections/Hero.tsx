import { motion } from 'framer-motion';
import { ArrowDownRight, Code2, Briefcase, Award, Zap } from 'lucide-react';

// Animated background particles
const FloatingParticle = ({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/10"
    style={{
      width: size,
      height: size,
      left: x,
      top: y,
    }}
    animate={{
      y: [0, -30, 0],
      opacity: [0.1, 0.3, 0.1],
      scale: [1, 1.2, 1],
    }}
    transition={{
      duration: 4 + Math.random() * 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

const quickStats = [
  { icon: Code2, value: '6+', label: 'Projects', desc: 'AI & Full-Stack' },
  { icon: Briefcase, value: '3', label: 'Internships', desc: 'Industry Experience' },
  { icon: Award, value: '9.11', label: 'CGPA', desc: 'Academic Excellence' },
  { icon: Zap, value: '100+', label: 'DSA', desc: 'Problems Solved' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
          animate={{
            backgroundPosition: ['0px 0px', '60px 60px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticle delay={0} x="10%" y="20%" size={4} />
      <FloatingParticle delay={1} x="85%" y="15%" size={3} />
      <FloatingParticle delay={2} x="70%" y="60%" size={5} />
      <FloatingParticle delay={0.5} x="20%" y="70%" size={3} />
      <FloatingParticle delay={1.5} x="90%" y="80%" size={4} />
      <FloatingParticle delay={2.5} x="50%" y="30%" size={2} />

      {/* Decorative Circle */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-32 bottom-0 w-[500px] h-[500px] border border-white/10 rounded-full"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-white/30 rounded-full -translate-x-1/2" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute -left-16 bottom-16 w-[400px] h-[400px] border border-white/5 rounded-full"
      >
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 bg-white/20 rounded-full -translate-x-1/2" />
        </motion.div>
      </motion.div>

      {/* Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-white/[0.02] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight"
              >
                Hello.
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight"
              >
                I am
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-white text-[clamp(3rem,10vw,8rem)] font-black leading-[0.9] tracking-tight"
              >
                Abhinay
              </motion.h1>
            </div>

            {/* Roles with Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-4"
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDownRight className="w-8 h-8 text-white mt-1" strokeWidth={1.5} />
              </motion.div>
              <div className="space-y-1">
                <motion.p
                  className="text-white/90 text-lg font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  AI Developer
                </motion.p>
                <motion.p
                  className="text-white/90 text-lg font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                >
                  Full-Stack Engineer
                </motion.p>
                <motion.p
                  className="text-white/90 text-lg font-medium"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                >
                  Freelance
                </motion.p>
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-white/60 text-base leading-relaxed max-w-md"
            >
              I am an AI-integrated Full-Stack Developer based in Hyderabad, India.
              I architect scalable AI solutions that transform complex workflows into
              effortless automation, specializing in LangChain, n8n, and AI Agents.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-black text-sm uppercase tracking-[0.1em] font-medium hover:bg-white/90 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white text-sm uppercase tracking-[0.1em] font-medium hover:border-white hover:bg-white/5 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Work
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column - Quick Stats */}
          <div className="space-y-6 lg:pl-12">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium"
            >
              Quick Overview
            </motion.p>

            <div className="grid grid-cols-2 gap-4">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.9 + index * 0.1,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  whileHover={{
                    scale: 1.03,
                    borderColor: "rgba(255,255,255,0.3)",
                    backgroundColor: "rgba(255,255,255,0.03)"
                  }}
                  className="p-5 border border-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <stat.icon className="w-5 h-5 text-white/40 group-hover:text-white/60 transition-colors" />
                    </motion.div>
                    <motion.span
                      className="text-white text-2xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                    >
                      {stat.value}
                    </motion.span>
                  </div>
                  <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                  <p className="text-white/40 text-xs mt-1">{stat.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 p-4 border border-white/10"
            >
              <motion.span
                className="w-3 h-3 bg-green-500 rounded-full"
                animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div>
                <p className="text-white text-sm font-medium">Available for Projects</p>
                <p className="text-white/40 text-xs">Open to freelance & full-time opportunities</p>
              </div>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-3"
            >
              <p className="text-white/40 text-xs uppercase tracking-[0.2em]">Core Technologies</p>
              <div className="flex flex-wrap gap-2">
                {['Python', 'Java', 'LangChain', 'n8n', 'React', 'FastAPI', 'Spring Boot', 'VectorDB', 'PostgreSQL', 'MongoDB'].map((tech, i) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.6 + i * 0.05, duration: 0.3 }}
                    whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
                    className="px-3 py-1.5 border border-white/15 text-white/60 text-xs font-mono hover:text-white/80 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
