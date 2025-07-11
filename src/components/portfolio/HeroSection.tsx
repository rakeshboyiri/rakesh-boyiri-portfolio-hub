import { Github, Linkedin, Mail, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container px-4 mx-auto text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">RAKESH</span>
            <br />
            <span className="text-foreground">BOYIRI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Fullstack Developer & Computer Science Student
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Passionate about building scalable web applications and solving complex problems with modern technologies.
            Currently pursuing B.Tech in CSE with a CGPA of 9.01/10.0.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-sm md:text-base">
            <a href="mailto:boyirirakesh@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              boyirirakesh@gmail.com
            </a>
            <a href="tel:+918977244642" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              +91 8977244642
            </a>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary animate-glow">
              Download Resume
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="#" className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="p-3 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110">
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;