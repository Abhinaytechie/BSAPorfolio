import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, Clock, Github, Linkedin, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
    <section id="contact" className="relative bg-black py-32 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <motion.div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '60px 60px'
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

      {/* Glow effect */}
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-3xl"
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
            Let's
          </motion.p>
          <h2 className="text-white text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight">
            Connect
          </h2>
          <p className="text-white/50 text-base mt-4 max-w-xl">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16"
        >
          {/* Left Column - Form */}
          <motion.div variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div 
                  className="space-y-2"
                  animate={{ opacity: focusedField === 'name' ? 1 : 0.8 }}
                >
                  <label className="text-white/60 text-sm uppercase tracking-[0.1em]">
                    Name *
                  </label>
                  <motion.input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/30 
                             focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="Your name"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
                <motion.div 
                  className="space-y-2"
                  animate={{ opacity: focusedField === 'email' ? 1 : 0.8 }}
                >
                  <label className="text-white/60 text-sm uppercase tracking-[0.1em]">
                    Email *
                  </label>
                  <motion.input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/30 
                             focus:border-white focus:outline-none transition-colors duration-300"
                    placeholder="your@email.com"
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>
              </div>

              <motion.div 
                className="space-y-2"
                animate={{ opacity: focusedField === 'subject' ? 1 : 0.8 }}
              >
                <label className="text-white/60 text-sm uppercase tracking-[0.1em]">
                  Subject
                </label>
                <motion.input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/30 
                           focus:border-white focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.div 
                className="space-y-2"
                animate={{ opacity: focusedField === 'message' ? 1 : 0.8 }}
              >
                <label className="text-white/60 text-sm uppercase tracking-[0.1em]">
                  Message *
                </label>
                <motion.textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 bg-transparent border border-white/20 text-white placeholder:text-white/30 
                           focus:border-white focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                  whileFocus={{ scale: 1.01 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm uppercase tracking-[0.1em] font-medium 
                         hover:bg-white/90 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Send size={16} />
                </motion.span>
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Right Column - Info */}
          <motion.div variants={itemVariants} className="space-y-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium">
                Get In Touch
              </h3>

              <div className="space-y-4">
                <motion.a
                  href="mailto:bbsabhinaywork@gmail.com"
                  className="group flex items-center gap-4 p-4 border border-white/10 hover:border-white/30 transition-all duration-300"
                  whileHover={{ x: 8 }}
                >
                  <motion.div 
                    className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Mail size={16} className="text-white/60 group-hover:text-white transition-colors" />
                  </motion.div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[0.1em]">Email</p>
                    <p className="text-white text-sm group-hover:underline">bbsabhinaywork@gmail.com</p>
                  </div>
                  <ArrowUpRight size={16} className="ml-auto text-white/30 group-hover:text-white transition-colors" />
                </motion.a>

                <motion.div 
                  className="flex items-center gap-4 p-4 border border-white/10"
                  whileHover={{ x: 4, borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                    <MapPin size={16} className="text-white/60" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[0.1em]">Location</p>
                    <p className="text-white text-sm">Hyderabad, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  className="flex items-center gap-4 p-4 border border-white/10"
                  whileHover={{ x: 4, borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center">
                    <Clock size={16} className="text-white/60" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-[0.1em]">Response Time</p>
                    <p className="text-white text-sm">Within 24 hours</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-white/40 text-sm uppercase tracking-[0.2em] font-medium">
                Follow Me Online
              </h3>

              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/Abhinaytechie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/abhinaybondalapati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 border border-white/20 flex items-center justify-center hover:border-white hover:bg-white/5 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={20} className="text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
              </div>
            </div>

            {/* Availability */}
            <motion.div 
              className="p-6 border border-white/10"
              whileHover={{ borderColor: "rgba(255,255,255,0.2)" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.span 
                  className="w-3 h-3 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-white text-sm font-medium">Available for Projects</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                I'm currently open to freelance projects, collaborations, and full-time opportunities. 
                Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
