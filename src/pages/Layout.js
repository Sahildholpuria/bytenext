import React from "react";

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}
      <header class="text-white body-font">
        <div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span class="ml-3 text-xl text-white">ByteNext</span>
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to="/"><a class="mr-5 hover:text-gray-900">Home</a></Link>
            <Link to="/blogs"><a class="mr-5 hover:text-gray-900">Blogs</a></Link>
            <Link to="/contact"><a class="mr-5 hover:text-gray-900">Contact</a></Link>
          </nav>
          <button class="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 hover:text-black rounded text-base text-white mt-4 md:mt-0">
            Login
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Layout;
