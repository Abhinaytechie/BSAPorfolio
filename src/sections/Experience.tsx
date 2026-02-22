import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Users, Code, Brain } from 'lucide-react';

const experiences = [
  {
    type: 'Internship',
    period: 'Jan 2026 – Present',
    company: 'One Tapp Consulting',
    role: 'AI Engineer Intern',
    description: [
      'Designed and developed complex n8n automation workflows for clients, reducing manual tasks by 80%',
      'Integrated multiple APIs including OpenAI, Gemini, Slack, and custom webhooks for seamless data flow',
      'Built custom nodes and error-handling mechanisms for robust production-ready automations',
    ],
    icon: Brain,
  },
  {
    type: 'Internship',
    period: 'Jun 2025 – Sep 2025',
    company: 'Spotmies LLP',
    role: 'Full Stack Developer Intern',
    description: [
      'Built RESTful APIs and integrated React.js modules, improving development efficiency by 25%',
      'Deployed containerized microservices using Docker and MongoDB for 3+ internal applications',
    ],
    icon: Briefcase,
  },
  {
    type: 'Internship',
    period: 'Apr 2025 – Jun 2025',
    company: 'VISWAM.AI',
    role: 'AI Developer Intern',
    description: [
      'Developed AI chatbots and intelligent agents using LangChain, OpenAI, and Gemini APIs',
      'Fine-tuned LLM workflows for enterprise use cases, improving response accuracy by 18%',
    ],
    icon: Briefcase,
  },
  {
    type: 'Community',
    period: '2023 - Present',
    company: 'Google Developer Groups (GDG)',
    role: 'Active Member',
    description: [
      'Contributing to the developer community through knowledge sharing and organizing events',
      'Mentored junior developers and participated in community-driven development initiatives',
    ],
    icon: Users,
  },
  {
    type: 'Open Source',
    period: 'Summer 2024',
    company: 'Social Summer of Code (SSOC)',
    role: 'Contributor',
    description: [
      'Contributed to multiple open source projects, focusing on AI-integrated solutions',
      'Successfully merged 15+ pull requests and collaborated with developers worldwide',
    ],
    icon: Code,
  },
];

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering (AIML)',
    institution: 'Malla Reddy University, Hyderabad',
    period: 'Jan 2022 – Present',
    grade: 'CGPA: 9.11',
    icon: GraduationCap,
  },

];

export default function Experience() {
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
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section id="experience" className="relative bg-black py-32 overflow-hidden">
      {/* Background glow */}
      <motion.div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
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
          className="mb-16"
        >
          <motion.p
            className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium mb-4"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            Experience &
          </motion.p>
          <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
            Contributions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <h3 className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium">
              Work Experience
            </h3>

            <div className="relative space-y-8">
              {/* Timeline Line */}
              <motion.div
                className="absolute left-[19px] top-4 bottom-4 w-[2px] bg-white/10"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
                style={{ transformOrigin: 'top' }}
              />

              {experiences.map((exp, index) => (
                <motion.div
                  key={`${exp.company}-${index}`}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="relative pl-12 group"
                >
                  {/* Timeline Dot */}
                  <motion.div
                    className="absolute left-0 top-1 w-10 h-10 border border-white/20 bg-black flex items-center justify-center group-hover:border-white/50 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <exp.icon size={16} className="text-white/60 group-hover:text-white transition-colors" />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className="space-y-3 p-6 border border-white/10 hover:border-white/30 transition-all duration-300"
                    whileHover={{ borderColor: "rgba(255,255,255,0.3)" }}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-2 py-1 bg-white/10 text-white/60 text-xs uppercase tracking-[0.1em]">
                        {exp.type}
                      </span>
                      <span className="text-white/40 text-sm font-mono">
                        {exp.period}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-white text-lg font-semibold">
                        {exp.role}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {exp.company}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((desc, i) => (
                        <li key={i} className="text-white/50 text-sm leading-relaxed flex items-start gap-2">
                          <motion.span
                            className="text-white/30 mt-1.5"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                          >
                            •
                          </motion.span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            <h3 className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium">
              Education
            </h3>

            <div className="space-y-8">
              {education.map((edu) => (
                <motion.div
                  key={edu.institution}
                  variants={itemVariants}
                  whileHover={{ x: 8, borderColor: "rgba(255,255,255,0.3)" }}
                  className="p-6 border border-white/10 hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors"
                      whileHover={{ scale: 1.1 }}
                    >
                      <edu.icon size={16} className="text-white/60 group-hover:text-white transition-colors" />
                    </motion.div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="text-white/40 text-sm font-mono">
                          {edu.period}
                        </span>
                        <span className="px-2 py-1 bg-white/10 text-white/80 text-xs font-medium">
                          {edu.grade}
                        </span>
                      </div>
                      <h4 className="text-white text-lg font-semibold">
                        {edu.degree}
                      </h4>
                      <p className="text-white/60 text-sm">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium pt-8">
                Achievements
              </h3>
              <div className="space-y-4">
                <motion.div
                  className="p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <p className="text-white text-sm font-medium">100+ DSA Problems</p>
                  <p className="text-white/50 text-xs mt-1">Solved on LeetCode and GeeksforGeeks</p>
                </motion.div>
                <motion.div
                  className="p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
                  whileHover={{ x: 4 }}
                >
                  <p className="text-white text-sm font-medium">State-Level Buildathon</p>
                  <p className="text-white/50 text-xs mt-1">Selected by NxtWave (top ~1,000 from 60,000 participants)</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
