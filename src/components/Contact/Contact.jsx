import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:sonammadnawat5@gmail.com">
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/sonam-sonam-49410a235/">
            <img
              src={getImageUrl("contact/linkedinIcon.png")}
              alt="LinkedIn icon"
            />
          </a>
        </li>
        <li className={styles.link}>
          <a href="https://www.github.com/Sonam080804">
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
