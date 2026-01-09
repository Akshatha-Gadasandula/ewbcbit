import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-ewb.jpg";
import JoinDialog from "@/components/JoinDialog";

const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="EWB CBIT volunteers working on community project"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full 
                           text-primary-foreground/90 text-sm font-medium mb-6 border border-primary-foreground/20">
              CBIT Student Chapter
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold 
                       text-primary-foreground leading-tight mb-6 text-shadow"
          >
            Building Sustainable<br />
            <span className="text-sage">Change, Together.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 leading-relaxed"
          >
            Empowering communities through engineering, innovation, and service. 
            We bridge the gap between technical expertise and sustainable development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="btn-hero inline-flex items-center justify-center gap-2 group"
            >
              View Our Projects
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <JoinDialog>
              <button className="btn-hero-outline inline-flex items-center justify-center">
                Join EWB CBIT
              </button>
            </JoinDialog>
          </motion.div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
