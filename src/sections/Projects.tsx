import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg'
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg'
import grainImage from '@/assets/images/grain.jpg'
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import GithubIcon from "@/assets/icons/GithubIcon.svg"


const portfolioProjects = [
  {
    company: "WeVibe",
    year: "2025",
    title: "AI-Powered Roommate Matching App",
    results: [
      { title: "Real-time roommate matching using lifestyle and habit preferences" },
      { title: "AI-based compatibility scoring powered by Together API" },
      { title: "Live chat and notifications with Socket.io integration" },
    ],
    link: "https://we-vibe-green.vercel.app/auth/sign-in",
    github: "https://github.com/Lakshyadabral/WeVibe/tree/main",
    image: lightSaasLandingPage,
  },
  {
    company: "Wanderlust",
    year: "2025",
    title: "Full Stack Listing Platform",
    results: [
      { title: "Dynamic listing management: add, view, and edit home listings" },
      { title: "Robust data management powered by MongoDB" },
      { title: "Secure user authentication using Passport.js" },
    ],
    link: "https://wanderlust-fullstack-app.onrender.com/listings",
    github: "https://github.com/Lakshyadabral/wanderlust-fullstack-app/tree/main",
    image: darkSaasLandingPage,
  },
  {
    company: "SecureTrust Bank (Simulated)",
    year: "2026",
    title: "ML-Based Loan Approval Predictor",
    results: [
      { title: "Built an end-to-end loan approval system using Logistic Regression, KNN, and Naive Bayes" },
      { title: "Implemented a full ML pipeline with preprocessing, feature engineering, and model evaluation" },
      { title: "Deployed an interactive Streamlit app for real-time loan approval predictions with confidence scores" },
    ],
    link: "https://lakshyadabral-ml-based-loan-approval-predictor-app-w67pmu.streamlit.app/",
    github: "https://github.com/Lakshyadabral/ML-Based-Loan-Approval-Predictor",

    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
  <section className="pb-16 lg:py-24" id="Projects">
  <div className="container">
    <SectionHeader eyebrow="Real-world Results" title="Real-world Results" description="See how I transformed concepts into engaging digital experiences."/>
    <div className=" mt-10 md:mt-20 flex flex-col  gap-20">
      {portfolioProjects.map ( (project , projectIndex) => (
        <Card
        key={project.title} className=" px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky" 
        style = {{
          top: `calc(64px + ${projectIndex * 40}px`
        }} >
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div className="lg:pb-16  ">
            <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
           <span> {project.company} </span>
           <span>&bull;</span>
           <span> {project.year} </span>
           </div>
          <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">{project.title}</h3>
          <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
          <ul className="flex flex-col gap-4 mt-4 md:mt-5">
            {project.results.map( (result , resultIndex) => (
              <li key={resultIndex} className="flex gap-2 text-sm md:text-base text-white/50">
                <CheckCircleIcon className='size-5 md:size-6'/>
                <span>{result.title}</span>
                </li>
            ))}
          </ul>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
              <span>Visit Live Site</span>
              <ArrowUpRightIcon className="size-4" />
            </button>
          </a>

          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2">
              <span>Visit GitHub</span>
              <GithubIcon className="size-4" />
            </button>
          </a>
        </div>

          </div>
          <div className="relative">
         <Image src={project.image} alt={project.title} className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:h-full lg:w-auto lg:max-w-none" />
         </div>
        </div>
      </Card>
      ) ) }
      </div>
    </div>
  </section>
  )

};
