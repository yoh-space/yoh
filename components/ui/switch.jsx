'use client'; import * as React from 'react';
import * as SwitchPrimitives from '@radix-ui/react-switch'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Switch = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
Switch.displayName = SwitchPrimitives.Root.displayName; export { Switch };
