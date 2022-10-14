import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  return (
    <header>
      <img src="./image/logo.png" alt="logo" />
      <h1>Youtube</h1>
      <input type="search" placeholder="Search..." />
    </header>
  );
};

export default SearchHeader;
