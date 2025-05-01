'use client'; import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Slider = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
Slider.displayName = SliderPrimitive.Root.displayName; export { Slider };
