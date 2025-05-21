import me from "../assets/ReneYoussef.png";
import backgroungImage from "../assets/dots.jpg"

export default function Intro() {
  return (
    <div className="AboutMe">
      <img className="AboutMe-backgroungImage"  src={backgroungImage} alt="" />
      <div className="AboutMe-image">
        <img src={me} alt="About Image" />
      </div>
      <div className="AboutMe-text">
        <h3>
          Hi, I'am <span> Rene Youssef</span>{" "}
        </h3>

        <h4>Computer Science Graduate</h4>
      </div>
      <div className="AboutMe-Intro">
        <p>
          
          I’m driven by the challenge of turning complex problems into simple,
          elegant solutions that people enjoy using every day.
        </p>
      </div>

      <div className="AboutMe-info">
        <h2 className="Info-Number">1</h2>
        <span className="Info-Text">Years of Experience</span>
        <h2 className="Info-Number">3</h2>
        <span className="Info-Text">Projects Done</span>
      </div>


      <div className="About_buttons">
        <button type="submit">Download Cv</button>
        {/* <button>Gallery</button> */}
      </div>
    </div>
  );
}
