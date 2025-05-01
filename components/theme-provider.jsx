"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import PropTypes from 'prop-types';

/**
 * Theme provider component that wraps the application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Theme provider component
 */
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
}; 