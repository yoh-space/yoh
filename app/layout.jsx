import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from "sonner";
import PropTypes from 'prop-types';

const inter = Inter({ subsets: ['latin'] });

/**
 * Metadata for the application
 */
export const metadata = {
  title: 'Yohannes Damtie | Web Developer & Software Engineer',
  description: 'Portfolio website showcasing the work and skills of Yohannes Damtie, a web developer and software engineer.',
};

/**
 * Root layout component that wraps the entire application
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element} Root layout component
 */
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired
}; 