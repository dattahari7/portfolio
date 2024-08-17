import React from 'react';
import styles from "./hero.module.css";
import { getImageUrl } from '../../utils';


const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dattahari</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2+ years of experiance using React and
          Node.js. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:dattahari.kadam.dev@gmail.com" className={styles.contactBtn}>Contact Me</a>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero Image" className={styles.heroImg} />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
}

export default Hero
