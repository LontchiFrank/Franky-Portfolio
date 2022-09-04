import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "black",
        display: "flex",
      }}
    >
      <div className="part1" style={{ width: "50%", height: "100%" }}></div>
      {/* <Brand img={ping} /> */}
      <div className={styles.part2}></div>
    </div>
  );
};

export default Landing;
