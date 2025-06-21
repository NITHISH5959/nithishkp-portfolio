
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'SmartFinance UI Kit',
      description: 'A sleek finance management dashboard UI created in Figma and implemented using React and CSS Modules. Focused on user interaction, data visualization, and accessibility.'
    },
    {
      title: 'EduFlex Landing Page',
      description: 'Modern educational landing page with animated sections, scroll effects, and full responsiveness. Built with HTML, TailwindCSS, and GSAP animations.'
    },
    {
      title: 'BlueHealth App Interface',
      description: 'Designed and prototyped a health app interface with seamless navigation and wellness tracking using Figma. Focused on minimalism and usability.'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of my latest work showcasing my skills in UI/UX design 
            and front-end development.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
              style={{ animationDelay: `${index * 0.2}s` }}
            >              
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
