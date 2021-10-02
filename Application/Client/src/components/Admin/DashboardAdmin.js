import React from "react";
import { Link, useHistory } from "react-router-dom";
import bgheader from "../../images/bgheader.png";
import NavBar from "../Shared/Dashboard/NavBar";
import SlidBar from "../Shared/Dashboard/SlidBar";


export default function DashboardAdmin() {




  return (
    <div>
      <NavBar />
      <section className="">
        <div className="flex overflow-hidden	 items-center justify-center ml-60">
          {/* Hero content */}
          <div className="">
            {/* Section header */}
            <div className="text-center ">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                Welcome To{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-red-800">
                  Admin Space
                </span>
              </h1>
            </div>

            {/* Hero image */}
            <div>
              <div
                className="relative flex justify-center mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="450"
              >
                <div className="flex flex-col justify-center">
                  <img
                    className="mx-auto"
                    src={bgheader}
                    width="988"
                    height="2O9"
                    alt="Hero"
                  />
                  <svg
                    className="absolute inset-0 max-w-full mx-auto md:max-w-none h-auto"
                    width="768"
                    height="432"
                    viewBox="0 0 768 432"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="100%"
                        id="hero-ill-a"
                      >
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="77.402%" />
                        <stop stopColor="#DFDFDF" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        x1="50%"
                        y1="0%"
                        x2="50%"
                        y2="99.24%"
                        id="hero-ill-b"
                      >
                        <stop stopColor="#FFF" offset="0%" />
                        <stop stopColor="#EAEAEA" offset="48.57%" />
                        <stop
                          stopColor="#DFDFDF"
                          stopOpacity="0"
                          offset="100%"
                        />
                      </linearGradient>
                      <circle id="hero-ill-d" cx="384" cy="216" r="64" />
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <circle
                        fillOpacity=".04"
                        fill="url(#hero-ill-a)"
                        cx="384"
                        cy="216"
                        r="128"
                      />
                      <circle
                        fillOpacity=".16"
                        fill="url(#hero-ill-b)"
                        cx="384"
                        cy="216"
                        r="96"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SlidBar />
    </div>
  );
}
