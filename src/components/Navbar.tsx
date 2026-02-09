import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="border-b bg-white dark:bg-zinc-900 dark:border-zinc-800">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center">
          <ul className="flex gap-2">
            <li className="nav-item">
              <NavLink to="/" className={({ isActive }) => 'px-4 py-2 rounded-md text-sm font-medium' + (isActive ? ' bg-cyan-600 text-white' : ' text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-cyan-900 dark:hover:text-white')}>Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/booking" className={({ isActive }) => 'px-4 py-2 rounded-md text-sm font-medium' + (isActive ? ' bg-cyan-600 text-white' : ' text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-cyan-900 dark:hover:text-white')}>Booking</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-trips" className={({ isActive }) => 'px-4 py-2 rounded-md text-sm font-medium' + (isActive ? ' bg-cyan-600 text-white' : ' text-gray-600 hover:bg-gray-100 hover:text-black dark:text-gray-400 dark:hover:bg-cyan-900 dark:hover:text-white')}>My Trips</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
