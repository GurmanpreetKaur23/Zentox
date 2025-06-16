import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Index', path: '/' },
  { name: 'Home', path: '/home' },
  { name: 'Natural Cures', path: '/natural-cures' },
  { name: 'Get Help', path: '/get-help' },
  { name: 'Tracker', path: '/tracker' },
  { name: 'Recipes', path: '/recipes' },
  { name: 'Profile', path: '/profile' },
];

const Navbar = () => (
  <nav className="bg-white shadow">
    <div className="max-w-4xl mx-auto">
      <ul className="flex space-x-4 p-4 text-gray-700">
        {links.map(link => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'text-indigo-600 font-semibold' : 'hover:text-indigo-500'
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default Navbar;
