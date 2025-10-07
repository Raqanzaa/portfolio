import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import profileMain from "../assets/profile.png";
import ProfileCard from './animation/ProfileCard.jsx';

const AboutSection = () => {
  useEffect(() => {
    // Initialize AOS with settings that allow animations to repeat
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Allow animations to trigger multiple times
      mirror: true
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-between px-6 md:px-9 py-6 md:py-20"
      data-aos="fade-up"
      data-aos-once="false"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-4xl font-bold text-center text-transparent dark:text-white mb-16 relative"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-once="false"
        >
          About <span className="text-teal-400">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          <div 
            className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0"
            data-aos="zoom-in"
            data-aos-delay="200"
            data-aos-once="false"
          >
            <ProfileCard
              name=""
              title=""
              handle="Raqanzaa"
              status="Online"
              contactText="Contact Me"
              avatarUrl={profileMain}
              showUserInfo={false}
              enableTilt={false}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>
          <div 
            className="flex-1"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-once="false"
          >
            <h3 
              className="text-2xl font-semibold text-gray-800 dark:text-white mb-4"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-once="false"
            >
              Web Full-Stack Developer & AI Specialist
            </h3>
            <p 
              className="text-gray-600 dark:text-gray-300 mb-4"
              data-aos="fade-right"
              data-aos-delay="450"
              data-aos-once="false"
            >
              I build production-ready applications using AI as my coding
              partner. With solid programming fundamentals, I leverage AI to:
            </p>
            <ul 
              className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4 space-y-2"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-once="false"
            >
              <li data-aos="fade-right" data-aos-delay="550">Generate and refine code with AI assistance</li>
              <li data-aos="fade-right" data-aos-delay="600">Enhance development speed without compromising quality</li>
              <li data-aos="fade-right" data-aos-delay="650">Verify and adapt AI outputs to real-world requirements</li>
              <li data-aos="fade-right" data-aos-delay="700">Maintain clean architecture and best practices</li>
            </ul>
            <p 
              className="text-gray-600 dark:text-gray-300"
              data-aos="fade-right"
              data-aos-delay="750"
              data-aos-once="false"
            >
              This hybrid approach delivers efficient, maintainable solutions
              that combine AI efficiency with developer expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;