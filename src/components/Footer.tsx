import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Youtube,
  MessageCircle
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { href: "#", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Our Services" },
    { href: "#why-choose", label: "Why Choose Us" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 lg:px-6 py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl text-secondary leading-none">
                  THULIR
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider">
                  CONSTRUCTION
                </span>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Building dreams with excellence. We are committed to delivering high-quality 
              construction services that exceed expectations and stand the test of time.
            </p>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-primary hover:border-primary">
                <MessageCircle size={16} />
              </Button>
              <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-primary hover:border-primary">
                <Facebook size={16} />
              </Button>
              <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-primary hover:border-primary">
                <Instagram size={16} />
              </Button>
              <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-primary hover:border-primary">
                <Youtube size={16} />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-secondary mt-1 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  123 Construction Avenue<br />
                  Building District<br />
                  City, State 12345
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-secondary flex-shrink-0" />
                <p className="text-slate-300 text-sm">+91 74184 77647</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-secondary flex-shrink-0" />
                <p className="text-slate-300 text-sm">info@thulirconstruction.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-secondary">Stay Updated</h3>
            <p className="text-slate-300 text-sm">
              Subscribe to our newsletter for construction tips and project updates.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-400"
              />
              <Button size="sm" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Thulir Construction. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;