import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const interests = [
  {
    label: 'Currently Obsessed With',
    items: ['Multi-Agent Orchestration', 'RAG Optimization']
  },
  {
    label: 'Research Areas',
    items: ['LLM Fine-tuning', 'Reasoning Models', 'Agentic Workflows']
  }
];

const approach = [
  {
    title: 'AI Integration',
    description: 'Building intelligent applications with LangChain, OpenAI, and Gemini API'
  },
  {
    title: 'Full-Stack Development',
    description: 'Crafting seamless experiences from React frontends to Spring Boot backends'
  },
  {
    title: 'Automation Expert',
    description: 'Streamlining workflows with Make.com, n8n, and custom automation solutions'
  }
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="about" className="relative bg-black py-32 overflow-hidden">
      {/* Subtle background gradient */}
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 lg:gap-24"
        >
          {/* Left Column - Title */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.p
                className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                About
              </motion.p>
              <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
                Me
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Bondalapati Bhargava Sai Abhinay
                </h3>
                <p className="text-white/60 text-base">
                  B.Tech AIML Student & AI-Integrated Full-Stack Developer
                </p>
              </div>

              <p className="text-white/60 text-base leading-relaxed">
                I'm a passionate developer specializing in AI-integrated full-stack solutions.
                Currently pursuing B.Tech in AI & Machine Learning at Malla Reddy University
                with a CGPA of 9.11, I focus on building intelligent applications that solve
                real-world problems.
              </p>

              <p className="text-white/60 text-base leading-relaxed">
                My expertise spans from crafting responsive React frontends to building robust
                Spring Boot backends, all enhanced with cutting-edge AI technologies like
                LangChain, OpenAI, and Gemini API.
              </p>
            </motion.div>

            {/* Replacement for Tech Stack Highlights */}
            <motion.div variants={itemVariants} className="space-y-8">
              {interests.map((interest) => (
                <div key={interest.label} className="space-y-4">
                  <p className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium">
                    {interest.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {interest.items.map((item, index) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(255,255,255,1)",
                          color: "#000"
                        }}
                        className="px-4 py-2 border border-white/20 text-white/80 text-sm font-medium 
                                 transition-all duration-300 cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Approach & Impact */}
          <div className="space-y-8">
            <motion.p
              variants={itemVariants}
              className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Approach & Impact
            </motion.p>

            <div className="space-y-6">
              {approach.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ x: 8, borderColor: "rgba(255,255,255,0.3)" }}
                  className="group p-6 border border-white/10 transition-all duration-300"
                >
                  <h4 className="text-white text-lg font-semibold mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6 pt-8">
              {[
                { value: '6+', label: 'Projects' },
                { value: '9.11', label: 'CGPA' },
                { value: '6+', label: 'Months Exp' },
                { value: '100+', label: 'DSA Problems' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.p
                    className="text-white text-4xl font-bold"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-white/40 text-sm uppercase tracking-[0.1em]">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
