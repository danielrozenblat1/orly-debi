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
      {/* פריט 01 - למנוע טעויות קריטיות מראש - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`}>
        <div className={styles.number} data-reveal="right">01</div>
        <div className={`${styles.text} ${styles.textRight}`}>
          <strong>למנוע טעויות קריטיות מראש - </strong>
          אני בודקת כל פרט בתכנון מראש - מיקום של שקעים, חיפויים, קירות ופתרונות עיצוב - כדי שלא תצטרכו לפרק, להזיז או לתקן דברים אחרי שבוצעו. כל טעות כזו שווה אלפי שקלים, ואני שם כדי לוודא שהיא לא תקרה.
        </div>
      </div>

      {/* פריט 02 - לתווך בין כל הגורמים - ספרה בצד שמאל */}
      <div className={`${styles.item} ${styles.itemLeft}`}>
        <div className={`${styles.text} ${styles.textLeft}`} style={{textAlign:"right"}}>
          <strong>לתווך בין כל הגורמים - </strong>
          אני מנהלת את הקשר עם הקבלן, החשמלאי, הנגר וכל בעלי המקצוע. אתם לא צריכים לרדוף אחרי אף אחד או לקבל החלטות לבד מול כל אחד. אני שם, בכל שלב, מוודאת שכל אחד יודע בדיוק מה הוא צריך לעשות ומתי.
        </div>
        <div className={styles.number} data-reveal="left">02</div>
      </div>

      {/* פריט 03 - להוביל את התהליך שלב אחרי שלב - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`}>
        <div className={styles.number} data-reveal="right">03</div>
        <div className={`${styles.text} ${styles.textRight}`}>
          <strong>להוביל את התהליך שלב אחרי שלב - </strong>
          אני בונה את לוח הזמנים, מתזמנת את כל הספקים, מוודאת שהכול מתקדם כמו שצריך. אתם לא צריכים לתאם, לעקוב או לדאוג שמשהו יתפספס - אני כאן בשבילכם.
        </div>
      </div>

      {/* פריט 04 - לראות את התוצאה עוד לפני שהתחלתם - ספרה בצד שמאל */}
      <div className={`${styles.item} ${styles.itemLeft}`}>
        <div className={`${styles.text} ${styles.textLeft}`} style={{textAlign:"right"}}>
          <strong>לראות את התוצאה עוד לפני שהתחלתם - </strong>
          אחד הדברים הכי מתסכלים הוא לגלות, רק אחרי שכבר בוצע ושולם, שהבית נראה שונה ממה שדמיינתם. אצלי – זה לא קורה. אני יוצרת עבורכם הדמיות מדויקות, כך שתוכלו לראות איך החלל יראה, לפני ששוברים, לפני שבונים, לפני שמזמינים, כדי שתצאו לדרך בראש שקט, בלי הפתעות ובלי סימני שאלה.
        </div>
        <div className={styles.number} data-reveal="left">04</div>
      </div>

      {/* פריט 05 - לשלוט בתקציב בלי הפתעות - ספרה בצד ימין */}
      <div className={`${styles.item} ${styles.itemRight}`}>
        <div className={styles.number} data-reveal="right">05</div>
        <div className={`${styles.text} ${styles.textRight}`}>
          <strong>לשלוט בתקציב בלי הפתעות - </strong>
          שיפוץ או תהליך עיצוב יכולים להרגיש כמו בור בלי תחתית – כל החלטה קטנה מוסיפה עוד הוצאה, עד שמאבדים שליטה. כדי שזה לא יקרה לכם, אני עוזרת לבנות מסגרת תקציב ברורה מההתחלה, אנחנו מגדירים סדרי עדיפויות, יודעים בדיוק מה חשוב באמת, ואיפה אפשר להתגמש. כך התהליך נשאר מדויק, מחושב – ובלי הפתעות לא נעימות בדרך.
        </div>
      </div>

      <Button text="אורלי, בואי נדבר!" />
    </div>
  );
};

export default MinimalComponent;