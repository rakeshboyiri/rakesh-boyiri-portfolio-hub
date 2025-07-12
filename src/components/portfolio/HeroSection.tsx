import { Github, Linkedin, Mail, Phone, ExternalLink, Download, Eye, Sparkles, Code, Zap, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import dp from '../../assets/dp.png'; // Placeholder for profile image

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Dynamic Mouse-Following Gradient */}
      <div 
        className="absolute w-96 h-96 bg-gradient-to-r from-cyan-400/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      
      {/* Floating Geometric Elements with Enhanced Glow */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-full blur-3xl animate-pulse opacity-60" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-pink-400/10 to-orange-500/10 rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-r from-indigo-400/20 to-cyan-500/20 rounded-full blur-2xl animate-bounce opacity-40" style={{ animationDelay: '1s' }} />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-grid-pattern animate-pulse" />
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Profile Image Section - Enhanced */}
          <div className={`lg:w-1/2 flex justify-center transition-all duration-1000 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="relative group">
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Rotating Border Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-slate-900" />
                </div>
                
                {/* Profile Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl">
                  {/* Fallback gradient with initial */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-30">R</div>
                  </div>
                  
                  {/* Profile Image (when available) */}
                  <img
                    src={dp}
                    alt="Rakesh Boyiri"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
                
                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin-slow">
                  <Code className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-cyan-400" />
                  <Zap className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 text-purple-400" />
                  <Star className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-pink-400" />
                </div>
                
                {/* Floating Sparkles */}
                {[...Array(8)].map((_, i) => (
                  <Sparkles
                    key={i}
                    className="absolute w-4 h-4 text-cyan-400 animate-pulse"
                    style={{
                      top: `${20 + Math.random() * 60}%`,
                      left: `${20 + Math.random() * 60}%`,
                      animationDelay: `${Math.random() * 2}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Content Section - Enhanced */}
          <div className={`lg:w-1/2 text-center lg:text-left transition-all duration-1000 delay-300 ${isVisible ? 'animate-fadeInUp' : 'opacity-0'}`}>
            <div className="mb-8">
              {/* Animated Title */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                  RAKESH
                </span>
                <span className="block bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent animate-gradient" style={{ animationDelay: '0.5s' }}>
                  BOYIRI
                </span>
              </h1>
              
              {/* Animated Subtitle */}
              <div className="relative inline-block mb-6">
                <p className="text-xl md:text-2xl text-cyan-300 font-semibold">
                  <span className="animate-typewriter">Fullstack Developer & CS Student</span>
                </p>
                <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 animate-shimmer" />
              </div>
            </div>
            
            {/* Enhanced Description */}
            <div className="mb-8">
              <p className="text-lg text-gray-300 mb-4 max-w-xl leading-relaxed">
                Passionate about building <span className="text-cyan-400 font-semibold">scalable web applications</span> and solving complex problems with modern technologies.
              </p>
              <p className="text-md text-gray-400 max-w-xl leading-relaxed">
                Currently pursuing B.Tech in CSE, specializing in full-stack development with Python,Java. React, Node.js.
              </p>
            </div>
            
            {/* Contact Cards */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a href="mailto:boyirirakesh@gmail.com" className="group flex items-center gap-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-cyan-400/50">
                <Mail className="w-4 h-4 group-hover:animate-bounce" />
                <span>boyirirakesh@gmail.com</span>
              </a>
              <a href="tel:+918977244642" className="group flex items-center gap-3 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-full px-6 py-3 text-sm text-gray-300 hover:text-purple-400 transition-all duration-300 hover:scale-105 border border-gray-700 hover:border-purple-400/50">
                <Phone className="w-4 h-4 group-hover:animate-bounce" />
                <span>+91 8977244642</span>
              </a>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
              <a
                href="/resume.pdf" // Replace with the actual path to your PDF file
                download="Rakesh_Resume.pdf" // Optional: Sets the default downloaded filename
                className="group inline-flex items-center gap-2 text-blue-600 hover:underline"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span className="relative z-10">Download Resume</span>
              </a>

                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
              
              <button className="group relative overflow-hidden bg-transparent border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:bg-cyan-400 hover:text-slate-900">
                <span className="relative z-10 flex items-center gap-2">
                  <Eye className="w-5 h-5 group-hover:animate-bounce" />
                  View Projects
                </span>
              </button>
            </div>
            
            {/* Enhanced Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a href="https://www.linkedin.com/in/rakesh-boyiri/" className="group relative p-4 rounded-full bg-gradient-to-r from-blue-500/10 to-blue-600/10 backdrop-blur-sm border border-blue-500/20 text-blue-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/25">
                <Linkedin className="w-6 h-6 group-hover:animate-bounce" />
                <div className="absolute inset-0 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
              
              <a href="https://github.com/rakeshboyiri/" className="group relative p-4 rounded-full bg-gradient-to-r from-gray-700/10 to-gray-800/10 backdrop-blur-sm border border-gray-600/20 text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-gray-700 hover:shadow-lg hover:shadow-gray-700/25">
                <Github className="w-6 h-6 group-hover:animate-bounce" />
                <div className="absolute inset-0 rounded-full bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
              
              <a href="#" className="group relative p-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-500/25">
                <ExternalLink className="w-6 h-6 group-hover:animate-bounce" />
                <div className="absolute inset-0 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center bg-gradient-to-b from-transparent to-cyan-400/10">
          <div className="w-1 h-3 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full mt-2 animate-pulse" />
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">Scroll Down</p>
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes typewriter {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-gradient {
          background-size: 400% 400%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-typewriter {
          overflow: hidden;
          border-right: 2px solid rgba(34, 211, 238, 0.7);
          white-space: nowrap;
          animation: typewriter 2s steps(30, end), blink-caret 0.75s step-end infinite;
        }
        
        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: rgba(34, 211, 238, 0.7);
          }
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;