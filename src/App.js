// Import css
import './styles/style.css';
// import components
import Hero from './components/Hero';
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Portfolio/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
