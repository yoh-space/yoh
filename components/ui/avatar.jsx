'use client'; import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Avatar = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
Avatar.displayName = AvatarPrimitive.Root.displayName; const AvatarImage = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
AvatarImage.displayName = AvatarPrimitive.Image.displayName; const AvatarFallback = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName; export { Avatar, AvatarImage, AvatarFallback };
