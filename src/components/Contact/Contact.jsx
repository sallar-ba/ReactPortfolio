import React from 'react'
import styles from './Contact.module.css'
import { getImageUrl } from '../../utlis'
export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                
                <a href="mailto:sallar.ba@outlook.com"><img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" /></a>
            </li>
            <li className={styles.link}>
                
                <a href="https://www.linkedin.com/in/sallar-ba/" target='_blank'><img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin Icon" /></a>
            </li>
            <li className={styles.link}>
                
                <a href="https://github.com/sallar-ba" target='_blank'><img src={getImageUrl("contact/githubIcon.png")} alt="Email Icon" /></a>
            </li>
        </ul>
    </footer>
)
}
