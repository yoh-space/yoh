import Link from "next/link";
import { socialLinks } from "@/lib/data";
import PropTypes from 'prop-types';

/**
 * Social media icons component
 * @param {Object} props - Component props
 * @param {string} [props.className="flex gap-4"] - CSS class for the container
 * @param {string} [props.iconClassName="w-6 h-6"] - CSS class for the icons
 * @returns {JSX.Element} Social icons component
 */
export function SocialIcons({ 
  className = "flex gap-4", 
  iconClassName = "w-6 h-6"
}) {
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

SocialIcons.propTypes = {
  className: PropTypes.string,
  iconClassName: PropTypes.string
}; 