import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Languages, Heart } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "boyirirakesh@gmail.com",
      href: "mailto:boyirirakesh@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8977244642",
      href: "tel:+918977244642",
      description: "Available for calls"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Telangana, India",
      href: "#",
      description: "Open to remote work"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/rakesh-boyiri/",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: Github,
      label: "GitHub", 
      href: "https://github.com/rakeshboyiri",
      color: "hover:text-[#333]"
    },
    {
      icon: ExternalLink,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/rakesh_boyiri/",
      color: "hover:text-[#2F8D46]"
    },
    {
      icon: ExternalLink,
      label: "LeetCode",
      href: "https://leetcode.com/u/rakesh_boyiri/",
      color: "hover:text-[#FFA500]"
    }
  ];

  const additionalInfo = [
    {
      icon: Languages,
      label: "Languages",
      value: "English, Telugu"
    },
    {
      icon: Heart,
      label: "Volunteer Work",
      value: "Organized coding competitions for juniors"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Get In Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's connect and discuss opportunities, projects, or just have a chat about technology
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card-gradient border-primary/20 shadow-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  <span className="text-gradient">Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-start gap-4 p-4 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-accent/10 group-hover:text-accent transition-colors">
                      <contact.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {contact.label}
                      </h4>
                      <p className="text-muted-foreground">{contact.value}</p>
                      <p className="text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Additional Information */}
            <Card className="bg-card-gradient border-primary/20 shadow-primary">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {additionalInfo.map((info, index) => (
                  <div 
                    key={info.label}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/20"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-semibold text-foreground">{info.label}: </span>
                      <span className="text-muted-foreground">{info.value}</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action & Social Links */}
          <div className="space-y-6">
            <Card className="bg-card-gradient border-primary/20 shadow-primary">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  <span className="text-gradient">Let's Work Together</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  I'm always excited to work on new projects and collaborate with talented individuals. 
                  Whether you have a project in mind, need a developer for your team, or just want to 
                  connect, I'd love to hear from you!
                </p>
                
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-primary animate-glow"
                    asChild
                  >
                    <a href="mailto:boyirirakesh@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send me an email
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href="tel:+918977244642">
                      <Phone className="w-4 h-4 mr-2" />
                      Give me a call
                    </a>
                  </Button>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="font-semibold text-foreground mb-4">Find me online</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-3 p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 transition-all duration-300 group ${social.color}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <social.icon className="w-5 h-5" />
                        <span className="font-medium">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-primary/20">
          <p className="text-muted-foreground">
            © 2024 Rakesh Boyiri. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;