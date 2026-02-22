import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'CodeAtlas',
    description: 'An AI-powered assistant designed to revolutionize how developers navigate and understand large codebases. It solves the problem of code complexity by providing intelligent, context-aware explanations and navigation.',
    tags: ['React', 'AI Agents', 'AST Parsing', 'Vector DB'],
    impact: 'Reduces onboarding time by 40%',
    category: 'AI',
    links: { github: 'https://github.com/Abhinaytechie/CodeAtlas', live: 'https://yourcodeatlas.vercel.app/' }
  },
  {
    title: 'LinkedIn Automation System',
    description: 'An automated workflow to research current AI Trends from the internet and post it on LinkedIn',
    tags: ['n8n', 'Groq API', 'linkedin webhooks'],
    impact: '10x Outreach Efficiency',
    category: 'Automations',
    links: { github: 'https://github.com/Abhinaytechie/linkedinautomation', live: '#' }
  },
  {
    title: 'Research AI',
    description: 'An all-in-one AI platform to summarize research papers, extract insights, manage references, and accelerate academic productivity. Fully powered by Gemini API.',
    tags: ['React', 'Spring Boot', 'Gemini API', 'MongoDB'],
    impact: 'Accelerates research by 5x',
    category: 'AI',
    links: { github: 'https://github.com/Abhinaytechie/SmartResearchAi', live: 'https://smart-research-ai.vercel.app/' }
  },
  {
    title: 'SQL Agent',
    description: 'An AI agent that converts natural language into optimized SQL queries, reducing query execution time by 70%. Built with LangChain to understand complex database schemas and generate accurate queries.',
    tags: ['Python', 'LangChain', 'SQL', 'OpenAI API'],
    impact: '70% Faster Queries',
    category: 'Backend',
    links: { github: 'https://github.com/Abhinaytechie/Sql_Agent', live: '#' }
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
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
    <section id="projects" className="relative bg-black py-32 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating glow */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
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
          className="mb-16"
        >
          <motion.p
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Selected
          </motion.p>
          <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
            Work
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl">
            High-impact solutions solving complex problems with AI and Automation.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.3)" }}
              className="group relative border border-white/10 transition-all duration-500 overflow-hidden"
            >
              {/* Category Badge */}
              <motion.div
                className="absolute top-4 left-4 z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white/80 text-xs uppercase tracking-[0.1em]">
                  {project.category}
                </span>
              </motion.div>

              {/* Impact Badge */}
              <motion.div
                className="absolute top-4 right-4 z-10"
                initial={{ opacity: 0, x: 10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              >
                <span className="px-3 py-1 bg-white text-black text-xs font-medium">
                  {project.impact}
                </span>
              </motion.div>

              {/* Content */}
              <div className="p-8 pt-20 space-y-6">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + tagIndex * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                      className="px-3 py-1 border border-white/20 text-white/60 text-xs font-mono transition-all duration-300"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  <motion.a
                    href={project.links.github}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                  <motion.a
                    href={project.links.live}
                    className="flex items-center gap-2 text-white/60 hover:text-white text-sm transition-colors duration-300"
                    whileHover={{ x: 4 }}
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Corner accent */}
              <motion.div
                className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-white/0 group-hover:border-white/20 transition-all duration-500"
              />
            </motion.article>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://github.com/Abhinaytechie"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/30 text-white text-sm uppercase tracking-[0.1em] font-medium hover:border-white hover:bg-white/5 transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github size={18} />
            View Full Portfolio on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
