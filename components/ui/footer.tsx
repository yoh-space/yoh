import Link from "next/link";
import { SocialIcons } from "@/components/ui/social-icons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <Link href="#home" className="text-xl font-bold text-primary">
              Yohannes Damtie
            </Link>
            <p className="mt-2 text-muted-foreground text-sm">
              Web Developer & Software Engineer
            </p>
          </div>

          <SocialIcons />
          
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Yohannes Damtie. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}