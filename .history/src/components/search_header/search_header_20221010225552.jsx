import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => {
  const inputRef = React.createRef();

  const go = (e) => {
    const name = inputRef.current.value;
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
      <button className={styles.button} type="submit" onSubmit={go()}>
        <img className={styles.buttonImg} src="image/search.png" alt="search" />
      </button>
    </header>
  );
};

export default SearchHeader;
