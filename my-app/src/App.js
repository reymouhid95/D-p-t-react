import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProjectCard } from "./components/ProjectCard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
