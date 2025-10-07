import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 1. Data is now grouped by category and includes a 'level' for the hover effect.
const skillsByCategory = {
  Frontend: [
    { name: "HTML5", icon: "vscode-icons:file-type-html", level: 95 },
    { name: "CSS3", icon: "vscode-icons:file-type-css", level: 90 },
    { name: "JavaScript", icon: "logos:javascript", level: 85 },
    { name: "TypeScript", icon: "logos:typescript-icon", level: 80 },
    { name: "React", icon: "logos:react", level: 90 },
    { name: "Tailwind CSS", icon: "logos:tailwindcss-icon", level: 95 },
  ],
  "Backend & Frameworks": [
    { name: "Node.js", icon: "logos:nodejs-icon", level: 80 },
    { name: "Laravel", icon: "logos:laravel", level: 85 },
    { name: "Nest.js", icon: "material-icon-theme:nest", level: 60 },
    { name: "PHP", icon: "logos:php", level: 85 },
    { name: "Codeigniter", icon: "logos:codeigniter-icon", level: 75 },
  ],
  Databases: [
    { name: "MySQL", icon: "logos:mysql", level: 90 },
    { name: "SQLite", icon: "logos:sqlite", level: 70 },
    { name: "PostgreSQL", icon: "logos:postgresql", level: 75 },
  ],
  "Tools & Platforms": [
    { name: "Git", icon: "logos:git-icon", level: 90 },
    { name: "GitHub", icon: "logos:github-icon", level: 90 },
    { name: "VS Code", icon: "logos:visual-studio-code", level: 95 },
    { name: "Figma", icon: "logos:figma", level: 70 },
    { name: "Vite", icon: "logos:vitejs", level: 85 },
    { name: "Laragon", icon: "simple-icons:laragon", level: 80 },
    { name: "Docker", icon: "logos:docker-icon", level: 70 },
    { name: "Postman", icon: "logos:postman-icon", level: 85 },
  ],
};

const SkillSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
    });

    // Dynamically load iconify script
    const script = document.createElement("script");
    script.src = "https://code.iconify.design/3/3.1.0/iconify.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 md:px-9 py-20"
      data-aos="fade-in"
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-12 md:mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          My <span className="text-teal-400">Tech Stack</span>
        </h2>

        {/* 2. Map over the categories in the data object */}
        {Object.entries(skillsByCategory).map(
          ([category, skills], categoryIndex) => (
            <div key={category} className="mb-12">
              <h3
                className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 text-center"
                data-aos="fade-up"
                data-aos-delay={200 + categoryIndex * 100}
              >
                {category}
              </h3>
              <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                data-aos="zoom-in"
                data-aos-delay={300 + categoryIndex * 100}
              >
                {/* Map over the skills for the current category */}
                {skills.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group relative flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-teal-400/20 transition-all duration-300 hover:-translate-y-2"
                    data-aos="flip-up"
                    data-aos-delay={400 + index * 50}
                    data-aos-once="false"
                  >
                    {/* 3. The Icon and Text section */}
                    <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-10">
                      <span className="text-4xl mb-2">
                        <span className="iconify" data-icon={tech.icon}></span>
                      </span>
                      <span className="text-sm md:text-base text-center text-gray-200">
                        {tech.name}
                      </span>
                    </div>

                    {/* 4. The Hover Overlay with Skill Level */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-2xl font-bold text-teal-400">
                        {tech.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default SkillSection;
