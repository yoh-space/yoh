'use client'; import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { Circle } from 'lucide-react'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const RadioGroup = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => { return ( );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName; const RadioGroupItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => { return ( );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName; export { RadioGroup, RadioGroupItem };
