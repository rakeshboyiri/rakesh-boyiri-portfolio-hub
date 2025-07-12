import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SkillsSection = () => {
  const skillCategories = {
    "Programming Languages": ["Python", "C/C++", "Java", "JavaScript", "HTML", "CSS"],
    "Frameworks/Libraries": ["React.js", "Next.js", "Node.js", "Express.js", "NumPy", "Pandas", "Matplotlib"],
    "Databases": ["MySQL", "MongoDB"],
    "Tools/Platforms": ["Git", "GitHub", "VS Code", "Angular", "TypeScript", "Tailwind CSS"]
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern technologies and frameworks for building scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <Card 
              key={category} 
              className="bg-card-gradient border-primary/20 shadow-primary hover:shadow-accent transition-all duration-500 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">400+</div>
            <div className="text-muted-foreground">Problems Solved</div>
            <div className="text-sm text-muted-foreground">GeeksforGeeks & LeetCode</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">8.96</div>
            <div className="text-muted-foreground">CGPA</div>
            <div className="text-sm text-muted-foreground">Current Semester</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5+</div>
            <div className="text-muted-foreground">Months Experience</div>
            <div className="text-sm text-muted-foreground">Fullstack Development</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;