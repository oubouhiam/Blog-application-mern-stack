import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import NavBar from "../../Shared/NavBar";

export default function Login() {
  const history = useHistory();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };

      let res = await axios.post(
        `http://localhost:8080/users/loginUsers`,
        user
      );
      console.log(res.data);

      localStorage.setItem("userData", JSON.stringify(res.data));
      // localStorage.setItem("token", JSON.stringify(res.data.token));

      if (res.data.role === "Admin") {
        let fullName = res.data.user.fullName;
        let role = res.data.role;
        localStorage.setItem('fullName',fullName);
        localStorage.setItem('role',role)
        localStorage.setItem("id", res.data.user._id);
        history.push("/DashboardAdmin");
      }
      if (res.data.role === "Author") {
             let fullName = res.data.user.fullName;
             let role = res.data.role;
             localStorage.setItem("fullName", fullName);
             localStorage.setItem("role", role);
             localStorage.setItem("id", res.data.user._id);
             history.push("/DashboardAdmin");
        history.push("/DashboardAuthor");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-no-repeat bg-hero-pattern bg-cover bg-center relative">
      <NavBar />
      <div className="absolute  bg-gradient-to-b from-gray-500 to-red-900 opacity-75 " />
      <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
        <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
          <div className="self-start hidden lg:flex flex-col  text-white">
            <img alt="" src className="mb-3" />
            <h1 className="mb-3 font-bold text-5xl">
              Hi Admin, Author👋 Welcome Back{" "}
            </h1>
          </div>
        </div>
        <div className="flex justify-center self-center  z-10">
          <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
              <p className="text-gray-500">Please sign in to your account.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 tracking-wide">
                    Email
                  </label>
                  <input
                    className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="email"
                    placeholder="mail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                    Password
                  </label>
                  <input
                    className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                {/* <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember_me"
                      name="remember_me"
                      type="checkbox"
                      className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember_me"
                      className="ml-2 block text-sm text-gray-800"
                    >
                      Remember me
                    </label>
                  </div>
                </div> */}
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center bg-red-800  hover:bg-gray-300 text-white hover:text-red-900 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>Copyright | AmarchTech © 2021</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyrights note */}
      <div className="text-sm bg-gray-900 text-white mr-4 text-center w-full h-10 content-center ">
        2021
        <a className="text-blue-600 hover:underline" href="#">
          AmarchTech
        </a>
        . All rights reserved.
      </div>
    </div>
  );
}
