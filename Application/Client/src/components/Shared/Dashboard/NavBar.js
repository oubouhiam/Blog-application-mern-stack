import React from "react";
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.css";
export default function NavBar() {

const fullName = localStorage.getItem("fullName");
const role = localStorage.getItem('role');

    const history = useHistory();
    const logOut = () => {
      localStorage.clear();
      history.push("/login");
       toastr.success(" LogOut SuccessFully", {
         positionClass: "toast-bottom-right",
       });
    };


  return (
    <div className="overflow-hidden	fixed w-full flex flex-row items-center p-1 justify-between bg-gradient-to-r from-red-900 via-white to-red-900	">
      <div className=" text-lg text-white hidden md:flex" style={{fontSize:'25px'}}>
        {fullName}
        <br></br>
        {role}
      </div>
      <div className=" text-lg text-white hidden md:flex"></div>
      <span className="w-screen md:w-1/3 h-10 bg-gray-200 cursor-pointer border border-gray-300 text-sm rounded-full flex">
        <input
          type="search"
          name="serch"
          placeholder="Search"
          className="flex-grow px-4 rounded-l-full rounded-r-full text-sm focus:outline-none"
        />
        <i className="fas fa-search m-3 mr-5 text-lg text-gray-700 w-4 h-4"></i>
      </span>
      <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
        <i className="fas fa-bars" />
      </div>
      <div className="flex flex-row-reverse mr-8 hidden md:flex">
        <button
          onClick={logOut}
          className="text-red-900 text-center bg-white px-4 py-2 m-2 rounded-full py-3 px-6"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
