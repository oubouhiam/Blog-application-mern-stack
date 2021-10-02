import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export default function Articles() {

    const [article, setArticle] = useState("");
    const [firstArticle, setFirstArticle] = useState("");
    useEffect(() => {
      axios
        .get(`http://localhost:8080/articles/getLastArticle`)
        .then(function (response) {
          setArticle(response.data);
        })
        .catch(function (err) {
          console.log(err);
        });
    });
      useEffect(() => {
        axios
          .get(`http://localhost:8080/articles/getFirstArticle`)
          .then(function (response) {
            setFirstArticle(response.data);
          })
          .catch(function (err) {
            console.log(err);
          });
      });
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16 font-mono">
          <h1 className="h2 mb-4 text-5xl">Latest News</h1>
          <p className="text-xl text-gray-600">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </div>
        <div className="block md:flex md:space-x-2 px-2 lg:p-0">
        {/* ------------------------------------------------------------------------------------------------------- */}
          {article &&
            article.map((item) => (
              <a
                className="mb-4 md:mb-0 w-full md:w-2/3 relative rounded inline-block"
                style={{ height: "24em" }}
                href="./blog.html"
              >
                <div
                  className="absolute left-0 bottom-0 w-full h-full z-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                  }}
                />
                <img
                  alt=""
                  src={item.imageArticle}
                  style={{ height: "24em", width: "60em" }}
                  // style={{ width: 50, height: 50 }}
                />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                  <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                    {item.category}
                  </span>
                  <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
                    {item.title}
                  </h2>
                  <div className="flex mt-3">
                    <img
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-200 text-sm">
                        {" "}
                        {item.author}{" "}
                      </p>
                      <p className="font-semibold text-gray-400 text-xs">
                        {" "}
                        {item.date}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
            {/* ----------------------------------------------------------------------------------------------------- */}
          {firstArticle &&
            firstArticle.map((item) => (
              <a
                className="w-full md:w-1/3 relative rounded"
                style={{ height: "24em" }}
                href="./blog.html"
              >
                <div
                  className="absolute left-0 top-0 w-full h-full z-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
                  }}
                />
                <img
                  alt=""
                  src={item.imageArticle}
                  style={{ height: "24em", width: "60em" }}
                  // style={{ width: 50, height: 50 }}
                />
                <div className="p-4 absolute bottom-0 left-0 z-20">
                  <span className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                    {item.category}
                  </span>
                  <h2 className="text-3xl font-semibold text-gray-100 leading-tight">
                    {item.title}
                  </h2>
                  <div className="flex mt-3">
                    <img
                      src="https://images.unsplash.com/photo-1612886649688-ef2912f17921?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
                      className="h-10 w-10 rounded-full mr-2 object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-200 text-sm">
                        {" "}
                        {item.author}{" "}
                      </p>
                      <p className="font-semibold text-gray-400 text-xs">
                        {" "}
                        {item.date}{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
        <a
          className="w-full md:w-1/3 relative rounded"
          style={{ height: "24em" }}
          href="./blog.html"
        ></a>
        <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
          {/* post cards */}
          <div className="w-full lg:w-2/3">
            <a
              className="block rounded w-full lg:flex mb-10"
              href="./blog-single-1.html"
            >
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1616410011236-7a42121dd981?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3klMjBkZXZpY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
                }}
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Aliquam venenatis nisl id purus rhoncus, in efficitur sem
                    hendrerit.
                  </div>
                  <p className="text-gray-700 text-base">
                    Duis euismod est quis lacus elementum, eu laoreet dolor
                    consectetur. Pellentesque sed neque vel tellus lacinia
                    elementum. Proin consequat ullamcorper eleifend.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      Oubouhiam{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </a>
            <div className="rounded w-full lg:flex mb-10">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1584947113970-7d730f565515?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHRlY2hub2xvZ3klMjBkZXZpY2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60")',
                }}
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Integer commodo, sapien ut vulputate viverra
                  </div>
                  <p className="text-gray-700 text-base">
                    Nam malesuada aliquet metus, ac commodo augue mollis sit
                    amet. Nam bibendum risus sit amet metus semper consectetur.
                    Proin consequat ullamcorper eleifend. Nam bibendum risus sit
                    amet metus semper consectetur.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      Oubouhiam{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded w-full lg:flex mb-10">
              <div
                className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
                style={{
                  backgroundImage:
                    'url("https://images.unsplash.com/photo-1481207727306-1a9f151fca7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80")',
                }}
                title="deit is very important"
              ></div>
              <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
                <div>
                  <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
                    Suspendisse varius justo eu risus laoreet fermentum non
                    aliquam dolor
                  </div>
                  <p className="text-gray-700 text-base">
                    Mauris porttitor, velit at tempus vulputate, odio turpis
                    facilisis dui, vitae eleifend odio ipsum at odio. Phasellus
                    luctus scelerisque felis eget suscipit.
                  </p>
                </div>
                <div className="flex mt-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-700 text-sm capitalize">
                      {" "}
                      Oubouhiam{" "}
                    </p>
                    <p className="text-gray-600 text-xs"> 14 Aug </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right sidebar */}
          <div className="w-full lg:w-1/3 px-3">
            {/* topics */}
            <div className="mb-4">
              <h5 className="font-bold text-lg uppercase text-gray-700 px-1 mb-2">
                {" "}
                Popular Topics{" "}
              </h5>
              <ul>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-green-300 mr-3" />
                    iPhone
                    <span className="text-gray-500 ml-auto">23 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-indigo-300 mr-3" />
                    Tv &amp; Iptv
                    <span className="text-gray-500 ml-auto">18 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-yellow-300 mr-3" />
                    Laptop
                    <span className="text-gray-500 ml-auto">34 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
                  </a>
                </li>
                <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
                  <a
                    href="#"
                    className="flex items-center text-gray-600 cursor-pointer"
                  >
                    <span className="inline-block h-4 w-4 bg-blue-300 mr-3" />
                    Gaming
                    <span className="text-gray-500 ml-auto">9 articles</span>
                    <i className="text-gray-500 bx bx-right-arrow-alt ml-1" />
                  </a>
                </li>
              </ul>
            </div>
            {/* divider */}
            <div className="border border-dotted" />
            {/* subscribe */}
            <div className="p-1 mt-4 mb-4">
              <h5 className="font-bold text-lg uppercase text-gray-700 mb-2">
                {" "}
                Subscribe{" "}
              </h5>
              <p className="text-gray-600">
                Subscribe to our newsletter. We deliver the best health related
                articles to your inbox
              </p>
              <input
                placeholder="your email address"
                className="text-gray-700 bg-gray-100 rounded-t hover:outline-none p-2 w-full mt-4 border"
              />
              <button className="px-4 py-2 bg-indigo-600 text-gray-200 rounded-b w-full capitalize tracking-wide">
                Subscribe
              </button>
            </div>
            {/* divider */}
            <div className="border border-dotted" />
          </div>
        </div>
      </main>
      {/* main ends here */}
    </div>
  );
}
