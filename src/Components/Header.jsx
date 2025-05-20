import logo from"../assets/logo.png"

export default function Header() {
  return (
   <header className="header">
  <nav className="nav">
   
    <div className="nav-title">
       <img src={logo} alt="" />
    <h2 className="header-text">Rene Youssef</h2>
    </div>
    <div className="nav-links">
      <a href="/AboutMe">About</a>
      <a href="/Services">Services</a>
      <a href="">Skills</a>
     
      <button>Lets Talk</button>
    </div>
    
  </nav>
</header>

  );
}
