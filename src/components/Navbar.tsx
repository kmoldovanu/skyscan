import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/booking" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>Booking</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/my-trips" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>My Trips</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
