import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import focusWater from "@/assets/focus-water.jpg";
import focusEnergy from "@/assets/focus-energy.jpg";
import focusInfrastructure from "@/assets/focus-infrastructure.jpg";
import focusCommunity from "@/assets/focus-community.jpg";

const categories = ["All", "Water", "Energy", "Infrastructure", "Education"];

const projects = [
  {
    id: 1,
    title: "Clean Water Initiative - Rangareddy",
    category: "Water",
    location: "Rangareddy District, Telangana",
    date: "2024",
    description: "Installed hand pumps and water purification systems in 5 villages, providing clean drinking water access to over 2,000 residents.",
    image: focusWater,
    status: "Completed",
  },
  {
    id: 2,
    title: "Solar Electrification Project",
    category: "Energy",
    location: "Medak District, Telangana",
    date: "2024",
    description: "Deployed solar panels and battery systems in a remote village school, enabling evening classes and digital learning.",
    image: focusEnergy,
    status: "Completed",
  },
  {
    id: 3,
    title: "Footbridge Construction",
    category: "Infrastructure",
    location: "Adilabad District, Telangana",
    date: "2023",
    description: "Designed and built a 30-meter pedestrian bridge connecting two villages, reducing travel time by 45 minutes.",
    image: focusInfrastructure,
    status: "Completed",
  },
  {
    id: 4,
    title: "STEM Education Outreach",
    category: "Education",
    location: "Multiple Schools, Hyderabad",
    date: "2024",
    description: "Conducted hands-on STEM workshops for 500+ students in government schools, inspiring future engineers.",
    image: focusCommunity,
    status: "Ongoing",
  },
  {
    id: 5,
    title: "Rainwater Harvesting System",
    category: "Water",
    location: "Nalgonda District, Telangana",
    date: "2023",
    description: "Implemented rainwater harvesting systems in 3 schools, addressing water scarcity during summer months.",
    image: focusWater,
    status: "Completed",
  },
  {
    id: 6,
    title: "Community Center Solar Setup",
    category: "Energy",
    location: "Warangal District, Telangana",
    date: "2023",
    description: "Installed solar-powered lighting and charging stations at a rural community center serving 10 villages.",
    image: focusEnergy,
    status: "Completed",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

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
              Our Work
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Projects & <span className="text-primary">Initiatives</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              Explore our sustainable engineering projects that are making 
              a tangible difference in communities across Telangana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12 lg:mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Ongoing"
                        ? "bg-terracotta text-white"
                        : "bg-primary text-primary-foreground"
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/90 flex items-center justify-center
                                opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0
                                transition-all duration-300">
                    <ArrowUpRight className="text-primary" size={18} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-muted-foreground text-xs mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} />
                      {project.location.split(",")[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {project.date}
                    </span>
                  </div>
                  
                  <span className="inline-block px-2 py-0.5 bg-secondary text-secondary-foreground text-xs font-medium rounded mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
