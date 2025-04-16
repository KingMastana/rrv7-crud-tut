import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4">
      <div className="container mx-auto flex items-center justify-between">
        <NavLink to="/" className="text-2xl font-bold text-indigo-600">
          RRV7 Crud
        </NavLink>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-600"
            }
          >
            Items
          </NavLink>
          <NavLink
            to="/new"
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-gray-600"
            }
          >
            New Item
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
