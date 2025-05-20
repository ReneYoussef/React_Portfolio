import me from "../assets/ReneYoussef.png";

export default function Intro() {
  return (
    <div className="AboutMe">
      <div className="AboutMe-image">
        <img src={me} alt="About Image" />
      </div>
      <div className="AboutMe-text">
        <h2>Rene Youssef</h2>
        <h3>Photographer, Websites & Mobile Developer</h3>
      </div>
    </div>
  );
}
