import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rajiv Gandhi University of Knowledge and Technologies – Basar",
      cgpa: "8.96 / 10.0",
      period: "5th Semester",
      status: "Current",
      icon: GraduationCap,
      highlights: ["Dean's List", "Top 10% of Class", "Advanced Coursework"]
    },
    {
      degree: "Pre-University Course",
      institution: "Rajiv Gandhi University of Knowledge and Technologies – Basar",
      cgpa: "8.6 / 10.0",
      period: "Completed",
      status: "Completed",
      icon: Award,
      highlights: ["Strong Foundation", "Mathematics Excellence", "Science Proficiency"]
    },
    {
      degree: "Secondary Education",
      institution: "Zilla Parishad Secondary School, Bheemaram",
      cgpa: "10.0 / 10.0",
      period: "Completed",
      status: "Perfect Score",
      icon: Award,
      highlights: ["Perfect Score", "Academic Excellence", "Leadership Skills"]
    }
  ];

  const coursework = [
    "Algorithms and Data Structures",
    "Design and Analysis of Algorithms", 
    "Database and Management Systems",
    "Object-Oriented Programming and Management Systems"
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation with consistent excellence in computer science and engineering
          </p>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6 mb-16">
          {education.map((edu, index) => (
            <Card 
              key={edu.degree}
              className="bg-card-gradient border-primary/20 shadow-primary hover:shadow-accent transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                    <edu.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
                      <CardTitle className="text-xl font-bold group-hover:text-accent transition-colors">
                        {edu.degree}
                      </CardTitle>
                      <Badge 
                        variant={edu.status === "Current" ? "default" : "secondary"}
                        className={edu.status === "Current" ? "bg-primary text-primary-foreground" : "bg-secondary/50"}
                      >
                        {edu.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground font-medium mb-3">{edu.institution}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span className="font-semibold text-primary">CGPA: {edu.cgpa}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight) => (
                    <Badge
                      key={highlight}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Relevant Coursework */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card-gradient border-primary/20 shadow-primary">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">
                <span className="text-gradient">Relevant Coursework</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {coursework.map((course, index) => (
                  <div 
                    key={course}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-colors"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-foreground font-medium">{course}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;