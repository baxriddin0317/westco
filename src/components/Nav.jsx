import React, { useState } from "react";
import {Link} from "react-router-dom"

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
      <>
        <div className="flex flex-wrap py-2">
          <div className="w-full px-2">
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-zinc-500 rounded">
              <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                  <Link
                    className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    to="/"
                  >
                    Logo
                  </Link>
                  <button
                    className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setMenuOpen(!menuOpen)}
                  >
                    menu
                  </button>
                </div>
                <div
                  className={
                    "lg:flex flex-grow items-center" +
                    (menuOpen ? " flex" : " hidden")
                  }
                  id="example-navbar-info"
                >
                  <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                    <li className="nav-item"  onClick={() => setMenuOpen(!menuOpen)}>
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/"
                      >
                        kurslar
                      </Link>
                    </li>
                    <li className="nav-item"  onClick={() => setMenuOpen(!menuOpen)}>
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/kitoblar"
                      >
                        Kitoblar
                      </Link>
                    </li>
                    <li className="nav-item"  onClick={() => setMenuOpen(!menuOpen)}>
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/login"
                      >
                        Sign in
                      </Link>
                    </li>
                    <li className="nav-item"  onClick={() => setMenuOpen(!menuOpen)}>
                      <Link
                        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                        to="/sign"
                      >
                        Sign up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </>
  );
}

export default Nav;
