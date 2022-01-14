import { useRef } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const links = useRef(null);

  const toggleNavbar = () => {
    links.current.classList.toggle("navbar__links--visible");
  };

  return (
    <nav className="navbar">
      <div className="container">
        <header className="navbar__header">
          <img
            src="/images/cherry-blossom.png"
            alt=""
            className="navbar__logo"
          />
          <h1 className="navbar__title">Spring Snack Bar</h1>
        </header>
        <button className="navbar__toggle" onClick={toggleNavbar}>
          <div className="navbar__hamburger"></div>
        </button>
        <ul className="navbar__links" ref={links}>
          <div className="container">
            <li>
              <Link to="/" className="navbar__link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar__link">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/" className="navbar__link">
                Contact
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
