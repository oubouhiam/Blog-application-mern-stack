import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Ads() {
  const [ads, setAds] = useState("");
  // const [company, setCompany] = useState("");
  // const [description, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/getLastAds`)
      .then(function (response) {
        setAds(response.data);
        //  setCompany(response.data.company);
        //  setDescription(response.data.description);
        //  setImageUrl(response.data.imageUrl);
        //  console.log(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  });

  return (
    <div>
      {/* This is an example component */}
      <div className="container mx-auto my-5">
        {ads &&
          ads.map((item) => (
            <div className="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
              <div className="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                <div className="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom">
                  <img
                    alt=""
                    src={item.imageUrl}
                    // style={{ width: 50, height: 50 }}
                  />
                </div>
                <div className="md:hidden absolute inset-0 h-full p-6 pb-6 flex flex-col-reverse justify-start items-start bg-gradient-to-b from-transparent via-transparent to-gray-900"></div>
                <svg
                  className="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
              </div>
              <div className="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                <div className="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                  <h1 className="w-full font-bold text-2xl text-gray-900 leading-tight mb-2">
                    {item.title}
                  </h1>
                  <h3 className="hidden md:block font-bold text-2xl text-red-700">
                    {item.company}
                  </h3>
                  <p className="text-gray-700 mt-10 text-justify">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
