import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './shared/Footer'
import { DarkModeProvider } from "./components/DarkModeContext";


const App = () => {
  return (
    <>
    <DarkModeProvider>

      <Header/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      </DarkModeProvider>
      
    </>
  )
}

export default App