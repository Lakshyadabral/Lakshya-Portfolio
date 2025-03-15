import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import {ProjectsSection} from "@/sections/Projects"
import {TapeSection} from "@/sections/Tape"
import { FutureGoals } from "@/sections/FutureGoals";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { MobileNav } from "@/sections/MobileNav";


export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <ProjectsSection/>
      <TapeSection/>
      <FutureGoals/>
      <AboutSection/>
      <ContactSection/>
      <Footer/>
      <MobileNav/>
    </div>
  );
}
