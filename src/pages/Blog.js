import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Blog() {
    return (
        <div>
            <div id="blog" className="h-dvh text-neutral-200 bg-slate-800">
                <h2 className="invisible">
                    Blog
                </h2>
                <div className="text-center font-bold">
                    <h3 className="mb-6 text-xl sm:text-2xl mt-[10%]">
                        Blog Series
                    </h3>
                    <div className="p-2">
                        <Link
                            to="/Series1"
                            className="text-lg sm:text-lg hover:underline">Series 1 - The Personal Portfolio
                        </Link>
                    </div>
                    <div className="p-2">
                        <Link
                            to=""
                            className="line-through text-lg sm:text-xl">Series 2 - The Excel Programme - COMING SOON
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}