'use client'; import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const TooltipProvider = TooltipPrimitive.Provider; const Tooltip = TooltipPrimitive.Root; const TooltipTrigger = TooltipPrimitive.Trigger; const TooltipContent = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, sideOffset = 4, ...props }, ref) => ( ));
TooltipContent.displayName = TooltipPrimitive.Content.displayName; export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
