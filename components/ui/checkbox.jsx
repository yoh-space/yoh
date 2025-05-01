'use client'; import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'lucide-react'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Checkbox = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
Checkbox.displayName = CheckboxPrimitive.Root.displayName; export { Checkbox };
