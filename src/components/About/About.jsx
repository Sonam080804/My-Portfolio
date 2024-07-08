import React from 'react'
import styles from "./About.module.css"
import {getImageUrl} from "../../utils"
function About() {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")
            } alt="Me sitting with a laptop" 
            className={styles.aboutImage}/>

            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")
            } alt="Cursor Icon" />
                  <div className={styles.aboutItemText}>
                    <h3>Front-end Developer</h3>
                    <p>
                    As a front-end developer, I create responsive, user-friendly interfaces using React, HTML, CSS, and JavaScript, focusing on visually appealing, high-performance websites for all devices.
                    </p>
                  </div>  
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")
            } alt="server Icon" />
                  <div className={styles.aboutItemText}>
                    <h3>Back-end Developer</h3>
                    <p>
                    Currently learning backend technologies, specializing in Node.js, Express, MongoDB, and SQL. Building robust, scalable server-side applications with a focus on secure data handling and API development.
                    </p>
                  </div>  
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")
            } alt="UI Icon" />
                  <div className={styles.aboutItemText}>
                    <h3>Competitive Programmer</h3>
                    <p>
                    Passionate about Competitive Programming, adept at solving complex algorithms, and optimizing code for peak performance through competitive practice and skill refinement.
                    </p>
                  </div>  
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
