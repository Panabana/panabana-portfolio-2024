import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../Footer";

export default function Series1Post2() {
    return (
        <div>
            <div className="flex-grow text-neutral-200 bg-slate-800 py-8 sm:py-10">
                <div id="projects" className="container mx-auto min-h-dvh justify-center body-font">
                    <div className="container px-5 mx-auto lg:px-40">
                        <p className="text-center font-bold text-base sm:text-xl">
                            <Link
                                to="/Series1"
                                className="hover:text-white">↶
                            </Link>
                        </p>
                        <h2 className="sm:text-xl text-lg text-center italic font-bold mt-5 p-5">
                            2. About Subdomains or Multiple Site Pages
                        </h2>
                        <h3 className="sm:text-base text-xs text-center">
                            Original date: 2023-12-19 | Edited: 2024-01-23
                        </h3>
                        <p className="mx-auto text-base sm:text-lg text-left p-10 w-[99%] sm:w-[65%]">
                            Hi, I’m Alex B.
                            <br /><br />
                            One main objective for this website is to be easy to navigate for the user. I would like to go
                            about achieving this by sectioning different pages for different topics of content. I would like
                            to have a singular anchor which the user could always control to navigate wherever needed. In
                            other words, I want a clear and concise navbar on top.
                            <br /><br />
                            To try and logically divide the website into pages, I decided upon these four clickable texts
                            for the navbar:
                            <br /><br />
                            “Projects”, “Resume”, “Blog”, “Contact”
                            <br /><br />
                            These will go in this exact order from left to right, and would accomplish the task of creating
                            a concise navbar, I think.
                            <br /><br />
                            The next idea was how I was going to implement this website. I could make the simple choice to
                            create a component page each for each URL change.
                            <br /><br />
                            “alexanderbengtsson.com/blog”, “alexanderbengtsson.com/contact”
                            <br /><br />
                            Or, I could create subdomains to redirect in between.
                            <br /><br />
                            “blog.alexanderbengtsson.com”, “contact.alexanderbengtsson.com”
                            <br /><br />
                            Creating subdomains intrigued me since it seemed to incur some additional technical hoops to
                            jump. A good opportunity to gain experience with DNS. But in the end, I chose to skip the
                            subdomain route. The reason for this was because I think subdomains would be less pleasing to
                            the general user.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}