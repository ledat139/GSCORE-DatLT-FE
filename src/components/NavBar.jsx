import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 sticky top-0 bg-white">
      <div className="flex justify-between items-center p-4">
        <a href="/" className="font-bold text-3xl">
          <span className="text-indigo-500">GSCORES</span>
          -DatLT.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 me-24 text-xl font-semibold">
          <li className="hover:text-indigo-500">
            <a href="/">Dashboard</a>
          </li>
          <li className="hover:text-indigo-500">
            <a href="/search">Search</a>
          </li>
          <li className="hover:text-indigo-500">
            <a href="/report">Report</a>
          </li>
        </ul>

        {/* Mobile Button */}
        <div className="md:hidden ">
          <button
            className="text-gray-700 hover:cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 text-lg font-medium">
          <li className="hover:text-indigo-500">
            <a href="/" onClick={() => setMenuOpen(false)}>
              Dashboard
            </a>
          </li>
          <li className="hover:text-indigo-500">
            <a href="/search" onClick={() => setMenuOpen(false)}>
              Search
            </a>
          </li>
          <li className="hover:text-indigo-500">
            <a href="/report" onClick={() => setMenuOpen(false)}>
              Report
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
