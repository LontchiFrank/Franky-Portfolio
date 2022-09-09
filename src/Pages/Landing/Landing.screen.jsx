import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        display: "flex",
      }}
    >
      <div className={styles.part1} style={{ width: "50%", height: "100%" }}>
        <div className={styles.fontaf}>
          <h2>
            I'm <span className={styles.sid}>Franky</span>, Web Devel
            <span style={{ color: "rgb(255, 174, 0)" }}>oper</span>.
          </h2>
          <p className={styles.para}>
            {" "}
            Frontend Developer | UI Designer | WebXR enthusiast
          </p>
        </div>
        <div className={styles.code}>
          <p> &lt; h1 &gt; </p>
        </div>
        <p className={styles.tag4}> &lt; head &gt; </p>
        <p className={styles.tag}> &lt; h2 &gt; </p>
        <p className={styles.tag1}> &lt; br /&gt; </p>
        <p className={styles.tag2}> &lt; p &gt; </p>
        <p className={styles.tag3}> &lt; title &gt; </p>
        <p className={styles.tag5}> &lt; tr &gt; </p>
      </div>
      {/* <Brand img={ping} /> */}
      <div className={styles.part2}></div>
    </div>
  );
};

export default Landing;
