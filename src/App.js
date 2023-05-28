import Navbar from "./components/navbar/Navbar"
import Intro from "./pages/intro/Intro"
import Portfolio from "./pages/portfolio/Portfolio"
import Skills from "./pages/skills/Skills"
import Contact from "./pages/contact/Contact"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";

      // <Skills/>
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Intro/>
      <Portfolio/>

      <Contact/>
    </div>
    </div>
  );
}

export default App;
