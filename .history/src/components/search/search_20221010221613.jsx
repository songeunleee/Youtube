import React from "react";
import styles from "./search.module.css";

const Search = (props) => (
  <div className={styles.search - box}>
    youtube
    <form className={styles.search - form}>
      <input
        type="text"
        className={styles.search - input}
        placeholder="Search"
      />
    </form>
  </div>
);

export default Search;
