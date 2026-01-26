import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | <Link to="/booking">Booking</Link> | <Link to="/my-trips">My Trips</Link>
    </nav>
  );
}
