import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Eye, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Ultra Dynamic Background */}
      <div className="absolute inset-0 bg-hero-gradient"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float glow-primary"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float glow-accent" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-cyber/30 rounded-full blur-2xl animate-bounce-gentle" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/6 left-1/2 w-24 h-24 bg-neon/40 rounded-full blur-2xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(142, 76, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(142, 76, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'shimmer 4s linear infinite'
        }}></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Profile Image Section */}
          <div className="lg:w-1/2 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-glass profile-border animate-pulse-glow">
                {/* Placeholder Image with Gradient Overlay */}
                <div className="w-full h-full bg-accent-gradient opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl md:text-8xl font-bold text-gradient opacity-50">R</div>
                </div>
                {/* Add your image here: */}
                {/* <img src="/path-to-your-image.jpg" alt="Rakesh Boyiri" className="w-full h-full object-cover" /> */}
              </div>
              
              {/* Floating Elements Around Profile */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-lg animate-bounce-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }}></div>
              
              {/* Sparkle Effects */}
              <Sparkles className="absolute top-8 right-8 w-6 h-6 text-primary animate-pulse" />
              <Sparkles className="absolute bottom-12 left-12 w-4 h-4 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 text-center lg:text-left animate-slide-up">
            <div className="mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                <span className="text-gradient block">RAKESH</span>
                <span className="text-cyber block">BOYIRI</span>
              </h1>
              
              <div className="relative inline-block">
                <p className="text-xl md:text-2xl text-neon mb-4 font-semibold">
                  Fullstack Developer & CS Student
                </p>
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-gradient animate-shimmer"></div>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              Passionate about building <span className="text-primary font-semibold">scalable web applications</span> and solving complex problems with modern technologies.
              Currently pursuing B.Tech in CSE with a <span className="text-accent font-semibold">CGPA of 9.01/10.0</span>.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-sm">
              <a href="mailto:boyirirakesh@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-105 bg-glass rounded-full px-4 py-2">
                <Mail className="w-4 h-4" />
                boyirirakesh@gmail.com
              </a>
              <a href="tel:+918977244642" className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-105 bg-glass rounded-full px-4 py-2">
                <Phone className="w-4 h-4" />
                +91 8977244642
              </a>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <Button className="bg-accent-gradient hover:scale-105 transition-all duration-300 text-primary-foreground shadow-cyber glow-primary group">
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce-gentle" />
                Download Resume
              </Button>
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300 bg-glass glow-accent">
                <Eye className="w-4 h-4 mr-2" />
                View Projects
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="#" className="group p-4 rounded-full bg-glass border border-primary/20 text-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-primary glow-primary">
                <Linkedin className="w-5 h-5 group-hover:animate-bounce-gentle" />
              </a>
              <a href="#" className="group p-4 rounded-full bg-glass border border-accent/20 text-accent hover:text-accent-foreground transition-all duration-300 hover:scale-110 hover:bg-accent glow-accent">
                <Github className="w-5 h-5 group-hover:animate-bounce-gentle" />
              </a>
              <a href="#" className="group p-4 rounded-full bg-glass border border-cyber/20 text-cyber hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:bg-cyber glow-cyber">
                <ExternalLink className="w-5 h-5 group-hover:animate-bounce-gentle" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;