import { motion } from "framer-motion";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { X } from "lucide-react";
import heroImage from "@/assets/hero-ewb.jpg";
import focusWater from "@/assets/focus-water.jpg";
import focusEnergy from "@/assets/focus-energy.jpg";
import focusInfrastructure from "@/assets/focus-infrastructure.jpg";
import focusCommunity from "@/assets/focus-community.jpg";

const galleryImages = [
  { src: heroImage, caption: "Community Water Project - Rangareddy", category: "Projects" },
  { src: focusWater, caption: "Clean Water Initiative", category: "Water" },
  { src: focusEnergy, caption: "Solar Panel Installation", category: "Energy" },
  { src: focusInfrastructure, caption: "Bridge Construction", category: "Infrastructure" },
  { src: focusCommunity, caption: "Community Development Workshop", category: "Education" },
  { src: heroImage, caption: "Team Building Activity", category: "Events" },
  { src: focusEnergy, caption: "Renewable Energy Project", category: "Energy" },
  { src: focusWater, caption: "Hand Pump Installation", category: "Water" },
  { src: focusCommunity, caption: "STEM Outreach Program", category: "Education" },
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
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="inline-block px-2 py-0.5 bg-primary/80 text-primary-foreground text-xs font-medium rounded mb-2">
                      {image.category}
                    </span>
                    <p className="text-primary-foreground text-sm font-medium">
                      {image.caption}
                    </p>
                  </div>
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
              src={selectedImage.src}
              alt={selectedImage.caption}
              className="max-w-full max-h-[80vh] rounded-2xl object-contain"
            />
            <div className="mt-4 text-center">
              <span className="inline-block px-3 py-1 bg-primary/80 text-primary-foreground text-xs font-medium rounded mb-2">
                {selectedImage.category}
              </span>
              <p className="text-primary-foreground text-lg font-medium">
                {selectedImage.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </Layout>
  );
};

export default Gallery;
