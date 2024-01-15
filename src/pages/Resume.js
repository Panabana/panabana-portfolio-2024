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
              <p className="text-base mx-auto w-[85%] sm:w-[55%] p-2 md:p-8">
                This is my resume. I hope it will show my level of discipline and aptitude for learning. I have worked every year of my life since 2014.
                In 2020, I started my career path towards the software industry, and I have never looked back.
              </p>
            </div>
            <div className="grid grid-rows-4">
              <div>
                <h3 className="p-4 mt-8 font-medium text-2xl">
                  Skills
                </h3>
                <p className="text-left text-lg sm:text-2xl p-4">
                  ★★★: Java, JavaScript                        <br />
                  ★★☆: React, EJB 3.0, Tailwind CSS            <br />
                  ★☆☆: Azure, Git, TypeScript, C#, Bootstrap   <br />
                  <br /><br />
                  Web & Data: JS, TS, HTML5, CSS3, SQL Server
                </p>
              </div>
              <div>
                <p className="font-medium text-2xl">
                  Experiences
                </p>
                <p className="p-6 font-medium text-base sm:text-2xl mt-6">
                  Installation Technician | Netsecurity | 2023–2024
                </p>
                <ul className="text-left">
                  <li>
                    Output = Contractor for Dell. Installed datacenter products on-site for various small to medium sized enterprises.
                  </li>
                  <li>
                    Output = Rack & Stack, installation and IP configuration of a 1-4RU form factor in 30 minutes.
                  </li>
                  <li>
                    Outcome = Sole primary responsible technician for customers in southern Sweden
                  </li>
                  <li>
                    Outcome = Additionally, supported colleagues in Gothenburg and Copenhagen
                  </li>
                  <li>
                    Tech = Dell Storage & Compute products, IP configuration
                  </li>
                </ul>
                <br />
                <p className="p-6 font-medium text-base sm:text-2xl mt-6">
                  IT Support | Lund University | 2022–2024
                </p>
                <ul className="text-left">
                  <li>
                    Output = Team saw roughly 20 colleagues come and go. At the time of my resignation, 2nd highest amount of completed tickets across team.
                  </li>
                  <li>
                    Output = 1 ticket is 1 person's self-contained IT issue pn PC/Mac. My average: 20 tickets/day.
                  </li>
                  <li>
                    Outcome = Built 6 automated answers to common ticket issues.
                  </li>
                  <li>
                    Outcome = Compiled data, which have been used for tuning the team’s open hours.
                  </li>
                  <li>
                    Tech = ServiceNow, HTML5
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="p-6 font-medium text-2xl mt-[15%]">
                  Certificates
                </h3>
                <div className="p-2">
                  <a
                    href="https://www.freecodecamp.org/certification/panabana/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:text-xl hover:underline">"Responsive Web Design" from freeCodeCamp.org
                  </a>
                </div>
                <div className="p-2">
                  <a
                    href="https://www.freecodecamp.org/certification/panabana/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sm:text-xl hover:underline">"JavaScript Algorithms and Data structures" from freeCodeCamp.org
                  </a>
                </div>
              </div>
              <div>
                <h3 className="p-4 mt-2 sm:mt-8 font-medium text-2xl">
                  Education
                </h3>
                <p className="text-xl p-4">
                  Bachelor’s degree | Information Systems at Lund University | 2020-2024    <br />
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