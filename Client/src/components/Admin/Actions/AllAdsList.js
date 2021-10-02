import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBar from "../../Shared/Dashboard/SlidBar";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function AllAdsList() {
  const history = useHistory();
  // const [secretary, setSecretary] = useState();

  const [ads, setAds] = useState();

  const admin = localStorage.getItem("fullName");

  axios
    .get(`http://localhost:8080/users/getAllAds/`)
    .then(function (response) {
      setAds(response.data);
    })
    .catch(function (err) {
      console.log(err);
    });

  //   const getIdUser = (id) => {
  //     localStorage.setItem("id", id);
  //     history.push("/updateUser");
  //   };

  // delete User
  //   const deleteUser = (id) => {
  //     var msgConfirmation = window.confirm(
  //       "Are You Sure Yo want to delete this Account ?"
  //     );
  //     if (msgConfirmation) {
  //       axios
  //         .delete(`http://localhost:8080/users/deleteUser/${id}`)
  //         .then(function (response) {
  //           window.location.reload();
  //           console.log("item was deleted Succesfully ... ");
  //           toastr.success(" Account was deleted SuccessFully");
  //         });
  //     }
  //   };

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
                      <th className="py-3 px-6 text-center">Company</th>
                      <th className="py-3 px-6 text-center">Infos</th>
                      {/* <th className="py-3 px-6 text-center">Actions</th> */}
                    </tr>
                  </thead>
                  {ads &&
                    ads.map((item) => (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          {/* ----------------------Picture-----------------------*/}
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <img
                                alt=""
                                src={item.imageUrl}
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
                          {/* ----------------------Company-----------------------*/}
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <span>{item.company}</span>
                            </div>
                          </td>
                          {/* ----------------------Infos-----------------------*/}
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <textarea>{item.description}</textarea>
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
