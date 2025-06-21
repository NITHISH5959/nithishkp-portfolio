
import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            NK
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-gray-700 hover:text-primary transition-colors duration-300 capitalize font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          <button 
            onClick={downloadResume}
            className="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 font-medium"
          >
            Resume
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
