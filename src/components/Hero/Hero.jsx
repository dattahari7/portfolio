import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dattahari</h1>
        <p className={styles.description}>
          A passionate full-stack developer with over 2+ years of experience in building robust web applications using React, Javascript, Typescript, Next.js and Node.js. I’m always eager to learn and collaborate on exciting projects. Feel free to reach out if you’d like to connect or learn more about my work!
        </p>
        <a
          href="mailto:dattahari.kadam.dev@email.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
