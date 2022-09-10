import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div style={{ display: "flex" }}>
        <div className={styles.part1}>
          <div className={styles.txt}>
            <h3>About Me</h3>
            <p className={styles.para}>
              I am a creative designer and developer, who aims to work with
              businesses and stndardized communities to bring their passions to
              life. I offer both design and development services of web
              applications or websites!
            </p>
            {/* <br /> */}
            <p className={styles.para}>
              Coming from a background in Art, I love creating pages where I’m
              able to actually create enjoyable interactions and experiences for
              everyone.
            </p>
            <p className={styles.para}>
              Love to play Basketball,listening to music, watching Movies and am
              also a Bibliophile. :)
            </p>
          </div>
        </div>
        <div className={styles.part2}>
          <div className={styles.portrait}>
            <div className={styles.img}></div>
          </div>
          <div className={styles.bolon2}>
            <div className={styles.bol_img}>
              <img
                alt="Laptop Coding illustration - Free transparent PNG, SVG. No Sign up needed."
                style={{ width: "100%", height: "100%" }}
                src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/v1/icons/bugs/web-infected-l9p0f9g1g0kx2mx4kxl2ci.png/web-infected-hfh6enxcri8b0sj6ddlzv5.png?_a=AJE+xWI0"
              />
            </div>
          </div>
          <div className={styles.bolon3}>
            <div className={styles.bol_img}>
              <img
                alt="Laptop Coding illustration - Free transparent PNG, SVG. No Sign up needed."
                style={{ width: "100%", height: "100%" }}
                src="https://assets.streamlinehq.com/image/private/w_400,h_400,ar_1/f_auto/v1/icons/coding/laptop-coding-7lxj48yd26ctkl5jrbr29f.png/laptop-coding-d1dbmwal3dmfdtkiihcl5l.png?_a=AJE+xWI0"
              />
            </div>
          </div>
          <div className={styles.bolon4}>
            <div className={styles.bol_img}>
              <img
                alt="Cinema Theater Movie illustration - Free transparent PNG, SVG. No Sign up needed."
                width="100"
                heigth="100"
                src="https://assets.streamlinehq.com/image/private/w_120,h_120,ar_1/f_auto/v1/icons/movies/cinema-theater-movie-y7u0q5cos2qsvcjfkl35.png/cinema-theater-movie-kk1siymxfaw40fbylm8ho.png?_a=AJE+xWI0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
