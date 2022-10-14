import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  const inputRef = useRef();

  const handleSearch = ({ onSearch }) => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = (event) => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.Key === "Enter") handleSearch();
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="./image/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        ref={inputRef}
        type="search"
        placeholder="Search..."
      />
      <button
        className={styles.button}
        type="submit"
        onClick={onClick}
        onKeyPress={onKeyPress}
      >
        <img className={styles.buttonImg} src="image/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
