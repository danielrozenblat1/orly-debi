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
      title: "ליווי שינויי דיירים בדירות קבלן",
      points: [
        "עבודה מול מחלקת שינויי דיירים",
        "בחינה של תכניות הקבלן והתאמה אישית",
        "פתרונות תכנוניים ועיצוביים לפי אורח החיים",
        "התאמות לנקודות חשמל, אינסטלציה ותאורה",
        "חיסכון בעלויות, טעויות והתפשרויות עתידיות"
      ]
    },
    {
      icon: withyou,
      ref: playerRef4,
      title: "פגישת ייעוץ והלבשת הבית",
      points: [
        "פיתוח קונספט עיצובי מגובש והרמוני",
        "הבנת צרכים, רצונות ואתגרים של החלל",
        "ליווי בבחירת ריהוט, תאורה ואביזרים",
        "הצעות כיווני חשיבה ראשוניים ואפשרויות עיצוב",
        "השלמת המראה עם טאצ' סופי וליווי מקצועי"
      ]
    }
  ];

  useEffect(() => {
    [playerRef1, playerRef2, playerRef3, playerRef4].forEach(ref => {
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
