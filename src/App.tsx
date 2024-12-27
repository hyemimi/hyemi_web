import './app.scss';
import Header from 'components/layout/Header';
import HomeSection from 'components/section/HomeSection';
import AboutMeSection from 'components/section/AboutMeSection';
import ProjectSection from 'components/section/ProjectSection';
import SkillsSection from 'components/section/SkillsSection';
import { HashRouter as Router } from 'react-router-dom'; 

const App = () => {

  return (
    <Router>
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
    </Router>
  );
};

export default App;
