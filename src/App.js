import './App.css';

// components
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import BackBtn from './components/backBtn/BackBtn';

// containers
import Hero from './containers/hero/Hero';
import About from './containers/about/About';
import Skills from './containers/skills/Skills';
import Projects from './containers/projects/Projects';
import Contact from './containers/contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackBtn />
    </>
  );
}

export default App;
