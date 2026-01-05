import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Droplets, Sun, Building2, Users, ArrowUpRight } from "lucide-react";
import focusWater from "@/assets/focus-water.jpg";
import focusEnergy from "@/assets/focus-energy.jpg";
import focusInfrastructure from "@/assets/focus-infrastructure.jpg";
import focusCommunity from "@/assets/focus-community.jpg";

const focusAreas = [
  {
    title: "Clean Water & Sanitation",
    description: "Providing access to safe drinking water and improving sanitation facilities in underserved communities.",
    icon: Droplets,
    image: focusWater,
    color: "from-blue-600/80",
  },
  {
    title: "Renewable Energy",
    description: "Implementing solar and sustainable energy solutions for rural electrification and green power.",
    icon: Sun,
    image: focusEnergy,
    color: "from-amber-600/80",
  },
  {
    title: "Sustainable Infrastructure",
    description: "Building bridges, roads, and community structures that withstand time and serve generations.",
    icon: Building2,
    image: focusInfrastructure,
    color: "from-stone-600/80",
  },
  {
    title: "Community Development",
    description: "Empowering local communities through education, training, and participatory development programs.",
    icon: Users,
    image: focusCommunity,
    color: "from-emerald-600/80",
  },
];

const FocusAreas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Our Focus
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Engineering Solutions for<br />
            <span className="text-primary">Sustainable Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            We channel our engineering expertise into four key areas that address 
            critical challenges facing rural and underserved communities across India.
          </p>
        </motion.div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to="/projects"
                className="group focus-card block h-80 lg:h-96"
              >
                <img
                  src={area.image}
                  alt={area.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${area.color} via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-primary/90 flex items-center justify-center mb-4
                                    transform group-hover:scale-110 transition-transform duration-300">
                        <area.icon className="text-primary-foreground" size={24} />
                      </div>
                      <h3 className="font-heading text-xl lg:text-2xl font-semibold text-primary-foreground mb-2">
                        {area.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm lg:text-base leading-relaxed 
                                  max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500">
                        {area.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center
                                  opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0
                                  transition-all duration-300">
                      <ArrowUpRight className="text-primary-foreground" size={18} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
