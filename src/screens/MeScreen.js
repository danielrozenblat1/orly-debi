import React, { useState, useEffect, useRef } from 'react';
import styles from './MeScreen.module.css';
import AboutMe from '../components/me/Me';
import BeforeAfter from './RecommendsScreen';
import ScrollReveal from "scrollreveal";
import Button from '../components/buttonForm/Button';

const MeScreen = () => {
      useEffect(() => {
    ScrollReveal().reveal(`.${styles.title}`, {
      duration: 1000,
      distance: "100px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);
return <>
<div className={styles.container}>
<AboutMe/>
<div className={styles.title}>קצת ממה שהיה ללקוחות שלי לומר על התהליך:</div>
<BeforeAfter/>
<Button text="אורלי, בואי נדבר!"/>
</div>

</>
};

export default MeScreen;