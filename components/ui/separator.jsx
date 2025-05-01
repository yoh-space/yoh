'use client'; import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Separator = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>( ( { className, orientation = 'horizontal', decorative = true, ...props }, ref ) => ( )
);
Separator.displayName = SeparatorPrimitive.Root.displayName; export { Separator };
