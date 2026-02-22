import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techCategories = [
  {
    name: 'Frontend',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'Framer Motion', icon: '🎭' },
      { name: 'Vite', icon: '⚡' },
    ]
  },
  {
    name: 'Backend',
    items: [
      { name: 'Spring Boot', icon: '🍃' },
      { name: 'FastAPI', icon: '🚀' },
      { name: 'Python', icon: '🐍' },
      { name: 'Java', icon: '☕' },
    ]
  },
  {
    name: 'AI & GenAI',
    items: [
      { name: 'LangChain', icon: '🔗' },
      { name: 'LangGraph', icon: '🧩' },
      { name: 'Gemini API', icon: '💎' },
      { name: 'Groq API', icon: '🤖' },
      { name: 'OpenAI', icon: '🧠' },
    ]
  },
  {
    name: 'Databases',
    items: [
      { name: 'MongoDB', icon: '🍃' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MySQL', icon: '🗄️' },
    ]
  },
  {
    name: 'Tools',
    items: [
      { name: 'Docker', icon: '🐳' },
      { name: 'Git', icon: '📁' },
      { name: 'Make.com', icon: '🔧' },
      { name: 'n8n', icon: '🔁' },
    ]
  }
];

export default function TechStack() {
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

  const categoryVariants = {
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
    <section id="tech" className="relative bg-black py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent" />
      
      {/* Animated glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.01] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mb-16 text-center"
        >
          <motion.p 
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Tech
          </motion.p>
          <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
            Stack
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl mx-auto">
            The technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Categories */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-16"
        >
          {techCategories.map((category, catIndex) => (
            <motion.div key={category.name} variants={categoryVariants}>
              {/* Category Title */}
              <motion.h3 
                className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-6"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: catIndex * 0.2 }}
              >
                {category.name}
              </motion.h3>

              {/* Tech Items */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: 0.3 + index * 0.05,
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1] as const,
                    }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -6,
                      borderColor: "rgba(255,255,255,0.4)",
                      backgroundColor: "rgba(255,255,255,0.05)"
                    }}
                    className="group flex items-center gap-3 p-4 border border-white/10 transition-all duration-300 cursor-default"
                  >
                    <motion.span 
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-white/80 text-sm font-mono group-hover:text-white transition-colors">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
