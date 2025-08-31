import React, { useState, useEffect, useRef } from 'react';

import styles from "./RecommendsScreen.module.css";
import recommend1 from "../images/אורלי לפני אחרי 1.png";
import recommend2 from "../images/אורלי לפני אחרי 2.png";
import recommend3 from "../images/אורלי לפני אחרי 3.png";
import recommend4 from "../images/אורלי לפני אחרי 4.png";
import recommend5 from "../images/אורלי לפני אחרי 5.png";
import recommend6 from "../images/אורלי לפני אחרי 6.png";
import recommend7 from "../images/אורלי לפני אחרי 7.png";

import Testimonials from '../components/newRecommends/NewRecommends';
import Button from '../components/buttonForm/Button';

const BeforeAfter = () => {

  const testimonialImages = [
    { src: recommend1 },
    { src: recommend2 },
    { src: recommend3 },
    { src: recommend4 },
    { src: recommend5 },
    { src: recommend6 },
    { src: recommend7 },

  ];

  return (
    <>
        {/* אפקט החלקיקים הלבנים */}
      

        <div className={styles.recommendsContainer}>
        {/* אלמנט דקורטיבי */}
        <div className={styles.decorativeElement}></div>
        
  
       
        <div className={styles.leftSection}>
         
          <Testimonials testimonialImages={testimonialImages} />
        </div>
          
      </div>

    </>
  );
};

export default BeforeAfter;