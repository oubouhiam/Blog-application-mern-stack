import React from "react";
import { Link } from "react-router-dom";

export default function SlidBar() {
  return (
    <div className="fixed flex flex-col my-4	 top-14 left-0 w-14 hover:w-64 md:w-64 bg-red-900  h-full text-white transition-all duration-300 border-none sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">
          <li>
            <a
              href="/DashboardAuthor"
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-800  text-white-900 hover:text-white-900 border-l-4 border-transparent hover:border-red-500  pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Dashboard
              </span>
            </a>
          </li>
          <li>
            <Link
              to="/ArticlesList"
              className="relative flex flex-row items-center h-11
              focus:outline-none hover:bg-gray-800 text-white-900
              hover:text-white-900 border-l-4 border-transparent
              hover:border-red-500 pr-6"
            >
              <span className="inline-flex justify-center items-center ml-4">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  />
                </svg>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">
                Articles List
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
