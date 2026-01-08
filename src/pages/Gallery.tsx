import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import celebration from "@/assets/gallery/celebration.png";
import classroomOutreach from "@/assets/gallery/classroom-outreach.jpg";
import schoolActivity from "@/assets/gallery/school-activity.png";
import childrensAid from "@/assets/gallery/childrens-aid.png";
import communityVisit from "@/assets/gallery/community-visit.png";
import ashramVisit from "@/assets/gallery/ashram-visit.png";
import schoolProgram from "@/assets/gallery/school-program.png";
import teamPhoto from "@/assets/gallery/team-photo.png";

const galleryImages = [
  celebration,
  classroomOutreach,
  schoolActivity,
  childrensAid,
  communityVisit,
  ashramVisit,
  schoolProgram,
  teamPhoto,
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

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
              Visual Stories
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
              A visual journey through our projects, events, and the communities 
              we've had the privilege to serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={image}
                    alt="Gallery image"
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center
                     text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="max-w-5xl max-h-[85vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
