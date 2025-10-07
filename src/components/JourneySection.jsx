import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const journeyData = [
    {
        title: "Education",
        items: [
            {
                year: "2021 - Present",
                institution: "Universitas Alma Ata",
                position: "Bachelor of Information Systems",
                description: "Studied various aspects of information technology, including software development, database management, and information systems.",
            },
            {
                year: "2018 - 2021",
                institution: "MAN Kota Mojokerto",
                position: "Science Major",
                description: "Studied the fundamentals of mathematics, physics, and chemistry.",
            },
        ],
    },
    {
        title: "Experience",
        items: [
            {
                year: "1 October 2024 - 1 february 2025",
                institution: "Seven Inc.",
                position: "Frontend Developer | Intern",
                description: "Built web applications using Laravel 10 and Tailwind CSS with Vite.js.",
                link: "https://drive.google.com/file/d/1_c8-cgRaW5R-VXD2ylZnQirk9OScNRLN/view?usp=sharing"
            },
            {
                year: "14 August – 31 December 2023",
                institution: "PT Educa Sisfomedia",
                position: "Web FullStack Developer | MSIB Studi Independent",
                description: "Worked on various portfolio website and online store projects for local clients.",
                link: "https://drive.google.com/file/d/1KD2gtP6Bw4_rkI9l3CShWUcybQ3R4IGL/view?usp=sharing"
            },
        ],
    },
    {
        title: "Certification",
        items: [
            {
                year: "6 Mei - 15 Mei 2024",
                institution: "Freecodecamp.org",
                position: "Resposive Web Design",
                description: "Completed a course on responsive web design, covering HTML, CSS, and accessibility.",
                link: "https://drive.google.com/file/d/1MCdWJJYNyin9vhQ4GH6GNveKrtHNXwY8/view?usp=sharing"
            },
        ],
    },
];

const JourneySection = () => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false, // Allow animations to repeat
            mirror: true
        });
    }, []);

    return (
        <section
            id="journey"
            className="min-h-screen flex items-center justify-center px-4 md:px-9 py-6 md:py-20"
            data-aos="fade-in"
        >
            <div className="w-full max-w-6xl mx-auto">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-transparent dark:text-white mb-10 md:mb-16 relative"
                    data-aos="fade-down"
                    data-aos-delay="100"
                    data-aos-once="false"
                >
                    <span className="text-teal-400">My</span> Journey
                </h2>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    data-aos-once="false"
                >
                    {journeyData.map((section, sectionIndex) => (
                        <div
                            key={section.title}
                            data-aos="fade-right"
                            data-aos-delay={300 + (sectionIndex * 100)}
                            data-aos-once="false"
                        >
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400"
                                data-aos="fade-right"
                                data-aos-delay={400 + (sectionIndex * 100)}
                                data-aos-once="false"
                            >
                                {section.title}
                            </h3>
                            <ul className="space-y-4 md:space-y-6">
                                {section.items.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="bg-gray-600 rounded-lg shadow p-4 border-l-4 border-teal-400"
                                        data-aos="zoom-in"
                                        data-aos-delay={500 + (sectionIndex * 100) + (idx * 50)}
                                        data-aos-once="false"
                                    >
                                        <div className="text-xs md:text-sm text-gray-200 mb-1">
                                            {item.year}
                                        </div>
                                        <div className="font-semibold text-gray-900">
                                            {item.institution}
                                        </div>
                                        <div className="text-gray-900">
                                            {item.position}
                                        </div>
                                        <div className="text-gray-200">{item.description}</div>
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-block mt-2 text-teal-300 hover:underline text-sm"
                                            >
                                                Certificate
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JourneySection;