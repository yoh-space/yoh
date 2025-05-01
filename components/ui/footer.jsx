import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";
import PropTypes from 'prop-types';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 mt-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold">Yohannes Damtie</span> - Web Developer & Software Engineer
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Yohannes Damtie. All rights reserved.
            </p>
          </div>
          
          <SocialIcons 
            className="flex gap-4" 
            iconClassName="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" 
          />
        </div>
      </div>
    </footer>
  );
}