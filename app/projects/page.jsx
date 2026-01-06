"use client";

// Imports
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

// importing assets
import projectMoviex from "../../public/assets/projects/projectMoviex.png";
import projctHomePrice from "../../public/assets/projects/projctHomePrice.png";
import projectQuizApp from "../../public/assets/projects/projectQuizApp.png";
import projectEvoGym from "../../public/assets/projects/projectEvoGym.png";
import projectTodoApp from "../../public/assets/projects/projectTodoApp.png";
import projectPotatoClassification from "../../public/assets/projects/projectPotatoClassification.png";
import projectDiscordMiniroy from "../../public/assets/projects/projectDiscordMiniroy.png";
// import projectMoviex from "../../public/assets/projects/projectMoviex.png";
import WorkSliderButtons from "@/components/WorkSliderButtons";

// Object Array
const projectList = [
  {
    num: "01",
    category: "Fullstack",
    title: "DrinkPanda",
    Description: "An online juice selling e-commerce app",
    stack: [{ name: "NextJs" }, { name: "Laravel" }, { name: "PHP" }, {name: "MySQL"}],
    image: projectMoviex,
    live: "https://github.com/ankonroy/Drink_Panda",
    github: "https://github.com/ankonroy/Drink_Panda",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Movix",
    Description: "A movie info website",
    stack: [{ name: "ReactJs" }],
    image: projectMoviex,
    live: "https://ankonroy.github.io/React_movie_info_app/",
    github: "https://github.com/ankonroy/React_movie_info_app",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Quiz App",
    Description: "A react quiz app of taking quiz online",
    stack: [{ name: "React Js" }, { name: "Node Js" }, { name: "Firebase" }],
    image: projectQuizApp,
    live: "https://react-quiz-26y.pages.dev",
    github: "https://github.com/ankonroy/React_quiz",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Gym TypeScript App",
    Description: "An app build with TypeScript for a gym",
    stack: [{ name: "React Js" }, { name: "TypeScript" }],
    image: projectEvoGym,
    live: "https://gym-typescript-5qq.pages.dev",
    github: "https://github.com/ankonroy/gym-typescript",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "Todo App",
    Description: "A simple todo app to list your todos",
    stack: [{ name: "NestJs" }, { name: "MongoDB" }],
    image: projectTodoApp,
    live: "https://my-todo-app-whr8.onrender.com",
    github: "https://github.com/ankonroy/my_todo_app/tree/master",
  },
  {
    num: "06",
    category: "Deep Learning",
    title: "Potato Disease Classification",
    Description: "Detect Early Blite and Late Blite disease of potatos",
    stack: [{ name: "Python" }, { name: "Tensorflow" }],
    image: projectPotatoClassification,
    live: "https://github.com/ankonroy/potato_disease_classification_project",
    github: "https://github.com/ankonroy/potato_disease_classification_project",
  },
  {
    num: "07",
    category: "Discord Bot",
    title: "miniroy",
    Description: "A Discord server management bot to manage Discord gaming server",
    stack: [{ name: "Python" }, { name: "discord.py" }],
    image: projectDiscordMiniroy,
    live: "https://discord.com/oauth2/authorize?client_id=1454729960119079025",
    github: "https://github.com/ankonroy/Discord_Server_Management_Bot",
  },
  {
    num: "08",
    category: "Machine Learning",
    title: "Real Estate Price Prediction",
    Description: "A Machine Learning project to predict real estate price",
    stack: [{ name: "Python" }, { name: "Sklearn" }],
    image: projctHomePrice,
    live: "https://ml-project-real-estate-price-projec.vercel.app",
    github: "https://github.com/ankonroy/ML-project-Real-Estate-Price-Project",
  },
];

const Projects = () => {
  const [project, setProject] = useState(projectList[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projectList[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.Description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-accent text-xl ">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live link button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github link button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]" 
              onSlideChange={handleSlideChange}
            >
              {projectList.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[470px] relative group flex justify-center items-center bg-pink-50/20">
                    {" "}
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        style={{ objectPosition: "top left" }}
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
