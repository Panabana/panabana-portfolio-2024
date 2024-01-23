import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Blog() {
    return (
        <div>
            <div id="blog" className="h-dvh text-neutral-200 bg-slate-800">
                <h2 className="invisible">
                    Blog Series 1
                </h2>
                <div className="text-center">
                    <h3 className="p-6 font-medium text-base sm:text-2xl mt-[15%]">
                        Series 1 - The Personal Portfolio
                    </h3>
                    <div className="p-2">
                        <Link
                            to="/Series1Post1"
                            className="text-xs sm:text-xl hover:underline">1. Initial Start and Frontend
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            to="/Series1Post2"
                            className="text-xs sm:text-xl hover:underline">2. Choosing Subdomains or Multiple Site Pages
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            to="/Series1Post3"
                            className="text-xs sm:text-xl hover:underline">3. Create a More Dynamic UI
                        </Link>
                    </div><div className="p-2">
                        <Link
                            to="/Series1Post4"
                            className="text-xs sm:text-xl hover:underline">4. Live Publishing & Post Publishing
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}