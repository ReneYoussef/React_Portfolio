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
      <a href=".src/Components/AboutMe.jsx">About</a>
      <a href="">Contact Us</a>
      <a href="">Categories</a>
      <a href="">Cart</a>
      <button>Lets Talk</button>
    </div>
    
  </nav>
</header>

  );
}
