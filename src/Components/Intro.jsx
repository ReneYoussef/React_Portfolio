import me from "../assets/ReneYoussef.png";

export default function Intro() {
  return (
    <div className="AboutMe">
      <div className="AboutMe-image">
        <img src={me} alt="About Image" />
      </div>
      <div className="AboutMe-text">
        <h3>Hi, I'am <span> Rene Youssef</span> </h3>
        
        <h4>Photographer, Websites & Mobile Developer</h4>
      </div>
      <div className="AboutMe-Intro">
        <p>I’m driven by the challenge of turning complex problems into simple, elegant solutions that people enjoy using every day.
           When I’m not coding, you’ll find me hiking and capturing moments with my camera — a reminder to always stay curious and creative.</p>
      
      </div>

      <div className="AboutMe-info">
<h2 className="Info-Number">1</h2>
<span className="Info-Text">Years of Experience</span>
<h2 className="Info-Number">3</h2>
<span className="Info-Text">Projects Done</span>
      </div>
    </div>
  );
}
