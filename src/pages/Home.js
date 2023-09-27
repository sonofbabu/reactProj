//contains header, google logo
import React from "react";
import "./Home.css";
import { FaUserCircle } from "react-icons/fa";
import { IoApps } from "react-icons/io5";
import Search from "./Search";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="home">
      <div className="home_headerRight">
        <a href="https://mail.google.com/">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&ogbl">Images</a>
        <IoApps />
        <FaUserCircle />
      </div>

      <div className="home_body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt="gogleLogo"
        />
        <Search />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
