import { useState } from "react";
import { Rocket, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

export function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const navSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "#home" },
        { name: "Events", href: "#events" },
        { name: "Startups", href: "#startups" },
        { name: "Team", href: "#team" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Incubation", href: "#" },
        { name: "Mentorship", href: "#" },
        { name: "Funding", href: "#" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Join E-Cell", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Alumni Network", href: "#" },
        { name: "Partners", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-chart-2 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-foreground">E-Cell</span>
                <span className="text-xs text-muted-foreground">VIT Bhopal</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Empowering the next generation of entrepreneurs and innovators at VIT Bhopal.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>VIT Bhopal University, Kothrikalan, Sehore, Madhya Pradesh 466114</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:ecell@vitbhopal.ac.in" className="hover:text-primary">
                  ecell@vitbhopal.ac.in
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+917554091111" className="hover:text-primary">
                  +91 75540 91111
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-secondary hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-1">
            <div className="grid grid-cols-3 gap-8">
              {navSections.map((section, index) => (
                <div key={index}>
                  <h4 className="mb-4 text-sm">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm">Quick Contact</h4>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-background"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-background"
              />
              <Textarea
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="bg-background resize-none"
                rows={3}
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 group">
                Send Message
                <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2025 E-Cell VIT Bhopal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
