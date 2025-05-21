import Intro from "./Components/Intro";
import Header from "./Components/Header";
import Service from "./Components/Services/Services";
import Projects from "./Components/Project/Project";
import EducationXExperiences from "./Components/Experience&Education/Edu&Exp_Parent";

export default function App() {
  return (
    <>
      <Header />
      <Intro />
      <Service />
      <Projects />
      <EducationXExperiences />
    </>
  );
}
