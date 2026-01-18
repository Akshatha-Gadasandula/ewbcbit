import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { MapPin, Calendar, ArrowUpRight, Users, Target, Grid3X3, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Import project images
import rainwaterHarvesting from "@/assets/projects/rainwater-harvesting.jpg";
import sewageTreatment from "@/assets/projects/sewage-treatment.jpg";
import eLearningCenter from "@/assets/projects/e-learning-center.jpg";
import solarElectrification from "@/assets/projects/solar-electrification.jpg";
import bioCompost from "@/assets/projects/bio-compost.jpg";
import paperRecycling from "@/assets/projects/paper-recycling.jpg";
import careerGuidance from "@/assets/projects/career-guidance.jpg";
import keralaRelief from "@/assets/projects/kerala-relief.jpg";
import mathemagicians from "@/assets/projects/mathemagicians.jpg";
import aimConference from "@/assets/projects/aim-conference.jpg";
import sampurnaApp from "@/assets/projects/sampurna-app.jpg";
import eAnkuram from "@/assets/projects/e-ankuram.jpg";
import clothBags from "@/assets/projects/cloth-bags.jpg";
import mathemagicians2019 from "@/assets/projects/mathemagicians-2019.jpg";

const categories = ["All", "Engineering", "Education", "Community", "Environment"];

interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  date: string;
  year: number;
  description: string;
  images: string[];
  status: "Completed" | "Ongoing";
  impact?: string;
  beneficiaries?: string;
  sdgs?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Rainwater Harvesting System",
    category: "Engineering",
    location: "Hyderabad, Telangana",
    date: "24 Dec 2016",
    year: 2016,
    description: "Implemented rainwater harvesting systems to address water scarcity and promote sustainable water management in schools and community centers.",
    images: [rainwaterHarvesting],
    status: "Completed",
    impact: "Sustainable water source established",
    beneficiaries: "5+ Schools",
    sdgs: ["SDG 6", "SDG 11"],
  },
  {
    id: 2,
    title: "Sewage Water Treatment",
    category: "Engineering",
    location: "Telangana",
    date: "05 Aug 2016",
    year: 2016,
    description: "Designed and implemented sewage water treatment solutions to improve sanitation and protect water resources in underserved communities.",
    images: [sewageTreatment],
    status: "Completed",
    impact: "Clean water access improved",
    beneficiaries: "Local Community",
    sdgs: ["SDG 6", "SDG 3"],
  },
  {
    id: 3,
    title: "E-Learning Centers",
    category: "Education",
    location: "Rural Telangana",
    date: "25 Sep 2016",
    year: 2016,
    description: "Established e-learning centers in government schools to bridge the digital divide and provide quality education resources to students.",
    images: [eLearningCenter],
    status: "Completed",
    impact: "Digital education enabled",
    beneficiaries: "300+ Students",
    sdgs: ["SDG 4", "SDG 10"],
  },
  {
    id: 4,
    title: "Solar Electrification Project",
    category: "Engineering",
    location: "Rural Villages, Telangana",
    date: "16 Jan 2017",
    year: 2017,
    description: "Deployed solar panels and battery systems in remote villages and schools, enabling evening classes, digital learning, and improved quality of life.",
    images: [solarElectrification],
    status: "Completed",
    impact: "Sustainable power for 10+ locations",
    beneficiaries: "Multiple Villages",
    sdgs: ["SDG 7", "SDG 11"],
  },
  {
    id: 5,
    title: "Bio-Compost Fertilizer Initiative",
    category: "Environment",
    location: "Hyderabad Region",
    date: "29 Mar 2018",
    year: 2018,
    description: "Trained farmers and communities on bio-compost fertilizer production, promoting organic farming and reducing chemical dependency.",
    images: [bioCompost],
    status: "Completed",
    impact: "Organic farming promoted",
    beneficiaries: "Local Farmers",
    sdgs: ["SDG 2", "SDG 12"],
  },
  {
    id: 6,
    title: "Paper Recycling Mission",
    category: "Environment",
    location: "CBIT Campus & Surroundings",
    date: "03 May 2018",
    year: 2018,
    description: "Launched paper recycling initiative to reduce waste and promote environmental consciousness among students and communities.",
    images: [paperRecycling],
    status: "Completed",
    impact: "Waste reduction achieved",
    beneficiaries: "Campus Community",
    sdgs: ["SDG 12", "SDG 13"],
  },
  {
    id: 7,
    title: "Career Guidance Sessions",
    category: "Education",
    location: "Rajendra Nagar Mandal",
    date: "18 Aug 2018",
    year: 2018,
    description: "Conducted career guidance sessions for higher secondary students in government schools across Kismatpur, Manikonda, Hydershakote, and Khanapur.",
    images: [careerGuidance],
    status: "Completed",
    impact: "Career awareness created",
    beneficiaries: "200+ Students",
    sdgs: ["SDG 4", "SDG 8"],
  },
  {
    id: 8,
    title: "Kerala Flood Relief Drive",
    category: "Community",
    location: "CBIT Campus for Kerala",
    date: "20-21 Aug 2018",
    year: 2018,
    description: "Organized flood donation camp collecting clothes, preservable foods, footwear, and monetary donations for Kerala flood victims affected by the devastating 2018 floods.",
    images: [keralaRelief],
    status: "Completed",
    impact: "Relief materials delivered",
    beneficiaries: "Flood Victims",
    sdgs: ["SDG 1", "SDG 11"],
  },
  {
    id: 9,
    title: "Mathemagicians 2018",
    category: "Education",
    location: "Government Schools, Hyderabad",
    date: "22 Dec 2018",
    year: 2018,
    description: "Celebrated National Mathematics Day with quiz competitions and fun rounds for students from classes 6-10 in government schools. Prizes distributed to winners.",
    images: [mathemagicians],
    status: "Completed",
    impact: "Math awareness promoted",
    beneficiaries: "200+ Students",
    sdgs: ["SDG 4"],
  },
  {
    id: 10,
    title: "AIM 2019 - All India Chapters Meet",
    category: "Community",
    location: "Chennai",
    date: "14-15 Dec 2018",
    year: 2018,
    description: "Team of 33 EWBians participated in the 7th All India Chapters Meet. Presented 'Solar Insect Trapper' project to EWB-India leadership.",
    images: [aimConference],
    status: "Completed",
    impact: "National recognition achieved",
    beneficiaries: "EWB Network",
    sdgs: ["SDG 17"],
  },
  {
    id: 11,
    title: "Sampurna e-Vidya App",
    category: "Education",
    location: "Telangana",
    date: "27 Dec 2018",
    year: 2018,
    description: "Developed and deployed educational mobile application to provide digital learning resources to students in rural areas.",
    images: [sampurnaApp],
    status: "Completed",
    impact: "Digital learning enabled",
    beneficiaries: "Rural Students",
    sdgs: ["SDG 4", "SDG 9"],
  },
  {
    id: 12,
    title: "E-Ankuram Digital Learning",
    category: "Education",
    location: "Hyderabad",
    date: "29 Dec 2018 - 5 Jan 2019",
    year: 2019,
    description: "Associated with EWB Hyderabad Professional Chapter to conduct e-Ankuram, a learning through digitalization program organized by EWB-India.",
    images: [eAnkuram],
    status: "Completed",
    impact: "Digital literacy improved",
    beneficiaries: "Students & Teachers",
    sdgs: ["SDG 4"],
  },
  {
    id: 13,
    title: "Cloth Bag Distribution",
    category: "Environment",
    location: "CBIT Campus",
    date: "18-19 Dec 2019",
    year: 2019,
    description: "Collaborated with Nirman Organization to collect old clothes and convert them into eco-friendly bags. Distributed 150+ bags to staff, students, and lab technicians.",
    images: [clothBags],
    status: "Completed",
    impact: "150+ plastic bags replaced",
    beneficiaries: "Campus Community",
    sdgs: ["SDG 12", "SDG 13"],
  },
  {
    id: 14,
    title: "Mathemagicians 2019",
    category: "Education",
    location: "8 Government Schools, Hyderabad",
    date: "22 Dec 2019",
    year: 2019,
    description: "Conducted quiz, elocution, and essay writing competitions for 6th to 9th class students across 8 government schools on National Mathematics Day.",
    images: [mathemagicians2019],
    status: "Completed",
    impact: "250+ students participated",
    beneficiaries: "250+ Students",
    sdgs: ["SDG 4"],
  },
];

type ViewMode = "grid" | "timeline";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const sortedProjects = [...filteredProjects].sort((a, b) => b.year - a.year);
  
  // Group projects by year for timeline view
  const projectsByYear = sortedProjects.reduce((acc, project) => {
    if (!acc[project.year]) {
      acc[project.year] = [];
    }
    acc[project.year].push(project);
    return acc;
  }, {} as Record<number, Project[]>);

  const years = Object.keys(projectsByYear).map(Number).sort((a, b) => b - a);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 section-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-forest rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
              Our Impact Journey
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Projects & <span className="text-primary">Initiatives</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto mb-8">
              Since 2016, we've been transforming communities through sustainable 
              engineering solutions, education, and grassroots initiatives.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { value: "14+", label: "Projects" },
                { value: "2000+", label: "Lives Impacted" },
                { value: "8+", label: "Schools Reached" },
                { value: "6", label: "Years Active" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter & View Toggle */}
      <section className="py-8 bg-background border-b border-border sticky top-16 z-40 backdrop-blur-md bg-background/95">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Category Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </motion.div>

            {/* View Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2 bg-secondary rounded-full p-1"
            >
              <button
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  viewMode === "grid"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Grid3X3 size={16} />
                Grid
              </button>
              <button
                onClick={() => setViewMode("timeline")}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  viewMode === "timeline"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Clock size={16} />
                Timeline
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Display */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <AnimatePresence mode="wait">
            {viewMode === "grid" ? (
              /* Grid View */
              <motion.div
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {sortedProjects.map((project, index) => (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    onClick={() => setSelectedProject(project)}
                    className="card-elevated overflow-hidden group cursor-pointer"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 left-4">
                        <Badge variant={project.status === "Ongoing" ? "destructive" : "default"} className="shadow-lg">
                          {project.status}
                        </Badge>
                      </div>
                      
                      {/* Image Count */}
                      {project.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                          +{project.images.length - 1} more
                        </div>
                      )}
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                          <ArrowUpRight className="text-primary" size={20} />
                        </div>
                      </div>
                      
                      {/* Bottom Info */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-4 text-white/90 text-xs">
                          <span className="flex items-center gap-1">
                            <Calendar size={12} />
                            {project.year}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={12} />
                            {project.location.split(",")[0]}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-3">
                        {project.category}
                      </Badge>
                      
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>
                      
                      {/* Impact & Beneficiaries */}
                      <div className="flex items-center gap-4 text-xs">
                        {project.beneficiaries && (
                          <span className="flex items-center gap-1 text-primary">
                            <Users size={12} />
                            {project.beneficiaries}
                          </span>
                        )}
                        {project.impact && (
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Target size={12} />
                            {project.impact.split(" ").slice(0, 2).join(" ")}...
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              /* Timeline View */
              <motion.div
                key="timeline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 transform md:-translate-x-1/2" />
                
                {years.map((year, yearIndex) => (
                  <div key={year} className="mb-16">
                    {/* Year Marker */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                      className="relative flex items-center justify-center mb-8"
                    >
                      <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-1/2 ring-4 ring-background shadow-lg shadow-primary/25" />
                      <div className="ml-12 md:ml-0 bg-primary text-primary-foreground px-6 py-2 rounded-full font-heading font-bold text-lg shadow-lg">
                        {year}
                      </div>
                    </motion.div>
                    
                    {/* Projects for this year */}
                    <div className="space-y-8 ml-12 md:ml-0">
                      {projectsByYear[year].map((project, projectIndex) => (
                        <motion.div
                          key={project.id}
                          initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -50 : 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: yearIndex * 0.1 + projectIndex * 0.05 }}
                          onClick={() => setSelectedProject(project)}
                          className={`relative md:w-[calc(50%-3rem)] cursor-pointer ${
                            projectIndex % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                          }`}
                        >
                          {/* Connection Line */}
                          <div className={`hidden md:block absolute top-8 w-8 h-0.5 bg-primary/30 ${
                            projectIndex % 2 === 0 ? "right-0" : "left-0"
                          }`} />
                          
                          <div className="card-elevated overflow-hidden group hover:shadow-xl transition-all duration-300">
                            <div className="flex flex-col sm:flex-row">
                              <div className="sm:w-1/3 h-40 sm:h-auto overflow-hidden">
                                <img
                                  src={project.images[0]}
                                  alt={project.title}
                                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                              <div className="sm:w-2/3 p-5">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary" className="text-xs">
                                    {project.category}
                                  </Badge>
                                  <Badge variant={project.status === "Ongoing" ? "destructive" : "outline"} className="text-xs">
                                    {project.status}
                                  </Badge>
                                </div>
                                
                                <h3 className="font-heading text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                  {project.title}
                                </h3>
                                
                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 mb-3">
                                  {project.description}
                                </p>
                                
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar size={10} />
                                    {project.date}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <MapPin size={10} />
                                    {project.location.split(",")[0]}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{selectedProject.category}</Badge>
                  <Badge variant={selectedProject.status === "Ongoing" ? "destructive" : "default"}>
                    {selectedProject.status}
                  </Badge>
                </div>
                <DialogTitle className="font-heading text-2xl">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              
              {/* Image Carousel */}
              <div className="relative my-4">
                {selectedProject.images.length > 1 ? (
                  <Carousel className="w-full">
                    <CarouselContent>
                      {selectedProject.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <img
                              src={image}
                              alt={`${selectedProject.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                ) : (
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
              
              {/* Project Details */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {selectedProject.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {selectedProject.location}
                  </span>
                </div>
                
                <p className="text-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
                
                {/* Impact Grid */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {selectedProject.beneficiaries && (
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Users size={16} />
                        <span className="text-xs font-medium uppercase tracking-wide">Beneficiaries</span>
                      </div>
                      <div className="font-heading font-semibold">{selectedProject.beneficiaries}</div>
                    </div>
                  )}
                  {selectedProject.impact && (
                    <div className="bg-secondary/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Target size={16} />
                        <span className="text-xs font-medium uppercase tracking-wide">Impact</span>
                      </div>
                      <div className="font-heading font-semibold">{selectedProject.impact}</div>
                    </div>
                  )}
                </div>
                
                {/* SDGs */}
                {selectedProject.sdgs && selectedProject.sdgs.length > 0 && (
                  <div className="mt-4">
                    <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground mb-2">
                      SDG Alignment
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.sdgs.map((sdg) => (
                        <Badge key={sdg} variant="outline" className="text-primary border-primary/30">
                          {sdg}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default Projects;
