import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBar from "../../Shared/Dashboard/SlidBar";

export default function ArticleManagement() {
  const history = useHistory();

  const [article, setArticle] = useState("");

  // const author = localStorage.getItem("fullName");

  axios
    .get(`http://localhost:8080/articles/getAllArticle`)
    .then(function (response) {
      setArticle(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });


 const getIdArticle = (id) => {
   localStorage.setItem("id", id);
   history.push("/confirmArticle");
 };


  return (
    <div>
      {/* navbar*/}
      <NavBar />

      <section className="w-9/12 items-center m-auto">
        <div className="overflow-x-auto">
          <div className="min-w-screen min-h-screen  flex items-center justify-center font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">Picture</th>
                      <th className="py-3 px-6 text-left">Title</th>
                      <th className="py-3 px-6 text-center">Date</th>
                      <th className="py-3 px-6 text-center">Status</th>
                      <th className="py-3 px-6 text-center">Category</th>
                      <th className="py-3 px-6 text-center">Description</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  {article &&
                    article.map((item) => (
                  <tbody className="text-gray-600 text-sm font-light">
                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                      {/* ----------------------Picture-----------------------*/}
                      <td className="py-3 px-6 text-left whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            alt=""
                              src={item.imageArticle}
                            style={{ width: 50, height: 50 }}
                          />
                        </div>
                      </td>
                      {/* ----------------------Title-----------------------*/}
                      <td className="py-3 px-6 text-left">
                        <div className="flex items-center">
                          <span>{item.title}</span>
                        </div>
                      </td>
                      {/* ----------------------Date-----------------------*/}
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.date}</span>
                        </div>
                      </td>
                      {/* ----------------------Status-----------------------*/}
                         <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative text-xs">{item.verified}</span>
                        </span>
                     {/* ----------------------Category-----------------------*/}
                      </td>
                         <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <span>{item.category}</span>
                        </div>
                      </td>
                      {/* ----------------------Description-----------------------*/}
                      <td className="py-3 px-6 text-center">
                        <div className="flex items-center justify-center">
                          <textarea style={{width:'600px'}}>{item.description}</textarea>
                        </div>
                      </td>

                      <td className="py-3 px-6 text-center">
                        <div className="flex item-center justify-center">
                          {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  />
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                  />
                                </svg>
                              </div> */}
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              onClick={() => getIdArticle(item._id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  onClick={() => deleteAds(item._id)}
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  />
                                </svg>
                              </div> */}
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SlidBar />
    </div>
  );
}
