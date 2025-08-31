import React, { useEffect, useRef } from 'react';
import needle from "../../icons/wired-outline-2534-work-life-balance-hover-pinch (1).json";
import technic from "../../icons/wired-outline-731-real-estate-building-project-hover-pinch (2).json";
import shake from "../../icons/wired-outline-730-signpost-direction-hover-spin (1).json";
import work from "../../icons/wired-outline-298-coins-loop-spin (5).json";
import styles from './BenefitHishtalmut.module.css';
import ScrollReveal from 'scrollreveal';
import { Player } from "@lordicon/react";

const VerticalIconCard = ({ text, icon }) => {
  const playerRef1 = useRef(null);

  const handleComplete = () => {
    setTimeout(() => {
      playerRef1?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    playerRef1?.current?.playFromBeginning();
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.text}`, {
      duration: 1000,
      distance: "40px",
      origin: "bottom",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1,
    });
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.icon}>
        <Player 
          icon={icon} 
          ref={playerRef1} 
          size="100%" 
          onComplete={handleComplete}
        />
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

const BenefitsContainer = () => {
  const benefits = [
    {
      icon: needle,
      text: "מבקשים מכם לקבל החלטות קריטיות על חשמל, אינסטלציה ומטבח - עוד לפני שבכלל נסגרתם על סגנון וכיוון"
    },
    {
      icon: technic,
      text: "הקבלן לוחץ, שאר הספקים מבלבלים אתכם עם מושגים מקצועיים ודעות שונות, ואתם הולכים לאיבוד"
    },
    {
      icon: work,
      text: "הקצבתם לעצמכם סכום מסוים שלא תעברו ואתם מבינים שכל טעות תעלה לכם ביוקר אם תפעלו לא נכון"
    },
    {
      icon: shake,
      text: "אתם מרגישים שאתם מאלתרים תוך כדי תנועה, בלי באמת לדעת אם אתם עושים את זה נכון"
    }
  ];

  return (
    <div className={styles.container}>
      {benefits.map((benefit, index) => (
        <VerticalIconCard 
          key={index} 
          text={benefit.text} 
          icon={benefit.icon}
        />
      ))}
    </div>
  );
};

export default VerticalIconCard;
export { BenefitsContainer };
