"use client";

import Image from "next/image";
import { projectsData } from "@/lib/data";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import PropTypes from 'prop-types';

/**
 * Projects section component
 * @returns {JSX.Element} Projects section
 */
export function ProjectsSection() {
  return (
    <section id="projects-container" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * Individual project card component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data
 * @returns {JSX.Element} Project card
 */
function ProjectCard({ project }) {
  return (
    <div className="overflow-hidden group h-full flex flex-col hover:shadow-md transition-shadow duration-300 rounded-lg border bg-card text-card-foreground">
      {/* Project Image */}
      <div className="aspect-video relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Project Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{project.description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag} 
              className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground"
          >
            <Github className="mr-2 h-4 w-4" /> Code
          </a>
          <a 
            href={project.demoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> Demo
          </a>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    demoUrl: PropTypes.string.isRequired,
    githubUrl: PropTypes.string.isRequired
  }).isRequired
};