import { Heart, Linkedin, Github, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#dashboard" className="font-heading font-bold text-xl text-foreground">
              LMP<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Luis Mario Palicte. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:contact@luismario.dev"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-primary hover:bg-accent rounded-lg transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Made with love */}
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-primary fill-primary" /> and dedication
          </p>
        </div>
      </div>
    </footer>
  );
}
