import React from 'react'
import { getImageUrl } from '../../utlis';
import styles from './About.module.css';

export const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={getImageUrl('about/aboutImage.png')} alt="Am Animated Picture of me" className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/cursorIcon.png')} alt="Cursor Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Machine Learning</h3>
                            <p>
                            An aspiring machine learning enthusiast, I'm on a journey to unlock the potential of AI and data, combining my academic knowledge with hands-on experience to build intelligent solutions and explore the limitless possibilities of the machine learning world.                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Research</h3>
                            <p>
                            Dedicated to exploring the frontiers of AI and machine learning, I am an aspiring computer scientist with a curiosity-driven approach to solving real-world challenges through research and innovation.                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>Software Development</h3>
                            <p>
                            An enthusiastic software developer, I specialize in building web applications with a focus on user-friendly interfaces. Proficient in technologies like Flask and React, I strive to create seamless digital experiences that blend creativity with functionality.                            </p>
                        </div>
                    </li>
                </ul>
            </div>

    </section>
    )
};
