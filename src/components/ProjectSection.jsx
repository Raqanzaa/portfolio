import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import BrandGuidelines from "../assets/Brand-Guidelines.png";
import Emoney from "../assets/E-money.png";
import EndySport from "../assets/Endy-Sport.png";
import PressureSampah from "../assets/Pressure-Sampah.png";
import LaundryBlues from "../assets/Laundry-Blues.png";
import PijatIn from "../assets/Pijatin.png";
import AmbilPaket from "../assets/Ambil-Paket.png";
import PustakaSyabab from "../assets/Pustaka-Syabab.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const ProjectSection = () => {
  const projects = [
    {
      img: PressureSampah,
      title: "Website Pressure Sampah",
      desc: "Pressure Sampah (Percentage of Recycling Success) is an application to track and assess how effective waste recycling is.",
      link: "https://medium.com/@ahmadrozaq34/pressure-sampah-sistem-monitoring-efektivitas-daur-ulang-sampah-b3e7f75f15f3",
    },
    {
      img: Emoney,
      title: "Website Keuangan Pribadi",
      desc: "A web-based personal finance application designed to help users manage and track their finances efficiently.",
      link: "https://medium.com/@ahmadrozaq34/e-money-aplikasi-manajemen-keuangan-pribadi-ef527e520498",
    },
    {
      img: EndySport,
      title: "Web E-commerse UMKM Sepatu",
      desc: "A simple website to help growing small businesses (UMKM) as a platform for online sales.",
      link: "https://medium.com/@ahmadrozaq34/endy-sport-website-company-profile-umkm-sepatu-olahraga-9b5b3173b1bc",
    },
    {
      img: BrandGuidelines,
      title: "Brand Guidelines Design",
      desc: "Created logo designs and brand guidelines for the Pustaka Syabab bookstore.",
      link: "https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing",
    },
    {
      img: LaundryBlues,
      title: "Website Laundry Blues",
      desc: "LaundryBlues is a web application for ordering laundry pick-up and delivery services online, making it easy for customers to do laundry without leaving home.",
      link: "https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing",
    },
    {
      img: PijatIn,
      title: "Website Pijat.in",
      desc: "Pijat.in is a web application for booking massage services online, connecting professional therapists with customers who need health treatments.",
      link: "https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing",
    },
    {
      img: AmbilPaket,
      title: "Website Ambil Paket",
      desc: "AmbilPaket is a web application for package delivery, similar to courier services like JNE, providing convenience in shipping goods to various destinations.",
      link: "https://drive.google.com/drive/folders/1lbJq-LpKGeU08042w-sykOI8Wcj7DRpR?usp=sharing",
    },
    {
      img: PustakaSyabab,
      title: "E-commerce Pustaka Syabab",
      desc: "PustakaSyabab is a web-based e-commerce application for online book sales, offering a wide collection of literature with an easy and fast purchasing process.",
      link: "https://medium.com/@ahmadrozaq34/e-commerce-pustaka-syabab-3a6e652f21f5",
    },
  ];

  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false, // Allow animations to repeat
      mirror: true
    });
  }, []);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const ProjectCard = ({ project, isMobile, isActive, onClick }) => {
    return (
      <div
        className={`relative overflow-hidden rounded-lg shadow-lg ${isMobile
            ? "bg-white dark:bg-transparent mx-auto w-full"
            : "group bg-white dark:bg-transparent"
          }`}
        style={{ height: "250px" }}
        onClick={isMobile ? onClick : undefined}
        data-aos="flip-up"
        data-aos-once="false"
      >
        <h3 className="text-md text-center font-medium p-3 text-gray-800 dark:text-white">
          {project.title}
        </h3>
        <img
          src={project.img}
          alt={project.title}
          className="w-full h-40 md:h-48 object-contain"
        />
        <div
          className={`absolute inset-0 bg-black/70 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isMobile
              ? isActive
                ? "opacity-100"
                : "opacity-0"
              : "opacity-0 group-hover:opacity-100"
            }`}
        >
          <p className="text-gray-300 text-xs md:text-sm mb-4 text-center">
            {project.desc}
          </p>
          <a
            href={project.link}
            className={`${isMobile ? "px-3 py-1.5" : "px-4 py-2"
              } text-gray-200 border-2 border-gray-200 rounded-md text-sm md:text-base hover:bg-gray-600 transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            See Detail
          </a>
        </div>
      </div>
    );
  };

  return (
    <section
      id="project"
      className="min-h-screen flex items-center px-4 md:px-9 py-6 md:py-20"
      data-aos="fade-in"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-8 md:mb-16"
          data-aos="fade-down"
          data-aos-delay="100"
          data-aos-once="false"
        >
          My <span className="text-teal-400">Project</span>
        </h2>

        {/* Desktop Grid */}
        <div
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-once="false"
        >
          {projects.map((project, index) => (
            <div
              key={`desktop-${index}`}
              className="group"
              data-aos="flip-up"
              data-aos-delay={300 + (index * 100)}
              data-aos-once="false"
            >
              <ProjectCard project={project} isMobile={false} />
            </div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div
          className="md:hidden px-2"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-once="true"
        >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="w-full"
          >
            {Array.from({ length: Math.ceil(projects.length / 2) }).map((_, index) => {
              const pair = [
                projects[index * 2],
                projects[index * 2 + 1]
              ].filter(Boolean);

              return (
                <SwiperSlide
                  key={`mobile-pair-${index}`}
                >
                  <div className="grid grid-cols-1 gap-4">
                    {pair.map((project, subIndex) => (
                      <ProjectCard
                        key={`mobile-${index * 2 + subIndex}`}
                        project={project}
                        isMobile={true}
                        isActive={activeCard === (index * 2 + subIndex)}
                        onClick={() => handleCardClick(index * 2 + subIndex)}
                      />
                    ))}
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;