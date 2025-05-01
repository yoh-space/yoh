"use client";

import Image from "next/image";
import { aboutData } from "@/lib/data";
import { motion } from "framer-motion";

/**
 * About section component displaying bio and profile image
 * @returns {JSX.Element} About section component
 */
export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative aspect-square w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={"../../public/image.png"}
              alt="Yohannes Damtie"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              {aboutData.title}
            </h3>
            
            <div className="space-y-4">
              {aboutData.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-8 flex gap-4">
              <a 
                href="#contact"
                className="text-primary font-medium hover:underline"
              >
                Get in touch
              </a>
              <a 
                href="#projects"
                className="text-primary font-medium hover:underline"
              >
                See my work
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 