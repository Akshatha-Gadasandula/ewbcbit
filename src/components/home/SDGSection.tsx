import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const sdgs = [
  {
    number: 6,
    title: "Clean Water & Sanitation",
    color: "bg-[#26BDE2]",
    description: "Ensuring access to clean water and sanitation for all communities we serve.",
  },
  {
    number: 7,
    title: "Affordable & Clean Energy",
    color: "bg-[#FCC30B]",
    description: "Promoting renewable energy solutions for sustainable development.",
  },
  {
    number: 9,
    title: "Industry, Innovation & Infrastructure",
    color: "bg-[#FD6925]",
    description: "Building resilient infrastructure through innovative engineering.",
  },
  {
    number: 11,
    title: "Sustainable Cities & Communities",
    color: "bg-[#FD9D24]",
    description: "Creating inclusive, safe, and sustainable community spaces.",
  },
  {
    number: 13,
    title: "Climate Action",
    color: "bg-[#3F7E44]",
    description: "Taking urgent action to combat climate change through our projects.",
  },
  {
    number: 17,
    title: "Partnerships for the Goals",
    color: "bg-[#19486A]",
    description: "Strengthening partnerships to achieve sustainable development.",
  },
];

const SDGSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Global Goals
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Aligned with the<br />
            <span className="text-sage">UN Sustainable Development Goals</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Our initiatives directly contribute to achieving the United Nations 
            Sustainable Development Goals, creating lasting impact for generations.
          </p>
        </motion.div>

        {/* SDG Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="sdg-card group"
            >
              <div className={`${sdg.color} p-4 lg:p-5`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-3xl lg:text-4xl font-heading font-bold text-white/90">
                    {sdg.number}
                  </span>
                </div>
                <h3 className="text-white text-xs lg:text-sm font-semibold leading-tight">
                  {sdg.title}
                </h3>
              </div>
              <div className="bg-card p-4 h-0 overflow-hidden group-hover:h-auto group-hover:py-4 transition-all duration-300">
                <p className="text-foreground/80 text-xs leading-relaxed">
                  {sdg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* UN SDG Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-primary-foreground/50 text-sm">
            Committed to the 2030 Agenda for Sustainable Development
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SDGSection;
