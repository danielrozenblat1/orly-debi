import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import styles from './NewSides.module.css';
import Button from '../buttonForm/Button';


const MinimalComponent = () => {
  useEffect(() => {
    // הגדרת ScrollReveal
    const sr = ScrollReveal({
      reset: false,
      distance: '60px',
      duration: 800,
      delay: 100,
      easing: 'ease-out',
      opacity: 0
    });

    // אנימציות לכל פריט
    sr.reveal('[data-reveal="right"]', {
      origin: 'right',
      interval: 200
    });

    sr.reveal('[data-reveal="left"]', {
      origin: 'left',
      interval: 200
    });

    // ניקוי
    return () => sr.destroy();
  }, []);

  return (
<div className={styles.container}>
  {/* פריט 01 (לשעבר 02) - ספרה בצד ימין */}
  <div className={`${styles.item} ${styles.itemRight}`} >
    <div className={styles.number} data-reveal="right">01</div>
    <div className={`${styles.text} ${styles.textRight}`}>
      <strong>מתווכת בין כל הגורמים - </strong> אני מנהלת את הקשר עם הקבלן, החשמלאי, הנגר וכל בעלי המקצוע. אתם לא צריכים לרדוף אחרי אף אחד או לקבל החלטות לבד מול כל אחד. אני שם, בכל שלב, מוודאת שכל אחד יודע בדיוק מה הוא צריך לעשות ומתי.
    </div>
  </div>

<div className={`${styles.item} ${styles.itemLeft}`} >
  <div className={`${styles.text} ${styles.textLeft}`} style={{textAlign:"right"}}>
    <strong>מובילה את התהליך שלב אחרי שלב -</strong> אני בונה את לוח הזמנים, מתזמנת את כל הספקים, ומוודאת שהכול מתקדם כמו שצריך. אתם לא צריכים לתאם, לעקוב או לדאוג שמשהו יתפספס - אני כאן בשבילכם.
  </div>
  <div className={styles.number} data-reveal="left">02</div>
</div>

  {/* פריט 03 (לשעבר 05) - ספרה בצד ימין */}
<div className={`${styles.item} ${styles.itemRight}`} >
  <div className={styles.number} data-reveal="right">03</div>
  <div className={`${styles.text} ${styles.textRight}`}>
    <strong>מונעת טעויות קריטיות מראש -</strong> אני בודקת כל פרט בתכנון מראש - מיקום של שקעים, חיפויים, קירות ופתרונות עיצוב - כדי שלא תצטרכו לפרק, להזיז או לתקן דברים אחרי שבוצעו. כל טעות כזו שווה אלפי שקלים, ואני שם כדי לוודא שהיא לא תקרה.
  </div>
</div>


  <Button text="אורלי, בואי נדבר!" />

</div>

  );
};

export default MinimalComponent;