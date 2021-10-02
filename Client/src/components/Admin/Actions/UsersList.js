import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBar from "../../Shared/Dashboard/SlidBar";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";



export default function UsersList() {
  const history = useHistory();
const [users, setUsers] = useState("");

useEffect(()=>{

    axios
      .get(`http://localhost:8080/users/getAllUsers`)
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(function (err) {
        console.log(err);
      });

  },[])


const getIdUser = (id) => {
  localStorage.setItem("id", id);
  history.push("/updateUser");
};

// delete User
  const deleteUser = (id)=>{
    var msgConfirmation = window.confirm("Are You Sure Yo want to delete this Account ?");
    if (msgConfirmation) {
    axios
      .delete(`http://localhost:8080/users/deleteUser/${id}`)
      .then(function (response) {
        window.location.reload();
        console.log("item was deleted Succesfully ... ");
        toastr.success(" Account was deleted SuccessFully");
      });


  }
}



  return (
    <div>
      {/* navbar*/}
      <NavBar />

      <section className="w-9/12 items-center m-auto">
        <div className="overflow-x-auto">
          <div className="min-w-screen min-h-screen  flex items-center justify-center font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
              <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                <Link
                  to="/addUser"
                  type="submit"
                  className="w-auto bg-red-900 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                >
                  Add New User
                </Link>
              </div>
              <div className="bg-white shadow-md rounded my-6">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      <th className="py-3 px-6 text-left">FullName</th>
                      <th className="py-3 px-6 text-left">Email</th>
                      <th className="py-3 px-6 text-center">Phone</th>
                      <th className="py-3 px-6 text-center">City</th>
                      <th className="py-3 px-6 text-center">Role</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  {users &&
                    users.map((item) => (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          {/* ----------------------fullName-----------------------*/}
                          <td className="py-3 px-6 text-left whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="mr-2"></div>
                              <span className="font-medium">
                                {item.fullName}
                              </span>
                            </div>
                          </td>
                          {/* ----------------------email-----------------------*/}
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <span>{item.email}</span>
                            </div>
                          </td>
                          {/* ----------------------Phone-----------------------*/}
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <span>{item.phone}</span>
                            </div>
                          </td>
                          {/* ----------------------City-----------------------*/}
                          <td className="py-3 px-6 text-center">
                            <div className="flex items-center justify-center">
                              <span>{item.city}</span>
                            </div>
                          </td>
                          {/* ----------------------Role-----------------------*/}
                          <td className="py-3 px-6 text-center">
                            <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                              {item.role}
                            </span>
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
                                  onClick={() => getIdUser(item._id)}
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
                                  onClick={() => deleteUser(item._id)}
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
          </div>
        </div>
      </section>

      <SlidBar />
    </div>
  );
}
