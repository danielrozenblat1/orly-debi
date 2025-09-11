import { useEffect, useState, useRef } from 'react';
import { Check } from 'lucide-react';
import styles from './Steps.module.css';
import Button from '../buttonForm/Button';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "פגישת היכרות והגדרת צרכים",
      content: "הבנת אורח החיים או אופי העסק, סגנון, תקציב וצרכים פונקציונליים – זהו הבסיס לתכנון מדויק."
    },
    {
      number: 2,
      title: "פיתוח קונספט עיצובי ותכנון ראשוני",
      content: "גיבוש קונספט, הצגת סקיצות רעיוניות וחיבור בין פונקציונליות לאסתטיקה."
    },
    {
      number: 3,
      title: "הדמיות תלת־ממד",
      content: "הצגת התכנית בעזרת הדמיות פוטוריאליסטיות שמדמות את החלל לפני ביצוע."
    },
    {
      number: 4,
      title: "תכנון מפורט ותוכניות עבודה",
      content: "הפקת סט תכניות מלא לקבלן: תכנית ריצוף, חשמל, אינסטלציה, תאורה, נגרות ועוד."
    },
    {
      number: 5,
      title: "בחירת חומרים, ריהוט וסטיילינג",
      content: "סיוע מלא בבחירת ריצופים, סניטריה, מטבח, טקסטיל, תאורה ורהיטים."
    },
    {
      number: 6,
      title: "ליווי ופיקוח במהלך הביצוע",
      content: "מענה לאנשי מקצוע, ביקורים באתר, פתרון בעיות בזמן אמת – עד למסירת הפרויקט."
    },
        {
      number: 7,
      title: "גם אחרי שהתהליך נגמר",
      content: "אני נשארת זמינה עבורכם לכל שאלה, התלבטות או התאמה קטנה שצצה. אתם יודעים שיש לכם כתובת – אני כאן בשבילכם!"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineRect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const visible = new Set();

      const timelineTop = timelineRect.top;
      const timelineHeight = timelineRect.height;
      const windowHeight = window.innerHeight;
      
      let progress = 0;
      if (timelineTop <= windowHeight) {
        const scrolled = windowHeight - timelineTop;
        progress = Math.min(Math.max(scrolled / (timelineHeight + windowHeight/2), 0), 1);
      }
      
      setScrollProgress(progress);

      const elements = document.querySelectorAll(`.${styles.timelineItem}`);
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        const elementProgress = (viewportHeight - rect.top) / viewportHeight;
        
        if (elementProgress > 0.2 && elementProgress < 1) {
          visible.add(index + 1);
        }
      });

      setVisibleSteps(visible);
      if (visible.size > 0) {
        setActiveStep(Math.max(...visible));
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className={styles.container} id="תהליך העבודה איתי">
      <div className={styles.content}>
        <h2 className={styles.title}>
          תהליך הליווי – שלב אחר שלב
        </h2>
        
        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress} 
              style={{ 
                height: `${scrollProgress * 100}%`,
                transition: 'height 0.1s linear'
              }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              } ${step.number % 2 === 0 ? styles.left : styles.right}`}
            >
              <div 
                className={`${styles.timelineNumber} ${
                  visibleSteps.has(step.number) ? styles.numberActive : styles.numberInactive
                }`}
              >
                {visibleSteps.has(step.number) && activeStep > step.number ? (
                  <Check className={styles.checkIcon} />
                ) : (
                  <span className={styles.numberText}>{step.number}</span>
                )}
                <div className={styles.numberGlow} />
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.glassEffect} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.timelineTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.timelineText}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
          {/* <div className={styles.explain}>
אז אם כבר קניתם דירה מהקבלן, אתם רגע לפני שיפוץ או שיש לכם בית עסק ואתם רוצים להפוך את המסע הזה להרבה יותר קל,חסכוני ומהנה
      </div> */}
  <Button text="אורלי, בואי נדבר!"/>

      </div>



    </div>
  );
};

export default Timeline;
