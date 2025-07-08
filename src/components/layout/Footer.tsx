import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Dumbbell, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  ArrowRight
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Find a Gym", href: "/find-gym" },
    { label: "Trainers", href: "/trainers" },
    { label: "Premium Plans", href: "/premium" },
    { label: "Contact", href: "/contact" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "/help" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Safety Guidelines", href: "/safety" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/gymghana", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/gymghana", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/gymghana", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/gymghana", label: "YouTube" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 py-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-hero p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl text-white">GymGhana</div>
                <div className="text-sm text-secondary-foreground/80">Connect</div>
              </div>
            </div>
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Ghana's premier fitness network connecting you to world-class gyms, 
              expert trainers, and a supportive community across the country.
            </p>
            
            {/* Newsletter */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button variant="hero" size="sm">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-6">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    to={link.href}
                    className="text-secondary-foreground/80 hover:text-white transition-colors hover:translate-x-1 inline-block duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-6">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary/20 p-2 rounded">
                  <Mail className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/80">Email</p>
                  <p className="text-white">hello@gymghana.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-accent/20 p-2 rounded">
                  <Phone className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/80">Phone</p>
                  <p className="text-white">+233 XX XXX XXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-success/20 p-2 rounded">
                  <MapPin className="h-4 w-4 text-success" />
                </div>
                <div>
                  <p className="text-sm text-secondary-foreground/80">Headquarters</p>
                  <p className="text-white">Accra, Ghana</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="font-medium text-white mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 p-2 rounded hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4 text-white group-hover:text-primary" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-secondary-foreground/80">
            © {currentYear} GymGhana Connect. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            <Link 
              to="/terms" 
              className="text-secondary-foreground/80 hover:text-white transition-colors"
            >
              Terms
            </Link>
            <Link 
              to="/privacy" 
              className="text-secondary-foreground/80 hover:text-white transition-colors"
            >
              Privacy
            </Link>
            <Link 
              to="/cookies" 
              className="text-secondary-foreground/80 hover:text-white transition-colors"
            >
              Cookies
            </Link>
          </div>

          <div className="text-sm text-secondary-foreground/80">
            Made with ❤️ in Ghana
          </div>
        </div>
      </div>
    </footer>
  );
};