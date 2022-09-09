import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ display: "flex" }}>
        <div className={styles.part1}></div>
        <div className={styles.part2}></div>
      </div>
    </div>
  );
};

export default About;
