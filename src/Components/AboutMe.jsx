import me from "../assets/ReneYoussef.png";

export default function AboutME() {
  return (
    <div class="AboutMe">
      <div class="AboutMe-image">
        <img src={me} alt="About Image" />
      </div>
      <div class="AboutMe-text">
        <h2>Rene Youssef</h2>
        <h3>Photographer, Websites & Mobile Developer</h3>
      </div>
    </div>
  );
}
