'use client'; import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const DropdownMenu = DropdownMenuPrimitive.Root; const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger; const DropdownMenuGroup = DropdownMenuPrimitive.Group; const DropdownMenuPortal = DropdownMenuPrimitive.Portal; const DropdownMenuSub = DropdownMenuPrimitive.Sub; const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup; const DropdownMenuSubTrigger = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef & { inset?: boolean; }
>(({ className, inset, children, ...props }, ref) => ( {children} ));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName; const DropdownMenuSubContent = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName; const DropdownMenuContent = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, sideOffset = 4, ...props }, ref) => ( ));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName; const DropdownMenuItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef & { inset?: boolean; }
>(({ className, inset, ...props }, ref) => ( ));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName; const DropdownMenuCheckboxItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, children, checked, ...props }, ref) => ( {children} ));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName; const DropdownMenuRadioItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, children, ...props }, ref) => ( {children} ));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName; const DropdownMenuLabel = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef & { inset?: boolean; }
>(({ className, inset, ...props }, ref) => ( ));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName; const DropdownMenuSeparator = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName; const DropdownMenuShortcut = ({ className, ...props
}=> { return ( );
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut'; export { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuGroup, DropdownMenuPortal, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuRadioGroup,
};
