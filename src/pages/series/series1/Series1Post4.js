import React from "react";
import Footer from "../../Footer";

export default function Series1Post4() {
    return (
        <div>
            <div className="flex-grow text-neutral-200 bg-slate-800 py-8 sm:py-10">
                <div id="projects" className="container mx-auto min-h-dvh justify-center body-font">
                    <div className="container px-5 mx-auto lg:px-40">
                        <h2 className="sm:text-xl text-lg text-center italic font-bold mt-5 p-5">
                            4. Live Publishing & Post Publishing
                        </h2>
                        <h3 className="sm:text-base text-xs text-center">
                            Original date: 2024-01-23 | Edited: 2024-01-23
                        </h3>
                        <p className="mx-auto text-base sm:text-lg text-left p-10 w-[99%] sm:w-[65%]">
                            Hi, I’m Alex B.
                            <br /><br />
                            A quick thank you for looking through this dev blog.
                            <br /><br />
                            This series will focus on the development of this
                            personal website. What decisions I’ve chosen, what made me choose them, etc.
                            <br /><br />
                            This dev blog is focused at maximizing its usefulness, so all entries will try to follow these 3 points:
                            Focused towards entry-level developers
                            Objective and basic language
                            Universal and longstanding relevance
                            <br /><br />
                            Let’s get to it. This first entry will document the initial start of this personal website (alexanderbengtsson.com),
                            as well as the 1st and 2nd iteration of the front-end for this website.
                            <br /><br />
                            For this entry, let us focus on answering the question: “How do you set up a React page as simply as possible?”
                            <br /><br />
                            For those who do not know, the answer is easy:
                            <br />
                            <a
                                href="https://react.dev/learn/start-a-new-react-project"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-500 hover:underline">
                                create-react-app
                            </a>
                            <br /><br />
                            My website domain was bought, 26th of April 2023, for the purpose of hosting my personal showcase website.
                            Unfortunately, it was purchased through Google Domains, which was sold to Squarespace about 7 weeks later.
                            Squarespace would officially announce this on the 15th of June 2023.
                            <br /><br />
                            Squarespace Enters Definitive Agreement to Acquire Google Domains Assets — The Official Squarespace Newsroom
                            <br /><br />
                            Reed Barger has a quick and easy React guide on freeCodeCamp.org, which was initially used to just help me get
                            a website out.
                            <br />
                            How to Build a Portfolio Website with React
                            <br /><br />
                            This was my first experience with React. I put out the site over the week after buying the domain, and then called it a day.
                            Here’s a screenshot of the first iteration of the website.
                            <br />
                            <div className="container mx-auto w-[90%] p-8">
                                <img
                                    src="./screenshots/firstIterationOfPersonalSite.png"
                                    alt="Screenshot of the first UI of this website, a one-pager" />
                            </div>
                            <br />
                            My photo has been removed to maintain objectivity of this website (doesn’t really matter,
                            it’s easy to find an actual picture of me since I link to my LinkedIn in the footer).
                            <br /><br />
                            This screenshot shows that the first iteration was a boring page, which mainly consisted of bullet points of my skills,
                            taken straight from my resume.
                            <br /><br />
                            Of course, the original idea was to showcase my job capabilities to the public - at the time of writing, that is
                            still the website’s main purpose. But the 1st version was so haphazard that it would fail at impressing anyone really,
                            to put it crassly. I didn’t even bother putting up any projects (because I didn’t have any at the time,
                            outside of school projects).
                            <br /><br />
                            I returned to this website towards the final weeks of December 2023, to try and carve out the appropriate amount of time to build a 2nd iteration. It is now January 2024.
                            <br /><br />
                            So I initially chose React because it’s the most popular frontend framework [link/source?]
                            <br /><br />
                            No large reason to change from React. It is popular for many entry-level jobs, so might be valuable to learn how to use more in depth.
                            <br /><br />
                            There are two goals for this 2nd iteration:
                            <br />
                            1. Break up the web site into multiple logical parts
                            <br />
                            2. Create a more dynamic UI
                            <br /><br />
                            These two goals will each be discussed in the coming entries.

                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}