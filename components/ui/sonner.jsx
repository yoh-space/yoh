'use client'; import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';
import PropTypes from 'prop-types'; const Toaster = ({ ...props }=> { const { theme = 'system' } = useTheme(); return ( );
}; export { Toaster };
