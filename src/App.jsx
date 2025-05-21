import Intro from "./Components/Intro";
import Header from "./Components/Header";
import Service from "./Components/Services/Services";
import Projects from "./Components/Project/Project";
import EducationXExperiences from "./Components/Experience&Education/Edu&Exp_Parent";
import Skills from "./Components/Skills/Skills";

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <Service />
      <Projects />
      <EducationXExperiences />
      <Skills/>
    </>
  );
}
