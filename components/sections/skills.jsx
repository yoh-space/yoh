"use client";

import { skillsData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import PropTypes from 'prop-types';

/**
 * Skills section component
 * @returns {JSX.Element} Skills section with tabs
 */
export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(skillsData[0].category);
  
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Expertise Technical Skills
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Technologies I've mastered and tools I work with daily
        </motion.p>
        
        {/* Category Tabs - Simple button implementation */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 w-full mb-10">
          {skillsData.map((category) => (
            <button 
              key={category.category}
              onClick={() => setActiveCategory(category.category)}
              className={`text-sm py-2 px-3 rounded-md transition-colors ${
                activeCategory === category.category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.category}
            </button>
          ))}
        </div>
        
        {/* Skills Content */}
        {skillsData.map((category) => (
          category.category === activeCategory && (
            <motion.div
              key={category.category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    skill={skill} 
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          )
        ))}
      </div>
    </section>
  );
}

/**
 * Individual skill card component
 * @param {Object} props - Component props
 * @param {Object} props.skill - Skill data
 * @param {number} props.index - Index for animation delay
 * @returns {JSX.Element} Skill card
 */
function SkillCard({ skill, index }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = skill.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardHeader className="p-4 pb-2">
          <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="flex justify-between items-center"
          >
            <div className="flex items-center gap-3">
              <Icon className="h-6 w-6 text-primary" />
              <CardTitle className="text-lg">{skill.name}</CardTitle>
            </div>
            <FiArrowUpRight 
              className={`h-5 w-5 transition-transform duration-300 ${
                isHovered ? 'rotate-45 text-primary' : 'text-muted-foreground'
              }`} 
            />
          </motion.div>
        </CardHeader>
        <CardContent className="p-4 pt-2">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Proficiency</span>
              <span className="text-sm font-medium">{skill.level}%</span>
            </div>
            {/* Simple progress bar implementation instead of using Progress component */}
            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary transition-all" 
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

SkillCard.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    level: PropTypes.number.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
};