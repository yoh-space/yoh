"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactData } from "@/lib/data";
import { SocialIcons } from "@/components/ui/social-icons";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import PropTypes from 'prop-types';

/**
 * Form validation schema
 */
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters."
  }),
  email: z.string().email({
    message: "Please enter a valid email address."
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters."
  })
});

/**
 * Contact section component with contact form
 * @returns {JSX.Element} Contact section
 */
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  /**
   * Handle form submission
   * @param {Object} data - Form data
   */
  function onSubmit(data) {
    setIsSubmitting(true);
    
    // Simulate form submission - replace with actual EmailJS code
    setTimeout(() => {
      console.log(data);
      reset();
      setIsSubmitting(false);
      toast.success("Message sent successfully!", {
        description: "I'll get back to you as soon as possible."
      });
    }, 1500);
  }

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {contactData.description}
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-sm p-6 rounded-xl shadow-md border border-border"
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-sm font-medium text-destructive">
                    {errors.name.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  placeholder="Your email"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm font-medium text-destructive">
                    {errors.email.message}
                  </p>
                )}
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  className="min-h-32"
                  {...register('message')}
                />
                {errors.message && (
                  <p className="text-sm font-medium text-destructive">
                    {errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <Mail className="text-primary h-5 w-5" />
                  <span>Email: {contactData.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-primary h-5 w-5" />
                  <span>Phone: {contactData.phone}</span>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <SocialIcons 
                  className="flex gap-4" 
                  iconClassName="w-6 h-6 text-primary hover:text-secondary transition-colors" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}