import React from 'react';
import styles from './Hero.module.css';
import { getImageUrl } from '../../utlis';

export const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sallar</h1>
            <p className={styles.description}>I am a junior studying Computer Science at Bahria University, and I am thrilled to connect with fellow professionals in the tech industry.</p>
            <a href='mailto:sallar.ba@outlook.com' className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt='hero-Image' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>
  )
};
