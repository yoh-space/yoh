import { cn } from '@/lib/utils';
import PropTypes from 'prop-types'; function Skeleton({ className, ...props
}={cn('animate-pulse rounded-md bg-muted', className)} {...props} /> );
} export { Skeleton };
