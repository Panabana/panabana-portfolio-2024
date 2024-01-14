import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <div className=" bg-slate-900 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-[4%] md:p-[0.65%] md:flex-row items-center font-mono text-neutral-300 text-xs md:text-lg">
        <div className="absolute invisible lg:visible font-extralight mr-12">
          <p>
            Alexander Bengtsson
          </p>
        </div>
        <nav className="container mx-auto flex flex-wrap items-center justify-center md:mr-auto md:ml-10 md:py-1 md:pl-4 md:border-1 font-semibold md:border-gray-700">
          <Link to="/" className="mr-8 md:mr-24 hover:underline focus:underline">
            Projects
          </Link>
          <Link to="/resume" className="mr-8 md:mr-24 hover:underline focus:underline">
            Resume
          </Link>
          <Link to="/blog" className="mr-8 md:mr-24 hover:underline focus:underline">
            Blog
          </Link>
          <Link to="/contact" className="mr-8 md:mr-24 hover:underline focus:underline">
            Contact
          </Link>
        </nav>
      </div>
      <Outlet />
    </div>
  );
}