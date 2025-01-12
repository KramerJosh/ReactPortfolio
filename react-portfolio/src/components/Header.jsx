

//Constants can be declared up here
function Header({ setPage }) {

  const pageButton = (pageName) => {
    setPage(pageName);  // Update state in App.jsx
    console.log(`Navigating to: ${pageName}`);
  };

  return (
    <div className="header">        
            <nav className="navbar">
              <ul className="nav-items">
                <li className="nav-item"><button onClick={() => pageButton('About')}>About</button></li>
                <li className="nav-item"><button onClick={() => pageButton('Portfolio')}>Portfolio</button></li>
                <li className="nav-item"><button onClick={() => pageButton('Contact')}>Contact</button></li>
                <li className="nav-item"><button onClick={() => pageButton('Resume')}>Resume</button></li>
              </ul>
            </nav>
    </div>
  );
}

export default Header;
