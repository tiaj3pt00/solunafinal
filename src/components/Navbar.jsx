import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm mt-1 border-bottom border-2 border-light">
      {/* Enhanced Brand Logo with Diamond Icon */}
      <Link to="/" className="navbar-brand fw-bold d-flex align-items-center">
        <span className="me-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 200 200">
            <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="#0dcaf0" opacity="0.9" />
            <path d="M100 20 L100 180 M20 100 L180 100" stroke="white" strokeWidth="4" />
            <path d="M40 60 L160 60 L100 180 Z" fill="white" opacity="0.2" />
            <path d="M40 140 L160 140 L100 20 Z" fill="white" opacity="0.2" />
            <circle cx="100" cy="100" r="8" fill="white" />
            <path d="M100 70 L100 130 M70 100 L130 100" stroke="white" strokeWidth="3" />
          </svg>
        </span>
        <span className="d-flex flex-column">
          <span className="fs-4 lh-1" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Soluna</span>
          <span className="text-info lh-1" style={{ 
            letterSpacing: '3px', 
            fontSize: '0.75rem',
            fontFamily: "'Montserrat', sans-serif",
            fontWeight: 600
          }}>JEWELRY</span>
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Navbar Links */}
      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto">
          <li className="nav-item mx-2">
            <b>
              <Link to="/" className="nav-link position-relative px-3">
                <span className="nav-link-hover">Glance at Jewelry</span>
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-info" style={{ 
                  height: '2px', 
                  width: '0%', 
                  transition: 'width 0.3s ease' 
                }}></span>
              </Link>
            </b>
          </li>
          <li className="nav-item mx-2">
            <b>
              <Link to="/addjewelry" className="nav-link position-relative px-3">
                <span className="nav-link-hover">Sell Jewelry</span>
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-info" style={{ 
                  height: '2px', 
                  width: '0%', 
                  transition: 'width 0.3s ease' 
                }}></span>
              </Link>
            </b>
          </li>
        </ul>

        {/* Authorization Links (Aligned Right) */}
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-2">
            <b>
              <Link to="/aboutus" className="nav-link position-relative px-3">
                <span className="nav-link-hover">About us</span>
                <span className="position-absolute bottom-0 start-50 translate-middle-x bg-info" style={{ 
                  height: '2px', 
                  width: '0%', 
                  transition: 'width 0.3s ease' 
                }}></span>
              </Link>
            </b>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signin" className="btn btn-outline-info me-2 px-3 py-2 rounded-pill border-2 fw-bold">
              Sign In
            </Link>
          </li>
          <li className="nav-item mx-2">
            <Link to="/signup" className="btn btn-info px-3 py-2 rounded-pill border-2 fw-bold shadow-sm">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
      

      {/* Add this style tag for hover effects and fonts */}
      <style jsx>{`
        .nav-link:hover .nav-link-hover {
          color: #0dcaf0 !important;
          transition: color 0.3s ease;
        }
        .nav-link:hover span:last-child {
          width: 70% !important;
        }
        .navbar-brand:hover {
          transform: scale(1.02);
          transition: transform 0.3s ease;
        }
      `}</style>
      
      {/* Add Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Montserrat:wght@600&display=swap" rel="stylesheet" />
    </nav>
  );
};

export default Navbar;