import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Database, Shield, Smartphone, Monitor, Brain } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "AI Virtual Interview System",
      description: "AI-powered mock interview platform that generates questions from job descriptions and analyzes voice-based answers using Google Gemini AI. Provides real-time feedback and performance ratings.",
      tech: ["React.js", "TypeScript", "Google Gemini AI", "Firebase", "React-Hook-Form", "Clerk", "Tailwind CSS"],
      features: [
        "Dynamic question generation from job description",
        "Voice input with speech-to-text conversion",
        "Answer analysis using Gemini AI",
        "Real-time performance feedback",
        "Rating system for candidate evaluation"
      ],
      icon: Brain, // or any icon representing AI/interview
      github: "",
      live: "https://interview-system.onrender.com/"
    },
    
    {
      title: "Personal Portfolio",
      description: "Responsive portfolio website built with Next.js showcasing projects, technical skills, and professional experience. Features smooth navigation and dynamic project rendering.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      features: [
        "Responsive design",
        "Smooth navigation",
        "Dynamic content",
        "Modern UI/UX",
        "Performance optimized"
      ],
      icon: Monitor,
      github: "https://github.com/rakeshboyiri/rakesh-boyiri-portfolio-hub",
      live: "#"
    },
    {
      title: "Drug Data Synchronization Tool",
      description: "Complex Angular application for pharmaceutical data management. Integrated dynamic tables with PrimeNG components and implemented client workflows with real-time filtering.",
      tech: ["Angular", "TypeScript", "PrimeNG", "REST APIs"],
      features: [
        "Dynamic data tables",
        "Real-time filtering",
        "Date validation",
        "Client workflows",
        "API integration"
      ],
      icon: Shield,
      github: "#",
      live: "https://phamagen.ai/"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my latest work in fullstack development and web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-card-gradient border-primary/20 shadow-primary hover:shadow-accent transition-all duration-500 group overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <project.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-accent transition-colors">
                    {project.title}
                  </CardTitle>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-primary mb-2">Key Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;