import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
      <li className={styles.link}>
          <img src={getImageUrl("contact/leetcode.png")} alt="Github icon" />
          <a href="https://leetcode.com/u/Dattahari07/" target="_blank">leetcode.com/u/dattahari7</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/gfg.png")} alt="Github icon" />
          <a href="https://www.geeksforgeeks.org/user/dattahajtw6/" target="_blank">geeksforgeeks.org/dattahajtw6/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:dattahari.kadam.dev@email.com">
            dattahari.kadam.dev@email.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/dattahari-kadam7" target="_blank">
            linkedin.com/dattahari-kadam7
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/dattahari7" target="_blank">github.com/dattahari7</a>
        </li>
        
      </ul>
    </footer>
  );
};
