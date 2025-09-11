import { useEffect, useRef, useState } from 'react';
import styles from './Columns.module.css';
import { Player } from '@lordicon/react';
import ScrollReveal from 'scrollreveal';

import change from "../../icons/wired-lineal-1752-residence-mansion-hover-pinch.json";
import building from "../../icons/wired-lineal-63-home-hover-3d-roll (1).json";
import people from "../../icons/wired-lineal-484-two-buildings-hover-pinch.json";
import withyou from "../../icons/wired-lineal-969-meeting-conference-room-hover-pinch.json";

import Button from '../buttonForm/Button';

const PlayerColumns = () => {
  const playerRef1 = useRef(null);
  const playerRef2 = useRef(null);
  const playerRef3 = useRef(null);
  const playerRef4 = useRef(null);
  const playerRef5 = useRef(null);
  const playerRef6 = useRef(null);
  const [activeColumns, setActiveColumns] = useState({});

  const services = [
    {
      icon: change,
      ref: playerRef1,
      title: "תכנון וליווי בניית בתי קרקע",
      points: [
        "פגישת היכרות והגדרת צרכים ודרישות הלקוח",
        "תכנון אדריכלי וגיבוש סקיצות עד לאישור הסופי",
        "הכנת תיק רישוי מלא עם כל התוכניות הנדרשות",
        "הגשת הבקשה להיתר וטיפול בתהליך מול הרשויות",
        "ליווי, פיקוח ובקרה לאורך שלב הבנייה ועד לסיום הפרויקט"
      ]
    },
    {
      icon: building,
      ref: playerRef2,
      title: "תכנון וליווי בשיפוץ בתים קיימים",
      points: [
        "פגישת היכרות והגדרת צרכים",
        "תכנון ראשוני וגיבוש קונספט עיצובי",
        "תכנון מפורט והכנת תוכניות עבודה לביצוע",
        "בחירת חומרים וגיבוש שפה חומרית",
        "בחירת ריהוט וסטיילינג כולל אביזרים משלימים",
        "ליווי, ביצוע ופיקוח עד למסירת הפרויקט"
      ]
    },
    {
      icon: people,
      ref: playerRef3,
      title: "הלבשת בית והום סטיילינג",
      points: [
        "הגדרת צרכים ורצונות אישיים ופונקציונליים",
        "פיתוח קונספט עיצובי מגובש והרמוני",
        "ליווי בבחירה ורכישה של ריהוט, תאורה ואביזרים",
        "הלבשת הבית בפועל + טאצ' סופי להשלמת המראה"
      ]
    },
    {
      icon: withyou,
      ref: playerRef4,
      title: "פגישת ייעוץ",
      points: [
        "פגישת הייעוץ היא ההתחלה של תהליך מרגש בו נעמיק להבין אתכם – הצרכים, הרצונות, הסגנון האישי והאתגרים הייחודיים של החלל שלכם",
        "בפגישה נבחן את הנתונים הקיימים של הנכס, נציע כיווני חשיבה ראשוניים, נדבר על אפשרויות עיצוביות ותכנוניות",
        "הפגישה מיועדת לכל מי שנמצא בתחילתו של פרrojקט – בין אם זה שיפוץ, בנייה חדשה, או עיצוב מחדש",
        "היא תאפשר לכם להבין מהו הפוטנציאל הגלום בנכס ואילו שלבים עומדים לפניכם"
      ]
    },
    {
      icon: change, // You might want to add a new icon for this service
      ref: playerRef5,
      title: "ליווי שינויי דיירים בדירות קבלן",
      points: [
        "תהליך שינויים לדיירים הוא הזדמנות חד-פעמית להשפיע על המבנה והתכנון הפנימי של הדירה עוד לפני שהיא נבנית בפועל",
        "הליווי כולל עבודה מלאה מול מחלקת שינויי דיירים",
        "נעבור יחד על תכניות הקבלן, נבין את אורח החיים שלכם, נציע פתרונות תכנוניים ועיצוביים חכמים",
        "נבצע התאמות אישיות לחלוקה הפנימית, לנקודות החשמל, האינסטלציה, התאורה ועוד",
        "הניסיון שלי מאפשר לחסוך מכם עלויות, טעויות, והתפשרויות מיותרות בהמשך"
      ]
    },
    {
      icon: building,
      ref: playerRef6,
      title: "תכנון ועיצוב לעסקים",
      points: [
        "פגישת היכרות: גיבוש חזון, הגדרת תקציב וצרכים",
        "פיתוח קונספט ותכנון ראשוני",
        "תוכניות עבודה מפורטות ובחירת חומרים",
        "ליווי בבחירת ריהוט, תאורה ואלמנטים עיצוביים",
        "פיקוח וליווי בשטח מול אנשי מקצוע עד לסיום הפרויקט"
      ]
    }
  ];

  useEffect(() => {
    [playerRef1, playerRef2, playerRef3, playerRef4, playerRef5, playerRef6].forEach(ref => {
      ref?.current?.playFromBeginning();
    });
  }, []);

  const handleComplete = (ref) => {
    setTimeout(() => {
      ref?.current?.playFromBeginning();
    }, 2500);
  };

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.icon}`, {
      duration: 1000,
      distance: "30px",
      origin: "top",
      easing: "ease-out",
      reset: false,
      viewFactor: 0.2,
      interval: 300,
      delay: 200,
      scale: 1
    });
  }, []);

  const toggleColumn = (index) => {
    setActiveColumns(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      <div className={styles.title}>שירותי המשרד</div>
      <div className={styles.mainContainer}>
        {services.map((service, index) => (
          index % 2 === 0 && (
            <div key={index / 2} className={styles.container}>
              <div className={styles.column}>
                <div className={`${styles.cardContent} ${activeColumns[index] ? styles.active : ''}`} onClick={() => toggleColumn(index)}>
                  <div className={styles.icon}>
                    <Player icon={service.icon} ref={service.ref} size="95%" loop={true} onComplete={() => handleComplete(service.ref)} />
                  </div>
                  <div className={styles.textContainer}>
                    <p className={styles.text}>{service.title}</p>
                    <div className={`${styles.arrow} ${activeColumns[index] ? styles.arrowActive : ''}`}>▼</div>
                  </div>
                  <div className={`${styles.pointsWrapper} ${activeColumns[index] ? styles.pointsVisible : ''}`}>
                    <div className={styles.pointsContainer}>
                      {service.points.map((point, pointIndex) => (
                        <div key={pointIndex} className={styles.point} style={{
                          animationDelay: `${pointIndex * 0.1}s`,
                          opacity: activeColumns[index] ? 1 : 0,
                          transform: activeColumns[index] ? 'translateY(0)' : 'translateY(10px)'
                        }}>
                          <span className={styles.bullet}>●</span>
                          <span className={styles.pointText}>{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {services[index + 1] && (
                <div className={styles.column}>
                  <div className={`${styles.cardContent} ${activeColumns[index + 1] ? styles.active : ''}`} onClick={() => toggleColumn(index + 1)}>
                    <div className={styles.icon}>
                      <Player icon={services[index + 1].icon} ref={services[index + 1].ref} size="95%" loop={true} onComplete={() => handleComplete(services[index + 1].ref)} />
                    </div>
                    <div className={styles.textContainer}>
                      <p className={styles.text}>{services[index + 1].title}</p>
                      <div className={`${styles.arrow} ${activeColumns[index + 1] ? styles.arrowActive : ''}`}>▼</div>
                    </div>
                    <div className={`${styles.pointsWrapper} ${activeColumns[index + 1] ? styles.pointsVisible : ''}`}>
                      <div className={styles.pointsContainer}>
                        {services[index + 1].points.map((point, pointIndex) => (
                          <div key={pointIndex} className={styles.point} style={{
                            animationDelay: `${pointIndex * 0.1}s`,
                            opacity: activeColumns[index + 1] ? 1 : 0,
                            transform: activeColumns[index + 1] ? 'translateY(0)' : 'translateY(10px)'
                          }}>
                            <span className={styles.bullet}>●</span>
                            <span className={styles.pointText}>{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )
        ))}
      </div>
      <Button text="לחצו כאן ונדבר!" />
    </>
  );
};

export default PlayerColumns;