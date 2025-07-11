import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Professional Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building real-world applications and gaining valuable industry experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-primary/20 shadow-primary hover:shadow-accent transition-all duration-500 group">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl font-bold group-hover:text-accent transition-colors mb-2">
                    Fullstack Developer Intern
                  </CardTitle>
                  <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4" />
                      <span className="font-semibold text-primary">Phamagen.ai</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Mar 2025 – Jul 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Remote</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4">Key Achievements</h4>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Developed and enhanced a <span className="text-foreground font-semibold">complex Angular application</span> for drug data synchronization, integrating dynamic tables with PrimeNG components (p-calendar, p-chips, p-multiselect).
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Implemented <span className="text-foreground font-semibold">client and drug selection workflows</span> with real-time filtering, date validation, and data pre-processing using REST APIs.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Designed and developed <span className="text-foreground font-semibold">dynamic, responsive product pages</span> for AutoLit and associated PV tools using React, TypeScript, and Tailwind CSS, improving user engagement and readability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {["Angular", "React", "TypeScript", "PrimeNG", "Tailwind CSS", "REST APIs", "JavaScript"].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Skills Developed */}
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Skills Developed</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Complex Angular Development",
                    "Component Integration",
                    "Real-time Data Processing",
                    "API Integration",
                    "Responsive Design",
                    "User Experience Design"
                  ].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent"></div>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;