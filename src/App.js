import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Portafolio } from "./components/portafolio/Portafolio";
import { Courses } from "./components/courses/Courses";
import { Topbar } from "./components/topbar/Topbar";
import { Works } from "./components/works/Works";
import "./app.scss";
import { Menu } from "./components/menu/Menu";

function App() {
  
  
  return (
    <div className="app">
      <Topbar/>
      
      <div className = "sections">
         <Intro/>
         <Portafolio/>
         <Works/>
         <Courses/>
         <Contact/>
      
      </div>
    </div>
  );
}

export default App;
