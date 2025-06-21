
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'UI/UX Design', level: 90 },
    { name: 'HTML5, CSS3, JavaScript', level: 85 },
    { name: 'React.js', level: 80 },
    { name: 'Figma & Adobe XD', level: 95 },
    { name: 'Responsive Design', level: 90 },
    { name: 'Design Systems', level: 75 },
    { name: 'Accessibility Principles', level: 70 },
    { name: 'Web Animations', level: 80 },
    { name: 'Git & GitHub', level: 85 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A comprehensive set of technical and design skills that enable me to create 
            exceptional digital experiences from concept to implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">Proficiency</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Years Learning</h3>
            <p className="text-gray-600">Continuous learning and improving my craft</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">15+</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Projects</h3>
            <p className="text-gray-600">Personal and academic projects completed</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">100%</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedication</h3>
            <p className="text-gray-600">Committed to delivering quality work</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
