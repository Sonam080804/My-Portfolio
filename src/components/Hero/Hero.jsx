import React from 'react'
import styles from "./Hero.module.css"

import { getImageUrl } from '../../utils'

function Hero() {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title} > Hi, I'm Sonam</h1>
            <p className={styles.description}>
            I'm a Competitive Programmer and Front-End Developer. Let's connect and collaborate to advance technology together...
            </p>
            <div className={styles.btnContainer}>
              <a className={styles.contactBtn} href="sonammadnawat5@gmail.com">Contact</a>
            <a className={styles.contactBtn} href="..\..\public\assets\Resume\MyResume.pdf" download>Resume</a>
            </div>
        </div>

        <img className={styles.heroImg} src={getImageUrl("hero/heroImage.png")} alt="Hero Image of me" />

        <div className={styles.topBlur}>

        </div>
        <div className={styles.bottomBlur}>

        </div>
    </section>
  )
}

export default Hero
