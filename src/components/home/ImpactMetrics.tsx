import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const metrics = [
  { value: 25, suffix: "+", label: "Communities Served" },
  { value: 500, suffix: "+", label: "Students Involved" },
  { value: 40, suffix: "+", label: "Projects Completed" },
  { value: 15, suffix: "+", label: "Outreach Programs" },
];

const Counter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= steps) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(increment * currentStep));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, inView]);

  return (
    <span className="stat-number">
      {count}
      {suffix}
    </span>
  );
};

const ImpactMetrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 lg:py-32 section-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Our Impact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Measurable Change,<br />
            <span className="text-primary">Meaningful Impact</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Every number represents lives touched, communities uplifted, 
            and futures transformed through sustainable engineering.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="card-elevated p-8 lg:p-10">
                <Counter target={metric.value} suffix={metric.suffix} inView={isInView} />
                <p className="stat-label">{metric.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactMetrics;
