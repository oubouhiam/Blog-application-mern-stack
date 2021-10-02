import React, { useEffect, useState } from "react";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBar from "../../Shared/Dashboard/SlidBar";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

export default function UpdateAds() {
  const history = useHistory();
  // const [secretary, setSecretary] = useState();

   const [title, setTitle] = useState("");
   const [company, setCompany] = useState("");
   const [description, setDescription] = useState("");
   const [imageUrl, setImageUrl] = useState("");
  const idAds= localStorage.getItem("id");

useEffect(() => {
  axios
    .get(`http://localhost:8080/users/getAdsById/${idAds}`)
    .then(function (response) {
      setTitle(response.data.title);
       setCompany(response.data.company);
        setDescription(response.data.description);
         setImageUrl(response.data.imageUrl);
    })
    .catch(function (err) {
      console.log(err);
    });
}, [idAds]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const ads = { title, company, description, imageUrl };

    axios
      .put(`http://localhost:8080/users/updateAds/${idAds}`, ads)

      .then((res) => {
        if (res.error) {
          return false;
        } else {
          console.log(res.data);
          history.push("/myAdsList");
          toastr.success("Ads Updated SuccessFully");
        }
      });
  };

  const Cancel = () => {
    history.push("/myAdsList");
  };

  return (
    <div>
      {/* navbar*/}
      <NavBar />

      <section className="w-9/12 items-center m-auto">
        <div className="overflow-x-auto">
          <div className="min-w-screen min-h-screen  flex items-center justify-center font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
              <div className="flex">
                <h1 className="text-gray-600 font-bold md:text-2xl text-xl">
                  Edit Ads 
                </h1>
              </div>
              <form onSubmit={handleSubmit}>
                {/* ----------------------------------------------------- */}
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Title
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                {/* -------------------------------------------------- */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
                  <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Company
                    </label>
                    <input
                      className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                      type="text"
                      placeholder="Company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1">
                    <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                      Infos
                    </label>
                    <textarea
                      className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                      type="Text"
                      placeholder="Ads Infos"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                {/* ------------------------------------------------ */}
                <div className="grid grid-cols-1 mt-5 mx-7">
                  <label className="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">
                    Url
                  </label>
                  <input
                    className="py-2 px-3 rounded-lg border-2 border-gray-300 mt-1 focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent"
                    type="text"
                    placeholder="URL"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center  md:gap-8 gap-4 pt-5 pb-5">
                  <button
                    onClick={() => Cancel()}
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
        </div>
      </section>

      <SlidBar />
    </div>
  );
}
