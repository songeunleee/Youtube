import React from "react";
import styles from "./search_header.module.css";

const SearchHeader = (props) => (
  <div className={styles.search_box}>
    youtube
    <form className={styles.search_form}>
      <input type="text" className={styles.search_input} placeholder="Search" />
    </form>
    <button className={styles.search_btn}></button>
  </div>
);

export default SearchHeader;
