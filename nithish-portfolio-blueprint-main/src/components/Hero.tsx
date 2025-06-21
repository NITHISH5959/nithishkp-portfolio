import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import profileImage from '/assets/388a197e-b6f9-4b7c-bb88-e3022edcce0e.png';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create resume content
    const resumeContent = `
NITHISH K P
UI/UX Designer | Front-End Developer

CONTACT INFORMATION
Email: nithishdsgn@gmail.com
Phone: +91 94893 41555
LinkedIn: https://www.linkedin.com/in/nithish-purushothaman
GitHub: https://github.com/NITHISH5959

EDUCATION
Bachelor of Engineering in Computer Science and Engineering
Adhiyamaan College of Engineering, Hosur
Currently Pursuing

ABOUT
Creative and detail-oriented UI/UX designer and front-end developer, passionate about building intuitive, user-friendly, and visually stunning web interfaces. Skilled in crafting responsive layouts and transforming complex problems into elegant digital solutions.

TECHNICAL SKILLS
• UI/UX Design
• HTML5, CSS3, JavaScript
• React.js
• Figma & Adobe XD
• Responsive Design
• Design Systems
• Accessibility Principles
• Web Animations
• Git & GitHub

FEATURED PROJECTS

SmartFinance UI Kit
A sleek finance management dashboard UI created in Figma and implemented using React and CSS Modules. Focused on user interaction, data visualization, and accessibility.
Technologies: React, CSS Modules, Figma, Data Visualization

EduFlex Landing Page
Modern educational landing page with animated sections, scroll effects, and full responsiveness. Built with HTML, TailwindCSS, and GSAP animations.
Technologies: HTML, TailwindCSS, GSAP, JavaScript

BlueHealth App Interface
Designed and prototyped a health app interface with seamless navigation and wellness tracking using Figma. Focused on minimalism and usability.
Technologies: Figma, Prototyping, User Research, Mobile Design

CORE COMPETENCIES
• User Experience Design
• Interface Design
• Front-end Development
• Responsive Web Design
• Cross-browser Compatibility
• Version Control (Git)
• Problem Solving
• Attention to Detail
    `.trim();

    // Create and download the file
    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Nithish_KP_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="text-center lg:text-left animate-fade-in">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            I'm{' '}
            <span className="text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Nithish K P
            </span>
          </h1>
          
          <div className="text-xl lg:text-2xl text-gray-600 mb-8 font-medium">
            UI/UX DESIGNER | FRONT-END DEVELOPER
          </div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Creative and detail-oriented designer passionate about building intuitive, 
            user-friendly, and visually stunning web interfaces.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1 font-medium"
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-medium"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex space-x-6 justify-center lg:justify-start">
            <a href="mailto:nithishdsgn@gmail.com" className="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
              <Mail size={24} />
            </a>
            <a href="https://github.com/NITHISH5959" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/nithish-purushothaman" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors duration-300 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end animate-float">
          <div className="relative">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50 shadow-2xl backdrop-blur-lg border border-white/20">
              <img 
                src={profileImage}
                alt="Nithish K P" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-3xl bg-primary/20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
