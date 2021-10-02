import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import bgheader from "../../../images/bgheader.png";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBar from "../../Shared/Dashboard/SlidBar";

export default function UpdateUser() {


  const history = useHistory();
  const idUser = localStorage.getItem("id");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState("");


useEffect(() => {
  axios
    .get(`http://localhost:8080/users/getUserById/${idUser}`)
    .then(function (response) {
      setFullName(response.data.fullName);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setCity(response.data.city);
      setRole(response.data.role);
    })
    .catch(function (err) {
      console.log(err);
    });
}, [idUser]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = { fullName, email, phone, city, role };

    axios
      .put(`http://localhost:8080/users/updateUser/${idUser}`, user)

      .then((res) => {
        if (res.error) {
          return false;
        } else {
          console.log(res.data);
          history.push("/UsersList");
          toastr.success("User added SuccessFully");
        }
      });
  };

  const Cancel = () => {
    history.push("/UsersList");
  };

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
                  Edit Admin / Author
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
              <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                <button
                  onClick={Cancel}
                  className="w-auto bg-gray-500 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-auto bg-red-900 hover:bg-gray-700 rounded-lg shadow-xl font-medium text-white px-4 py-2"
                >
                  Edit
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
