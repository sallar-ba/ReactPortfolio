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
                            <h3>About</h3>
                            <p>
                                I am a Motivated undergraduate Computer Science student with a strong academic record and hands-on experience in software development and AI research, poised to contribute innovative solutions to the tech industry.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/serverIcon.png')} alt="Server Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>About</h3>
                            <p>
                                I am a Motivated undergraduate Computer Science student with a strong academic record and hands-on experience in software development and AI research, poised to contribute innovative solutions to the tech industry.
                            </p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl('about/uiIcon.png')} alt="UI Icon" />
                        <div className={styles.aboutItemText}>
                            <h3>About</h3>
                            <p>
                                I am a Motivated undergraduate Computer Science student with a strong academic record and hands-on experience in software development and AI research, poised to contribute innovative solutions to the tech industry.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>

    </section>
    )
};
