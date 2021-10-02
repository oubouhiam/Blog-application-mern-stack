import React from "react";
import Ads from "../Shared/Ads";
import Category from "../Shared/Category";
import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";
import Articles from "./Articles";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <NavBar />
      <Header />
      <Ads/>
      <Category />
      <Articles />
      <Footer />
    </div>
  );
}
