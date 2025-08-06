import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home", active: true },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#packages", label: "Packages" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/98 backdrop-blur-lg shadow-lg border-b border-primary-gold/10"
          : "bg-white/95 backdrop-blur-md",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl">
              T
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-lg sm:text-xl bg-gradient-gold bg-clip-text text-transparent leading-none">
                THULIR
              </span>
              <span className="font-medium text-xs sm:text-sm text-muted-foreground tracking-wider">
                CONSTRUCTION
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative font-medium text-sm lg:text-base transition-colors duration-200",
                  link.active
                    ? "text-primary font-semibold"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.label}
                {link.active && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-gold" />
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 overflow-hidden",
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="flex flex-col space-y-4 pt-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "font-medium py-2 px-4 rounded-lg transition-colors",
                  link.active
                    ? "text-primary bg-secondary font-semibold"
                    : "text-foreground hover:text-primary hover:bg-secondary"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;