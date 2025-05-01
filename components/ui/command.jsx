'use client'; import * as React from 'react';
import { type DialogProps } from '@radix-ui/react-dialog';
import { Command as CommandPrimitive } from 'cmdk';
import { Search } from 'lucide-react'; import { cn } from '@/lib/utils';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import PropTypes from 'prop-types'; const Command = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
Command.displayName = CommandPrimitive.displayName; interface CommandDialogProps extends DialogProps {} const CommandDialog = ({ children, ...props }=> { return ( {children} );
}; const CommandInput = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( )); CommandInput.displayName = CommandPrimitive.Input.displayName; const CommandList = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( )); CommandList.displayName = CommandPrimitive.List.displayName; const CommandEmpty = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>((props, ref) => ( )); CommandEmpty.displayName = CommandPrimitive.Empty.displayName; const CommandGroup = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( )); CommandGroup.displayName = CommandPrimitive.Group.displayName; const CommandSeparator = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName; const CommandItem = React.forwardRef< React.ElementRef, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( )); CommandItem.displayName = CommandPrimitive.Item.displayName; const CommandShortcut = ({ className, ...props
}=> { return ( );
};
CommandShortcut.displayName = 'CommandShortcut'; export { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut, CommandSeparator,
};
