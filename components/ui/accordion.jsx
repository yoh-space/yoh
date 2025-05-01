'use client'; import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Accordion = AccordionPrimitive.Root; const AccordionItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
AccordionItem.displayName = 'AccordionItem'; const AccordionTrigger = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, children, ...props }, ref) => ( svg]:rotate-180', className )} {...props} > {children} ));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName; const AccordionContent = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, children, ...props }, ref) => ( {children} )); AccordionContent.displayName = AccordionPrimitive.Content.displayName; export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
