import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

// Import project images
import aiWorkshopImg from "@/assets/projects/ai-workshop.png";
import educationDayImg from "@/assets/projects/education-day.png";
import bookDonationImg from "@/assets/projects/book-donation.png";
import vaidehiAshramImg from "@/assets/projects/vaidehi-ashram.png";
import cancerAwarenessImg from "@/assets/projects/cancer-awareness.png";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  date?: string;
  location?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI and Academics Workshop",
    description: "EWB CBIT successfully conducted a student-friendly workshop on AI & Academics at Government High School, Gandhi Bhavan. The day concluded with an engaging quiz and a memorable prize distribution ceremony, inspiring students towards a future of learning and technology.",
    image: aiWorkshopImg,
    location: "Government High School, Gandhi Bhavan",
  },
  {
    id: 2,
    title: "International Education Day",
    description: "Our mission to assess the effectiveness of EWB India's E-Learning Centers led us to Red Cross Government High School and Kasturba Gandhi Balika Vidyalaya.",
    image: educationDayImg,
    location: "Red Cross Government High School & KGBV",
  },
  {
    id: 3,
    title: "Book Donation Drive",
    description: "The Book Donation Drive was conducted to promote education and knowledge sharing. EWB members collected books from college students and donated them to schools and community centers, helping extend learning opportunities beyond classrooms.",
    image: bookDonationImg,
    date: "3rd - 8th September 2024",
  },
  {
    id: 4,
    title: "Visit to Vaidehi Ashram",
    description: "EWB CBIT visited Vaidehi Ashram in Saidabad on 13th January 2023. We distributed blankets and daily necessities to the children and judged a rangoli competition held that day.",
    image: vaidehiAshramImg,
    date: "13th January 2023",
    location: "Vaidehi Ashram, Saidabad",
  },
  {
    id: 5,
    title: "National Cancer Awareness Day - Movie Screening",
    description: "On 7/02/2022, on account of National Cancer Awareness Day movie screening event was conducted by EWB-CBIT team. Movies like Dil Bechara and Geetanjali were screened for students to bring awareness about cancer. Ticket proceeds were donated to MNJ Hospital. Many staff and students supported the cause.",
    image: cancerAwarenessImg,
    date: "7th February 2022",
    location: "CBIT Campus",
  },
];

const Projects = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our initiatives that create lasting impact in communities through education, awareness, and social service.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-border"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 mb-4 text-sm text-muted-foreground">
                    {project.date && (
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    )}
                    {project.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span className="line-clamp-1">{project.location}</span>
                      </div>
                    )}
                  </div>

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
