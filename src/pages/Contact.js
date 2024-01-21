import React from "react";
import Footer from "./Footer";

export default function Contact() {
  return (
    <div>
      <div className="flex-grow text-sky-100 bg-slate-800 py-8 sm:py-10">
        <div id="projects" className="container mx-auto justify-center body-font">
          <div className="container mx-auto h-full lg:h-dvh px-5 p-6 text-center lg:px-40">
            <div className="grid grid-rows-2 grid-cols-2 justify-items-center sm:p-4 ">
              <div className="px-6 mt-4 lg:mt-0">
                <h2 className="font-semibold tracking-widest text-xs sm:text-base">
                  LOCATION
                </h2>
                <p className="p-2 text-xs sm:text-base">
                  Malmö, Sweden
                </p>
              </div>
              <div className="px-6 mt-4 lg:mt-0 content-start">
                <h2 className="font-semibold tracking-widest text-xs sm:text-base">
                  EMAIL
                </h2>
                <p className="text-wrap p-2 text-xs sm:text-base text-center ">
                  palexanderbengtsson@gmail.com
                </p>
              </div>
              <div>

              </div>
            </div>
            <div>
              <h2 className="text-xl mt-5 p-4">
                MAP
              </h2>
            </div>
            <div className="h-[90%] p-5 sm:h-1/2 place-content-center rounded-lg flex relative">
              <iframe
                width="65%"
                height="100%"
                title="map"
                className=""
                // frameBorder={0}
                // marginHeight={0}
                // marginWidth={0}
                style={{ filter: "opacity(1)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Malmö,+Sweden&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>


    // <div className="">
    //   <div className="min-h-screen text-sky-100 bg-slate-800 p-10 flex items-end justify-center relative">

    //   </div>
    //   <div className=" relative flex flex-wrap py-6 rounded shadow-md">
    //     <div className="lg:w-1/3 px-6">
    //       <h2 className="title-font font-semibold  tracking-widest text-xs">
    //         ADDRESS
    //       </h2>
    //       <p className="mt-1">
    //         Malmö, Sweden
    //       </p>
    //     </div>
    //     <div className="lg:w-2/3 px-6 mt-4 lg:mt-0">
    //       <h2 className="title-font font-semibold  tracking-widest text-xs">
    //         EMAIL
    //       </h2>
    //       <p>
    //         palexanderbengtsson@gmail.com
    //       </p>
    //     </div>
    //   </div>
    // </div>

  );
}