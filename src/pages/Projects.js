import React from "react";
import Footer from "./Footer";

export default function Projects() {
  return (
    <div>
      <div className="flex-grow text-neutral-200 bg-slate-800 py-8 sm:py-10">
        <div id="projects" className="container mx-auto min-h-dvh justify-center body-font">
          <div className="container px-5 mx-auto text-left lg:px-40">
            <div>
              <h2 className="text-xl mt-5">
                Hi, I'm Alexander Bengtsson. Thanks for checking out this website.
              </h2>
              <a
                href="https://www.github.com/panabana/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-sky-600 hover:underline">
                GitHub: (@Panabana)
              </a>
              <br className="hidden lg:inline-block" />
            </div>
            <div className="font-medium font-mono text-[2rem] md:text-[3rem] mt-10 mb-4">
              <h3>
                My projects:
              </h3>
            </div>
            <div className="grid grid-rows-2 grid-cols-1 ">
              <div className="container w-[60%] mb-8">
                <h4 className="text-lg sm:text-xl font-medium mt-4 italic">
                  The Inventory Management System
                </h4>
                <p className="text-base font-normal mt-4 mb-4">
                  Built to maintain and organize a given warehouse's inventory.
                  <br />
                  Two frontend apps were built in different programming languages. Java was used for the backend. SQL Server was used for the database.
                  <br />
                  <a
                    className="text-sky-600 hover:underline font-bold"
                    href="https://github.com/Panabana/sfc-inventory-management-system-web"
                    target="_blank"
                    rel="noopener noreferrer"
                  >The web app built with JS and JQuery (further details) </a>
                  <br />
                  <a
                    className="text-sky-600 hover:underline font-bold"
                    href="https://github.com/Panabana/sfc-inventory-management-system-app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >The desktop app built with C# (further details)</a>
                  <br /><br />
                  I built these two apps together with a team of five people. We built our own internal tooling and built the apps so that data would persist between our client side and Java server.
                </p>
                <div className="container w-[95%] md:w-[100%]">
                  <img
                    src="./screenshots/startScreenIMS.png"
                    alt="Screenshot of the Inventory Management System start screen" />
                </div>
              </div>
              <div className="container w-[60%] mb-0">
                <h4 className="text-lg sm:text-xl font-medium mt-6 italic">
                  Personal Website
                </h4>
                <a
                  href="https://github.com/Panabana/panabana-portfolio-2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline">
                  Link to GitHub repo.
                </a>
                <p className="text-base font-normal mt-4">
                  This website, of course.
                  <br />
                  Built with React, Tailwind, Node.js and React Router.
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