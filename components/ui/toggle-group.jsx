'use client'; import * as React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import { type VariantProps } from 'class-variance-authority'; import { cn } from '@/lib/utils';
import { toggleVariants } from '@/components/ui/toggle';
import PropTypes from 'prop-types'; const ToggleGroupContext = React.createContext< VariantProps
>({ size: 'default', variant: 'default',
}); const ToggleGroup = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef & VariantProps
>(({ className, variant, size, children, ...props }, ref) => ( {children} )); ToggleGroup.displayName = ToggleGroupPrimitive.Root.displayName; const ToggleGroupItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef & VariantProps
>(({ className, children, variant, size, ...props }, ref) => { const context = React.useContext(ToggleGroupContext); return ( <ToggleGroupPrimitive.Item ref={ref} className={cn( toggleVariants({ variant size );
}); ToggleGroupItem.displayName = ToggleGroupPrimitive.Item.displayName; export { ToggleGroup, ToggleGroupItem };
