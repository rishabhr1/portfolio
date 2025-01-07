import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experiences from './components/experiences/Experiences';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Achievements from './components/achievements/Achievements';
import Work from './components/work/Work';

function App() {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
