import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import JoinDialog from "@/components/JoinDialog";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-full mb-8"
          >
            <Heart className="text-primary-foreground" size={18} />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Make a Difference
            </span>
          </motion.div>

          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Be Part of Engineering<br />
            Change That Matters
          </h2>
          
          <p className="text-primary-foreground/80 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Join a community of passionate engineers, students, and changemakers 
            dedicated to building a sustainable future for all.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <JoinDialog>
              <button
                className="inline-flex items-center justify-center gap-2 px-8 py-4 
                         bg-primary-foreground text-primary rounded-xl font-semibold
                         hover:bg-primary-foreground/90 transition-all duration-300
                         hover:shadow-elevated hover:-translate-y-0.5 group"
              >
                Join Our Chapter
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </JoinDialog>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 
                       bg-transparent border-2 border-primary-foreground/30 text-primary-foreground 
                       rounded-xl font-semibold hover:bg-primary-foreground/10 
                       hover:border-primary-foreground/50 transition-all duration-300"
            >
              Explore Our Work
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
