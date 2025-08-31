import React from 'react';
import styles from './Recommends.module.css';
import Button from '../buttonForm/Button';
import result1 from "../../images/אורלי דבי המלצה 1.png";
import result2 from "../../images/אורלי דבי המלצה 2.png";
import result3 from "../../images/אורלי דבי המלצה 3.png";
import result4 from "../../images/אורלי דבי המלצה 4.png";
import result5 from "../../images/אורלי דבי המלצה 5.png";
import BeforeAfter from '../../screens/RecommendsScreen';

const Works = () => {
  const images = [
    result1 ,result2, result3, result4, result5
  ];

  return (
    <>
      <div className={styles.explain}>
בשנים האחרונות העברתי עשרות פרוייקטים
      </div>
<BeforeAfter/>
      <div className={styles.explain}>
וזה מה שהיה ללקוחות לומר בסוף התהליך
      </div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`המלצה ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
          <Button text="תלחצו כאן ליצירת קשר"/>
          <div className={styles.explain}>ולמקרה שאתם סקרנים לראות עוד..</div>
  {/* <div className={styles.explain}>
אז אם כבק קניתם דירה מהקבלן, אתם רגע לפני שיפוץ ואתם רוצים להפוך את המסע הזה להרבה יותר קל,חסכוני ומהנה
      </div>
   */}
    </>
  );
};

export default Works;