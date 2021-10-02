import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import bgheader from "../../../images/bgheader.png";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBar from "../../Shared/Dashboard/SlidBar";

export default function Add() {


const history = useHistory();

const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [phone, setPhone] = useState("");
const [city, setCity] = useState("");
const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { fullName,email,password,phone,city,role };

axios
  .post(`http://localhost:8080/users/addUsers`, user)

  .then((res) => {
    if (res.error) {
      return false;
    } else {
      console.log(res.data);
      history.push("/DashboardAdmin");
      toastr.success("User added SuccessFully");
    }
  });

  }
 const Cancel=()=>{
      history.push("/UsersList");
 } 

  return (
    <div>
      {/* navbar*/}
      <NavBar />

      <section className="relative">
        <div className="flex overflow-hidden	mt-40 items-center justify-center ml-60">
          <div className="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
            <div className="flex justify-center">
              <div className="flex">
                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                  Add new Admin & Author
                </h1>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Full Name
                </label>
                <input
                  className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                  type="text"
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Email
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Phone
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                    type="Number"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-1">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    City
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Selection
                </label>
                <select
                  className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                >
                  <option selected>choose role</option>
                  <option value="Admin">Admin</option>
                  <option value="Author">Author</option>
                </select>
              </div>
              <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                  Password
                </label>
                <input
                  className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                  type="Password"
                  placeholder="Another Input"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="grid grid-cols-1 mt-5 mx-7">
                <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold mb-1">
                  Upload Photo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="flex flex-col border-4 border-dashed w-full h-32 hover:bg-gray-100 hover:border-red-900 group">
                    <div className="flex flex-col items-center justify-center pt-7">
                      <svg
                        className="w-10 h-10 text-gray-400 group-hover:text-red-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <p className="lowercase text-sm text-gray-400 group-hover:text-red-900 pt-1 tracking-wider">
                        Select a photo
                      </p>
                    </div>
                    <input type="file" className="hidden" />
                  </label>
                </div>
              </div> */}
              <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                <button onClick={Cancel} className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-auto bg-red-900 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <SlidBar />
    </div>
  );
}
