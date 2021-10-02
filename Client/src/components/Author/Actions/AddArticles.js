import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import toastr from "toastr";
import "toastr/build/toastr.css";
import axios from "axios";
import NavBar from "../../Shared/Dashboard/NavBar";
import SlidBarAuthor from "../../Shared/Dashboard/SlidBarAuthor";

export default function AddArticles() {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [imageArticle, setImageArticle] = useState("");
  const [category, setCategory] = useState("");

  const idAuthor = localStorage.getItem("fullName");

  const handleSubmit = async (e) => {



    e.preventDefault();

    const article = {
      title,
      date,
      description,
      imageArticle,
      category,
      author: idAuthor,
    };

    axios
      .post(`http://localhost:8080/articles/addArticle`, article)

      .then((res) => {
        if (res.error) {
          return false;
        } else {
          console.log(res.data);
          history.push("/ArticlesList");
          toastr.success("Article added SuccessFully");
        }
      });
  };

  return (
    <div>
      <div>
        <NavBar />
      </div>

      <section className="">
        <div className="grid bg-white rounded-lg shadow-xl mt-20 ml-80 w-4/5 m-auto">
          <form
            onSubmit={handleSubmit}
            className="form bg-white p-6 my-10 w-4/5	m-auto"
          >
            <h3 className="text-2xl text-center text-gray-900 font-semibold">
              Add New Article
            </h3>
            <div className="flex space-x-5 mt-3">
              <input
                type="text"
                name
                id
                placeholder="Title"
                className="border p-2  w-1/2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex space-x-5 mt-3">
              <input
                type="text"
                name
                id
                placeholder="image"
                className="border p-2  w-1/2"
                value={imageArticle}
                onChange={(e) => setImageArticle(e.target.value)}
              />
              <input
                type="option"
                name
                id
                placeholder="Category"
                className="border p-2 w-1/2"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </div>
            <input
              type="text"
              name
              id
              placeholder="Date"
              className="border p-2 w-full mt-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <textarea
              name
              id
              cols={10}
              rows={3}
              placeholder="Description"
              className="border p-2 mt-3 w-full"
              defaultValue={""}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button
              type="submit"
              defaultValue="Submit"
              className="w-auto mt-6 bg-red-900 hover:bg-gray-500 text-white font-semibold p-3"
            >
              Add
            </button>
          </form>
        </div>
      </section>
      <SlidBarAuthor />
    </div>
  );
}
