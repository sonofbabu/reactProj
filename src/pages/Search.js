//contains  search bar, buttons, youtubekids, languages offered
import React, { useState } from "react";
import "./Search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to store the search query

  const handleGoogleSearch = () => {
    const searchUrl = `http://www.google.com/search?q=${encodeURIComponent(
      searchQuery
    )}`;
    window.location.href = searchUrl; // Open in the same tab
  };

  const handleFeelingLucky = () => {
    window.location.href = "https://www.google.com/doodles";
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of the input field
      handleGoogleSearch();
    }
  };

  return (
    <form className="search">
      <div className="search_input">
        <AiOutlineSearch />
        <input
          placeholder="Search Google or type a URL"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleKeyPress} // Handle Enter key press
        />
        <IoMdMic />
      </div>
      <div className="search_buttons">
        <button type="button" onClick={handleGoogleSearch}>
          Google Search
        </button>
        <button type="button" onClick={handleFeelingLucky}>
          I'm Feeling Lucky
        </button>
      </div>
      <div className="youtube_kids">
        <p>
          <img
            className="youtube_image"
            style={{ maxWidth: "30px" }}
            src="https://www.google.com/images/hpp/YT_RedPlayButton_Icon_48x48.png"
            alt="ytK"
          ></img>
          <a href="https://www.youtube.com/intl/ALL_in/kids/?utm_source=google&utm_medium=hpp&utm_campaign=inytk2023">
            Explore YouTube Kids:
          </a>
          <span className="space">
            a world of fun and learning made just for kids
          </span>
        </p>
      </div>
      <div className="google_languages">
        <p>
          <span className="space">Google offered in:</span>
          <a href="#">हिन्दी</a>
          <a href="#">বাংলা</a>
          <a href="#"> తెలుగు</a>
          <a href="#">मराठी</a>
          <a href="#"> தமிழ்</a>
          <a href="#"> ગુજરાતી</a>
          <a href="#"> ಕನ್ನಡ</a>
          <a href="#">മലയാളം</a>
          <a href="/">ਪੰਜਾਬੀ</a>
        </p>
      </div>
    </form>
  );
};

export default Search;
