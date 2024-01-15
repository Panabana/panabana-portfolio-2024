import React from "react";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div>
      <div className="flex-grow text-neutral-200 bg-slate-800 py-8 sm:py-10">
        <div id="projects" className="container mx-auto min-h-dvh justify-center body-font">
          <div className="container px-5 mx-auto text-center lg:px-40">
            <div className="text-lg">
              <h2 className="sm:text-xl mt-5">
                Hi, I'm Alexander Bengtsson
                <p> </p>
                <a
                  href="https://www.github.com/panabana/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline">
                  GitHub: (@Panabana)
                </a>
                <br className="hidden lg:inline-block" />
              </h2>
              <h3 className="p-2  mb-6">
                Thanks for checking out this website
              </h3>
            </div>
            <div className="font-medium font-mono text-[2rem] md:text-[3rem] p-4 mt-32">
              <h3>
                My projects:
              </h3>
            </div>
            <div className="grid grid-rows-2 grid-cols-1 ">
              <div className="container mx-auto place-content-center">
                <p className="text-lg sm:text-xl font-medium p-6 italic">
                  The Inventory Management System
                </p>
                <p className="text-base font-normal p-4">
                  Two different frontend apps in different programming languages, connected to the same backend database.
                  <br />
                  <a
                    className="text-sky-600 hover:underline font-bold"
                    href="https://github.com/Panabana/sfc-inventory-management-system-web"
                    target="_blank"
                    rel="noopener noreferrer"
                  >1 web app built with JS and JQuery (further details) </a>
                  and
                  <br />
                  <a
                    className="text-sky-600 hover:underline font-bold"
                    href="https://github.com/Panabana/sfc-inventory-management-system-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >1 desktop app built with C# (further details).</a>
                  <br />
                  I built these two apps together with a team of five people.
                  <br />
                  We built our own internal tooling and built the apps so that data would persist between our client side and Java server.
                </p>
                <div className="container mx-auto w-[95%] md:w-[60%]">
                  <img
                    src="./screenshots/startScreenIMS.png"
                    alt="Screenshot of the Inventory Management System start screen" />
                </div>
              </div>
              <div>
                <p className="text-lg sm:text-xl font-medium italic mt-28 p-6">
                  Personal Website
                </p>
                <a
                  href="https://github.com/Panabana/panabana-portfolio-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline">
                  Link to GitHub repo.
                </a>
                <p className="text-base font-normal p-4">
                  This website, of course.
                  <br />
                  Built with React, Tailwind and React Router.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}