import React from "react";
import Footer from "./Footer";

export default function Resume() {
  return (
    <div>
      <div className="flex-grow text-neutral-200 bg-slate-800 py-8 sm:py-10">
        <div id="projects" className="container mx-auto min-h-dvh justify-center body-font">
          <div className="container mx-auto px-5 lg:px-40 text-center">
            <div>
              <h2 className="invisible">
                Resume
              </h2>
            </div>
            <div className="grid grid-flow-row auto-row-max">
              <div className="mb-10">
                <h3 className="text-left font-bold text-3xl mt-4 mb-4">
                  Skills
                </h3>
                <p className="text-left text-lg sm:text-2xl mt-4 mb-4">
                  ★★★: Java, JavaScript                        <br />
                  ★★☆: React, EJB 3.0, Git                          <br />
                  ★☆☆: Azure, TypeScript, C#             <br />
                  <br />
                  Web & Data: JS, TS, HTML5, CSS3, Tailwind, Bootstrap, SQL Server
                </p>
              </div>
              <div className="text-left mb-6">
                <p className="text-left font-bold text-3xl">
                  Experiences
                </p>
                <p className="mt-4 mb-4 font-medium text-left text-base sm:text-2xl">
                  Spring Internship | Tetra Pak
                  <br />
                  2024
                </p>
                <p>
                  Recently started, ongoing until March 2023.
                </p>
                <br />
                <p className="mt-4 mb-4 font-medium text-left text-base sm:text-2xl">
                  Installation Technician | Netsecurity
                  <br />
                  2023–2024
                </p>
                <ul className="text-left">
                  <li>
                    Output = Contractor for Dell. Installed datacenter products on-site for various small to medium sized enterprises.
                  </li>
                  <li>
                    Output = Rack & Stack, installation and IP configuration of a 1-4RU form factor in 30 minutes.
                  </li>
                  <br />
                  <li>
                    Outcome = Sole primary responsible technician for customers in southern Sweden
                  </li>
                  <li>
                    Outcome = Received additional support role towards colleagues in Gothenburg and Copenhagen
                  </li>
                  <br />
                  <li>
                    Tech utilized = Dell Storage & Compute products, IP configuration
                  </li>
                </ul>
                <br />
                <p className="text-left mt-4 mb-4 font-medium text-base sm:text-2xl">
                  IT Support | Lund University
                  <br />
                  2022–2024
                </p>
                <ul className="text-left">
                  <li>
                    Output = Team saw roughly 25 colleagues come and go. 2nd highest amount of completed tickets in team, once I left.
                  </li>
                  <li>
                    Output = 1 ticket is 1 person's self-contained IT issue on PC/Mac. I averaged 20 tickets/day.
                  </li>
                  <br />
                  <li>
                    Outcome = Built 6 automated answers to common ticket issues.
                  </li>
                  <li>
                    Outcome = Compiled data, which have been used for optimizing the support's opening hours.
                  </li>
                  <br />
                  <li>
                    Tech utilized = ServiceNow, HTML5
                  </li>
                </ul>
              </div>
              <div className="text-left mb-8">
                <h3 className="font-bold text-3xl mt-4 mb-4">
                  Certificates
                </h3>
                <div className="mt-2">
                  <a
                    href="https://www.freecodecamp.org/certification/panabana/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:text-xl hover:underline">"Responsive Web Design" from freeCodeCamp.org
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="https://www.freecodecamp.org/certification/panabana/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:text-xl hover:underline">"JavaScript Algorithms and Data structures" from freeCodeCamp.org
                  </a>
                </div>
              </div>
              <div className="text-left mb-8">
                <h3 className="mt-2 sm:mt-8 font-bold text-3xl">
                  Education
                </h3>
                <p className="text-xl mt-4">
                  Information Systems at Lund University | 2020-2024
                  <br />
                  Bachelor’s degree 
                  <br />
                  ECTS Grade = “B”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div >
  );
}