import {useContext} from "react"
import Intro from "./components/intro/Intro"
import About from "./components/about/About"
import Contacts from "./components/contacts/Contacts"
import Toggle from "./components/toggle/Toggle"
import Projects from "./components/projects/Projects"
import Timeline from "./components/Timeline/Timeline"
import Navbar from "./components/navbar/Navbar"
import {ThemeContext} from "./context"


const App = () => {
    const theme = useContext(ThemeContext)
    return (
      <div>
          <section id="home"/>
          <Navbar/>
          <Intro />
          <section id="about"/>
          <About />
          <Projects />
          <section id="contact"/>
          <Contacts />
    </div>
  );
};

export default App;
