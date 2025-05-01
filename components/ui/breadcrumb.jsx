import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react'; import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; const Breadcrumb = React.forwardRef< HTMLElement, React.ComponentPropsWithoutRef & { separator?: React.ReactNode; }
>(({ ...props }, ref) => );
Breadcrumb.displayName = 'Breadcrumb'; const BreadcrumbList = React.forwardRef< HTMLOListElement, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
BreadcrumbList.displayName = 'BreadcrumbList'; const BreadcrumbItem = React.forwardRef< HTMLLIElement, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
BreadcrumbItem.displayName = 'BreadcrumbItem'; const BreadcrumbLink = React.forwardRef< HTMLAnchorElement, React.ComponentPropsWithoutRef & { asChild?: boolean; }
>(({ asChild, className, ...props }, ref) => { const Comp = asChild ? Slot : 'a'; return ( );
});
BreadcrumbLink.displayName = 'BreadcrumbLink'; const BreadcrumbPage = React.forwardRef< HTMLSpanElement, React.ComponentPropsWithoutRef
>(({ className, ...props }, ref) => ( ));
BreadcrumbPage.displayName = 'BreadcrumbPage'; const BreadcrumbSeparator = ({ children, className, ...props
}: React.ComponentProps) => ( svg]:size-3.5', className)} {...props} > {children ?? } );
BreadcrumbSeparator.displayName = 'BreadcrumbSeparator'; const BreadcrumbEllipsis = ({ className, ...props
}: React.ComponentProps) => ( More );
BreadcrumbEllipsis.displayName = 'BreadcrumbElipssis'; export { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis,
};
