import Link from "next/link";
import { socialLinks } from "@/lib/data";

interface SocialIconsProps {
  className?: string;
  iconClassName?: string;
}

export function SocialIcons({ 
  className = "flex gap-4", 
  iconClassName = "w-6 h-6"
}: SocialIconsProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Link 
            key={link.name} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors duration-300"
            aria-label={link.name}
          >
            <Icon className={iconClassName} />
          </Link>
        );
      })}
    </div>
  );
}