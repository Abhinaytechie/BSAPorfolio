import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <p className="text-white font-bold text-xl tracking-tight mb-2">BSA</p>
            <p className="text-white/40 text-sm">
              AI-integrated full-stack developer
            </p>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-white/40 text-sm">
            <span>Built with</span>
            <span className="text-white">React</span>
            <span>+</span>
            <span className="text-white">Tailwind</span>
            <span>+</span>
            <span className="text-white">Framer Motion</span>
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -4 }}
            className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
          >
            <span className="text-sm uppercase tracking-[0.1em]">Back to Top</span>
            <div className="w-8 h-8 border border-white/20 flex items-center justify-center group-hover:border-white/50 transition-colors">
              <ArrowUp size={14} />
            </div>
          </motion.button>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/30 text-sm">
            © 2025 Bondalapati BSA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
