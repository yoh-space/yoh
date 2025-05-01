"use client";

import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 max-w-4xl"> {/* Reduced max width */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Expertise & Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered and tools I work with daily
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <Tabs defaultValue={skillsData[0].category} className="w-full">
            <TabsList className="w-full max-w-xl mx-auto grid grid-cols-3 h-14 bg-muted/50 backdrop-blur-sm border border-border/50 rounded-xl">
              {skillsData.map((category) => (
                <TabsTrigger 
                  key={category.category} 
                  value={category.category}
                  className="rounded-lg data-[state=active]:bg-primary/10 data-[state=active]:text-primary data-[state=active]:shadow-sm"
                >
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <div className="mt-12">
              <AnimatePresence mode="wait">
                {skillsData.map((category) => (
                  <TabsContent key={category.category} value={category.category}>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="grid grid-cols-2 gap-4" // Changed to 2 columns
                    >
                      {category.skills.map((skill, index) => {
                        const [isHovered, setIsHovered] = useState(false);
                        const Icon = skill.icon;
                        
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            whileHover={{ y: -5 }}
                            className="h-full"
                            onHoverStart={() => setIsHovered(true)}
                            onHoverEnd={() => setIsHovered(false)}
                          >
                            <Card className="h-full bg-background/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all group">
                              <CardHeader className="pb-3">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <Icon className="w-6 h-6 text-primary" />
                                    <CardTitle className="text-lg font-medium">
                                      {skill.name}
                                    </CardTitle>
                                  </div>
                                  <motion.div
                                    animate={{
                                      opacity: isHovered ? 1 : 0,
                                      x: isHovered ? 0 : 5
                                    }}
                                    transition={{ duration: 0.2 }}
                                    className="text-primary"
                                  >
                                    <FiArrowUpRight />
                                  </motion.div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <div className="flex justify-between text-sm text-muted-foreground">
                                    <span>Proficiency</span>
                                    <span className="font-medium text-primary">
                                      {skill.level}%
                                    </span>
                                  </div>
                                  <Progress 
                                    value={skill.level} 
                                    className="h-2 group-hover:h-[6px] transition-all"
                                    indicatorClassName="bg-gradient-to-r from-primary to-purple-500"
                                  />
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  </TabsContent>
                ))}
              </AnimatePresence>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}