import React from 'react';
import projects from "../../data/projects.json";
import ProjectCard from './ProjectCard';
import styles from "./Projects.module.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../../../assets/projects/arrow1.svg";
import arrow2 from "../../../assets/projects/arrow2.svg";
import colorSharp from "../../../assets/projects/color-sharp.png";

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button className={styles.customArrowLeft} onClick={onClick}>
      <img src={arrow1} alt="left arrow" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button className={styles.customArrowRight} onClick={onClick}>
      <img src={arrow2} alt="right arrow" />
    </button>
  );
};

function Projects() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>My Works</h2>
      <div className={styles.wraper}>
      <Carousel 
        responsive={responsive} 
        infinite={true} 
        className={styles.projects}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
      >
        { 
          projects.map((project, id) => (
            <ProjectCard key={id} project={project} />   
          ))
        }
      </Carousel>
      </div>
    </section>
  )
}

export default Projects;
