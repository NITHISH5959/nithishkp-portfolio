
import React from 'react';
import { User, Book } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <User className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Professional Background</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Creative and detail-oriented UI/UX designer and front-end developer, passionate about 
                building intuitive, user-friendly, and visually stunning web interfaces. Skilled in 
                crafting responsive layouts and transforming complex problems into elegant digital solutions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <Book className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Currently pursuing B.E. in Computer Science and Engineering at Adhiyamaan College of Engineering, Hosur. 
                Constantly exploring new trends in interactive design and web technologies.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">What Drives Me</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Creating meaningful user experiences through thoughtful design</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Building accessible and inclusive digital solutions</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Staying updated with latest design trends and technologies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-600">Collaborating with teams to bring innovative ideas to life</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
