import React from "react";
import Footer from "../../Footer";

export default function Series1Post3() {
    return (
        <div>
            <div className="flex-grow text-neutral-200 bg-slate-800 py-8 sm:py-10">
                <div id="projects" className="container mx-auto min-h-dvh justify-center body-font">
                    <div className="container px-5 mx-auto lg:px-40">
                        <h2 className="sm:text-xl text-lg text-center italic font-bold mt-5 p-5">
                            3. To Create a More Dynamic UI
                        </h2>
                        <h3 className="sm:text-base text-xs text-center">
                            Original date: 2023-12-22 | Edited: 2024-01-23
                        </h3>
                        <p className="mx-auto text-base sm:text-lg text-left p-10 w-[99%] sm:w-[65%]">
                            Hi, I’m Alex B.
                            <br /><br />
                            This is how I went about adding the first batch of content to this portfolio website.
                            <br /><br />
                            Preliminarily, I started with putting some placeholder headers and paragraphs into
                            the different pages. The distinct pages of content in this web app are: “Projects”, “Resume”, “Blog”,
                            “Contact”. Four pages should suffice, as I wanted to have a minimalistic and dynamic UI.
                            <br /><br />
                            To create a more dynamic UI, I set up these goals:
                            <br />1. Make the resolution responsive to mobile, PC and tablet
                            <br />2. Add a light/dark UI button
                            <br />3. Create a fitting pair of header + footer
                            <br /><br />
                            After some googling, Tailwind CSS stuck out to me as a viable option. It seemed to be a good choice to help me fulfill these goals in a quicker and better manner, compared to other frontend tools.
                            As per Tailwind’s documentation:
                            “Tailwind CSS is incredibly performance focused and aims to produce the smallest CSS file possible by only generating the CSS you are actually using in your project.”
                            Optimizing for Production - Tailwind CSS
                            <br /><br />
                            I took most of their marketing at face value and chose Tailwind for its reputation for performance, widespread usage and easygoing development experience.
                            <br /><br />
                            My current personal aspirations are focused on working with the back-end, so I would like to put as little time as possible on the front-end as I can.
                            <br /><br />
                            The Tailwind documentation has a section each for “dark mode” and “responsive design” in their Core Concepts segment:
                            <br /><br />
                            To give myself a fighting chance with the UI, reading the entire Core Concepts segment should be useful.
                            <br /><br />
                            Progress report: I took a 2 week hiatus over the christmas season, and since I started drafting this text. After having skimmed through the Tailwind documentation, and read up on the CSS Box Model, I have almost finished the layout for all components. I have only the “Resume” and “Blog” pages remaining, since they will take the longest time to set up. The goal now is to finish these pages, and then push up to GitHub, so that the live version will update.
                            <br /><br />
                            The next blog post will delve into detail how I’m setting up the GitHub repository with Netlify to make the live web app update through the repo. Implementation of a Dark Mode will be pushed forward. I’ve had to focus on optimizing the mobile version as well.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}