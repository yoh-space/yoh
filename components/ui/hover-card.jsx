'use client'; import * as React from 'react';
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const HoverCard = HoverCardPrimitive.Root; const HoverCardTrigger = HoverCardPrimitive.Trigger; const HoverCardContent = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, align = 'center', sideOffset = 4, ...props }, ref) => ( ));
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName; export { HoverCard, HoverCardTrigger, HoverCardContent };
