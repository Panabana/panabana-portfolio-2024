import { Link } from "react-router-dom";
import React from "react";
import Footer from "../../Footer";

export default function Series1Post4() {
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
                            4. Live Publishing & Post Publishing
                        </h2>
                        <h3 className="sm:text-base text-xs text-center">
                            Original date: 2024-01-23
                        </h3>
                        <p className="mx-auto text-base sm:text-lg text-left p-10 w-[99%] sm:w-[65%]">
                            Hi, I’m Alex B.
                            <br /><br />
                            One way to deploy a live website with a Create-react-app boilerplate site is to push
                            the files to a public repo, and then link the repo to Netlify’s free deploy service.
                            I just happened to choose Netlify since they have a pretty good free tier.
                            So you can basically link your domain and have it automatically update its live app
                            by hooking it up with Netlify's GitHub integration. All you do is point your Netlify account
                            towards one of your repos, then just push up your edits to the repo.
                            <br /><br />
                            <a
                                href="https://create-react-app.dev/docs/deployment/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-500 hover:underline">
                                Find out more about React deployment here.
                            </a>
                            <br /><br />
                            To make the most use out of my deployment, I chose to bite the bullet and do all my
                            git work through Git Bash. I believe that the more comfortable I can get with CLI’s,
                            the better off as a developer I am.
                            <br /><br />
                            <a
                                href="https://git-scm.com/doc"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-500 hover:underline">
                                I'll link to the Git documentation here.
                            </a>
                            
                            <br /><br />
                            One thought with Git was that it was initially hard to learn, but once you got
                            the hang of it, it's pretty intuitive. After many
                            tries I got the website deployed. So now I am mostly struggling with the mobile
                            version and other small front-end faults that I keep discovering to this day.
                            <br /><br />
                            After having set up the basic foundation of my website, I did a loop around and tried
                            to “upgrade” and clean up the layout of all the four main pages.
                            <br /><br />
                            All in all, I am very happy that I chose React and Tailwind to build my website with.
                            They are very intuitive and easy tools. Next up, I have a spring internship where I
                            will be in a project to automate an excel file and connect it to a database.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}