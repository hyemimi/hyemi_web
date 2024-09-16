import './app.scss';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';
import HomeSection from 'components/section/HomeSection';
import { motion, useScroll, useTransform, Variants } from 'framer-motion';
import hyemi from 'assets/images/hyemi.png';
import AboutMeSection from 'components/section/AboutMeSection';
import { useRef } from 'react';
import ProjectSection from 'components/section/ProjectSection';
import ContactSection from 'components/section/ContactSection';
import SkillsSection from 'components/section/SkillsSection';
const App = () => {

  return (
    <div className="background">
      <div className="homepage-container">
        <Header />
        <section id="home" >
          <HomeSection />
        </section>
        <section id="aboutme" >
          <AboutMeSection/>
        </section>
        <section id="skills">
          <SkillsSection />
        </section>
        <section id="projects">
          <ProjectSection />
        </section>
      </div>
    </div>
  );
};

export default App;
