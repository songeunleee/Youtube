import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = (event) => {
    handleSearch();
  };

  const onkeydown = (event) => {
    if (event.key === "Enter") handleSearch();
    console.log("sdf");
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
        onKeyUp={onkeydown}
      >
        <img className={styles.buttonImg} src="image/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
