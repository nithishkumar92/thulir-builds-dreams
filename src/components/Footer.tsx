import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const contactInfo = [
    {
      icon: Phone,
      text: "+91 74184 77647",
      href: "tel:+917418477647"
    },
    {
      icon: Mail,
      text: "info@thulirconstruction.com",
      href: "mailto:info@thulirconstruction.com"
    },
    {
      icon: MapPin,
      text: "Chennai, Tamil Nadu, India",
      href: "#"
    }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Our Services", href: "#services" },
    { label: "Packages", href: "#packages" },
    { label: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/thulirconstruction",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/thulirconstruction",
      label: "Instagram"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/thulirconstruction",
      label: "YouTube"
    }
  ];

  return (
    <footer className="bg-gradient-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center text-white font-bold text-xl">
                T
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl text-accent-foreground">
                  THULIR
                </span>
                <span className="font-medium text-sm text-white/70 tracking-wider">
                  CONSTRUCTION
                </span>
              </div>
            </div>
            
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Building dreams with excellence. We are committed to delivering 
              high-quality construction services that exceed expectations and 
              stand the test of time.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/10 hover:bg-primary/80 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg sm:text-xl mb-6 text-accent-foreground">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent-foreground transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg sm:text-xl mb-6 text-accent-foreground">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index}>
                  <a
                    href={contact.href}
                    className="flex items-center space-x-3 text-white/80 hover:text-accent-foreground transition-colors duration-200 group"
                  >
                    <contact.icon className="w-5 h-5 text-accent-foreground group-hover:scale-110 transition-transform duration-200" />
                    <span className="text-sm sm:text-base">{contact.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60 text-sm sm:text-base">
            © {new Date().getFullYear()} Thulir Construction. All rights reserved. 
            Building excellence since 2019.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;