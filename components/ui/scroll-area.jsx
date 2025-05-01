'use client'; import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const ScrollArea = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, children, ...props }, ref) => ( {children} ));
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName; const ScrollBar = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, orientation = 'vertical', ...props }, ref) => ( ));
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName; export { ScrollArea, ScrollBar };
