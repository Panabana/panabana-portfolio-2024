import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Series1 from "./pages/series/Series1";
import Series1Post1 from "./pages/series/series1/Series1Post1";
import Series1Post2 from "./pages/series/series1/Series1Post2";
import Series1Post3 from "./pages/series/series1/Series1Post3";
import Series1Post4 from "./pages/series/series1/Series1Post4";

export default function App() {
    return (
        <div classname="container mx-auto flex min-h-screen flex-col justify-between">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Projects />} />
                        <Route path="Resume" element={<Resume />} />
                        <Route path="Blog" element={<Blog />} />
                        <Route path="Contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                        <Route path="Series1" element={<Series1 />} />
                        <Route path="Series1Post1" element={<Series1Post1 />} />
                        <Route path="Series1Post2" element={<Series1Post2 />} />
                        <Route path="Series1Post3" element={<Series1Post3 />} />
                        <Route path="Series1Post4" element={<Series1Post4 />} /> 
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
