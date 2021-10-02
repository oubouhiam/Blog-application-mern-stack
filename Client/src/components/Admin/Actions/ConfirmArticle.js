import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const ConfirmArticle = () => {
  const history = useHistory();

  const [verified, setVerified] = useState("");
 const [verifiedUpdated, setVerifiedUpdated] = useState("");
  const idArticle = localStorage.getItem("id");



  // ---------------------get Admin to update-----------------------------
  useEffect(() => {
    axios
      .get(`http://localhost:8080/articles/getArticleById/${idArticle}`)
      .then(function (response) {
        setVerified(response.data.verified);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);
  // -----------------------update Seller---------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { verified: verifiedUpdated };

    axios
      .put(`http://localhost:8080/users/confirmArticle/${idArticle}`, data)
      .then((res) => {
        if (res.error) {
          return false;
        } else {
          console.log(res.data);
          history.push("/articleManagement");
        }
      });
  };

  return (
    <div className="font-sans">
      <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gradient-to-r from-green-400 to-blue-500 ">
        <div className="relative sm:max-w-sm w-full">
          <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
          <div className="card bg-green-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
          <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
            <label
              htmlFor
              className="block text-sm text-gray-700 text-center font-bold"
            >
              Confirm Article
            </label>
            <form
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
              onSubmit={handleSubmit}
            >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700">
                  {" "}
                  Status{" "}
                </label>
                <select
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  value={verifiedUpdated}
                  onChange={(e) => setVerifiedUpdated(e.target.value)}
                >
                  <option selected>Manage Article</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="UnConfirmed">UnConfirmed</option>
                </select>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Confirm{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ConfirmArticle;
