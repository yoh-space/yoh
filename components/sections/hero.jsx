"use client";

import { Button } from "@/components/ui/button";
import { SocialIcons } from "@/components/ui/social-icons";
import { ThreeJSBackground } from "@/components/ui/threejs-background";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Hero section component for the landing page
 * @returns {JSX.Element} Hero section with profile image and introduction
 */
export function HeroSection() {
  const [currentTagline, setCurrentTagline] = useState(0);
  const { theme } = useTheme();
  const taglines = [
    "Mobile App Developer",
    "React Native Expert",
    "Software Engineer"
  ];

  // Rotate through taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden max-w-full">
      {/* 3D Animated Background */}
      <ThreeJSBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80 z-[1]" />
      
      <div className="container mx-auto px-4 relative z-10 w-full max-w-full">
        <div className="flex flex-col md:flex-row items-center">
          {/* Profile Image with Holographic Effect */}
          <motion.div 
            className="md:w-1/2 order-2 md:order-1 mb-12 md:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 animate-pulse blur-xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/50 p-1">
                <img 
                  src="/assets/porti.png" 
                  alt="Yohannes Damtie" 
                  className="w-full h-full object-cover rounded-full"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/10 to-secondary/20 rounded-full" />
              </div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 animate-pulse" />
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className="md:w-1/2 order-1 md:order-2 max-w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">Yohannes Damtie</span>
            </motion.h1>
            
            <motion.div
              className="h-12 mb-4 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div 
                className="transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateY(-${currentTagline * 100}%)` }}
              >
                {taglines.map((tagline, index) => (
                  <p 
                    key={index} 
                    className="text-xl md:text-2xl font-medium text-primary h-12 flex items-center"
                  >
                    {tagline}
                  </p>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="backdrop-blur-md bg-card/20 border border-border rounded-xl p-6 shadow-xl max-w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-lg text-muted-foreground break-words">
                I am a passionate full stack developer crafting powerful mobile & web solutions
                from top rated student apps to high impact business platforms. <br />
                <strong className="text-primary">Always building. Always evolving.</strong>
              </p>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4 mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:opacity-90 transition-opacity">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/10">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6"
            >
              <SocialIcons iconClassName="w-5 h-5 text-primary hover:text-secondary" />
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-full mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-1">
            <motion.div 
              className="w-1.5 h-1.5 bg-primary rounded-full"
              animate={{ 
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
          <p className="text-primary text-sm mt-2">Scroll Down</p>
        </motion.div>
      </div>
    </section>
  );
} 