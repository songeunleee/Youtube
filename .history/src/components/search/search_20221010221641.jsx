import React from "react";
import styles from "./search.module.css";

const Search = (props) => (
  <div className={styles.search_box}>
    youtube
    <form className={styles.search_form}>
      <input type="text" className={styles.search_input} placeholder="Search" />
    </form>
  </div>
);

export default Search;
