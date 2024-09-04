import './app.scss';
import Footer from 'components/layout/Footer';
import Header from 'components/layout/Header';

const App = () => {

  return (
    <div className="background">
      <div className="homepage-container">
        <Header />
        <section id="home">Home</section>
        <section id="aboutme">About me</section>
        <section id="skills">Skills</section>
        <section id="projects">projects</section>
        <section id="contact">contact</section>
        <Footer />
      </div>
    </div>
  );
};

export default App;
