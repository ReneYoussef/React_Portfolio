import logo from"../assets/logo.png"

export default function Header() {
  return (
   <header className="header">
  <nav className="nav">
   
    <div className="nav-title">
       <img src={logo} alt="" />
    <a href="/" className="header-text">Rene Youssef</a>
    </div>
    <div className="nav-links">
      <a href="">Services</a>
      <a href="">Projects</a>
      <a href="">Skills</a>
     
      <button>Lets Talk</button>
    </div>
    
  </nav>
</header>

  );
}
