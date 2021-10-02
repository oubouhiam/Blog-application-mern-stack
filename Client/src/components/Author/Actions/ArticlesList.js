import React, { useState } from "react";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBarAuthor from "../../Shared/Dashboard/SlidBarAuthor";

export default function ArticlesList() {
  const history = useHistory();

  const [article, setArticle] = useState("");

  const author = localStorage.getItem("fullName");

  axios
    .get(`http://localhost:8080/articles/getArticleByAuthor/${author}`)
    .then(function (response) {
      setArticle(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });

  // delete Article
  const deleteArticle = (id) => {
    var msgConfirmation = window.confirm(
      "Are You Sure Yo want to delete this Ads ?"
    );
    if (msgConfirmation) {
      axios
        .delete(`http://localhost:8080/articles/deleteArticle/${id}`)
        .then(function (response) {
          window.location.reload();
          toastr.success(" Article was deleted SuccessFully");
        });
    }
  };
  return (
    <div>
      <div>
        <NavBar />
      </div>

      <section className="">
        <div class="grid bg-white rounded-lg shadow-xl mt-20 ml-80 w-4/5 m-auto">
          <div class="align-middle inline-block p-6 my-10 w-full	m-auto shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
              <Link
                to="/AddArticles"
                type="submit"
                className="w-auto bg-red-900 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
              >
                Add New Article
              </Link>
            </div>
            <table class=" w-full">
              <thead>
                <tr>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Image
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                    Title
                  </th>
                  {/* <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Author
                  </th> */}
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Date
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Category
                  </th>

                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Status
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Description
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                    Action
                  </th>
                  <th class="px-6 py-3 border-b-2 border-gray-300"></th>
                </tr>
              </thead>
              {article &&
                article.map((item) => (
                  <tbody class="bg-white">
                    <tr>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <div className="flex items-center">
                          <img
                            alt=""
                            src={item.imageArticle}
                            style={{ width: 50, height: 50 }}
                          />
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div class="flex items-center">
                          <div>
                            <div class="text-sm leading-5 text-gray-800">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                        <div class="text-sm leading-5 text-blue-900">
                          {item.date}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        {item.category}
                      </td>
                      {/* <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    Oubouhiam
                  </td> */}

                      <td class="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                        <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span class="relative text-xs">{item.verified}</span>
                        </span>
                      </td>
                      <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5" style={{width:'100px'}}>
                        {item.description}
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
                              // onClick={() => getIdAds(item._id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </div>
                          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              onClick={() => deleteArticle(item._id)}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </table>
          </div>
        </div>
      </section>
      <SlidBarAuthor />
    </div>
  );
}
