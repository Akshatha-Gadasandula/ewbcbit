import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Layout from "@/components/layout/Layout";
import { Target, Eye, Heart, Users, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We lead with empathy, understanding the real needs of communities we serve.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in the power of teamwork and community participation.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We apply creative engineering solutions to complex challenges.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our endeavors.",
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              About Us
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Engineering a Better<br />
              <span className="text-primary">Tomorrow</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Engineers Without Borders - CBIT Student Chapter is a student-led organization 
              dedicated to improving lives through sustainable engineering projects in 
              underserved communities across India.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section ref={ref} className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="card-elevated p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="text-primary" size={28} />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                To develop future engineering leaders who are socially conscious, 
                globally aware, and equipped to create sustainable solutions for 
                communities in need. We bridge the gap between engineering education 
                and real-world impact through hands-on projects and community engagement.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card-elevated p-8 lg:p-10"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="text-primary" size={28} />
              </div>
              <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Our Vision
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A world where every community has access to essential infrastructure, 
                clean water, renewable energy, and the engineering expertise needed 
                for sustainable development. We envision student engineers as catalysts 
                for positive social change across India and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground italic leading-relaxed mb-6">
              "Engineering is not just about building structures, but building lives."
            </p>
            <cite className="text-primary-foreground/70 text-sm uppercase tracking-widest not-italic">
              — EWB CBIT Philosophy
            </cite>
          </motion.blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Our Foundation
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Core Values That Guide Us
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              These principles define who we are and how we approach every project, 
              partnership, and community interaction.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated p-6 lg:p-8 text-center group"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5
                              group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <value.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={26} />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-24 lg:py-32 section-gradient">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                A Journey of Impact
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="prose prose-lg max-w-none text-muted-foreground"
            >
              <p className="leading-relaxed mb-6">
                Founded at Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad, 
                our student chapter has grown from a small group of passionate engineering 
                students into a dynamic force for sustainable development.
              </p>
              <p className="leading-relaxed mb-6">
                Since our inception, we have partnered with local communities, NGOs, 
                and government bodies to implement projects that address critical 
                infrastructure challenges. From installing solar panels in remote villages 
                to building water purification systems, each project has been a learning 
                experience and a step toward our vision.
              </p>
              <p className="leading-relaxed">
                Today, we continue to expand our reach, mentoring the next generation 
                of socially conscious engineers and building lasting partnerships for 
                sustainable development across Telangana and beyond.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
