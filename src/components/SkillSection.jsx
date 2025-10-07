import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const techStack = [
  // Frontend
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },

  // Backend
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "PHP", icon: "logos:php" },

  // Frameworks
  { name: "Codeigniter", icon: "logos:codeigniter-icon" },

  // Database
  { name: "MySQL", icon: "logos:mysql" },
  { name: "SQLite", icon: "logos:sqlite" },
  { name: "PostgreSQL", icon: "logos:postgresql" },

  // Tools
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "VS Code", icon: "logos:visual-studio-code" },
  { name: "Figma", icon: "logos:figma" },
  { name: "Vite", icon: "logos:vitejs" },
  { name: "Laragon", icon: "simple-icons:laragon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Postman", icon: "logos:postman-icon" },
];

const SkillSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            mirror: true
        });

        // Dynamically load iconify script
        const script = document.createElement('script');
        script.src = 'https://code.iconify.design/3/3.1.0/iconify.min.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center justify-center px-4 md:px-9 py-6 md:py-20"
            data-aos="fade-in"
        >
            <div className="w-full max-w-6xl mx-auto">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-10 md:mb-16"
                    data-aos="fade-down"
                    data-aos-delay="100"
                >
                    My <span className="text-teal-400">Tech Stack</span>
                </h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
                    data-aos="zoom-in"
                    data-aos-delay="200"
                >
                    {techStack.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-teal-400/20 transition-all duration-300 hover:-translate-y-1"
                            data-aos="flip-up"
                            data-aos-delay={300 + (index * 50)}
                            data-aos-once="false"
                        >
                            <span
                                className="text-4xl mb-2"
                                data-icon={tech.icon}
                            >
                                <span className="iconify" data-icon={tech.icon}></span>
                            </span>
                            <span className="text-sm md:text-base text-center text-gray-200">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* <div className="mt-16 text-center" data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-200 mb-6">
                        And many more tools I work with...
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {["Jest", "Postman", "Netlify", "Artificial Intellegence", "Firebase", "Jira"].map((tool) => (
                            <span
                                key={tool}
                                className="px-4 py-2 bg-gray-700 rounded-full text-gray-200 text-sm"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default SkillSection;