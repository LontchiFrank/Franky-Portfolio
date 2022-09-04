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
      <div className={styles.part1} style={{ width: "50%", height: "100%" }}>
        <div className={styles.fontaf}>
          <h2>
            I'm <span className={styles.sid}>Franky</span>, Web Developer.
          </h2>
          <p className={styles.para}>
            {" "}
            Frontend Developer | UI Designer | WebXR enthusiast
          </p>
        </div>
      </div>
      {/* <Brand img={ping} /> */}
      <div className={styles.part2}></div>
    </div>
  );
};

export default Landing;
