import { useEffect, useState, useRef } from 'react';
import styles from './Steps.module.css';

const Timeline = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [visibleSteps, setVisibleSteps] = useState(new Set([1]));
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef(null);

  const steps = [
    {
      number: 1,
      title: "פגישת ייעוץ ראשונית",
      content: "בפגישה זו תקבלי הסבר מלא על התהליך, יתבצע תיאום ציפיות ותשורטט סקיצה ראשונית של הגבות המושלמות עבורך. תקבלי הנחיות מדויקות להכנה לקראת הטיפול הראשון",
      color: "tone-1"
    },
    {
      number: 2,
      title: "הטיפול הראשון",
      content: "לאחר חתימה על הצהרת בריאות, תיהני מטיפול מקצועי שיימשך כשעה וחצי. הטיפול מתחיל בסקיצה מדויקת המותאמת לתווי פנייך, ולאחר מכן מתבצע הטיפול עצמו עם הפיגמנט",
      color: "tone-2"
    },
    {
      number: 3,
      title: "תקופת ההחלמה",
      content: "במשך כחודש וחצי, הגבות שלך יעברו תהליך החלמה טבעי. בתקופה זו תוכלי לראות את השינויים בגבות יום אחר יום. תקבלי הנחיות מפורטות לטיפול בגבות במהלך תקופה זו, ותמיד תוכלי לפנות בכל שאלה",
      color: "tone-3"
    },
    {
      number: 4,
      title: "הטיפול השני והסופי",
      content: "כחודש וחצי לאחר הטיפול הראשון, תגיעי לטיפול השני שיימשך כשעה. בטיפול זה יתבצע דיוק ומקסום של התוצאה הסופית. לאחריו, תצאי עם גבות מושלמות שמותאמות בדיוק לפנייך ויישארו איתך לאורך זמן",
      color: "tone-4"
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
    <div className={styles.container} id="תהליך המיקרובליידינג">
      <div className={styles.content}>
        <div className={styles.titleSection}>
          <h2 className={styles.mainTitle}>תהליך העבודה של אורלי</h2>
        </div>

        <div className={styles.timeline} ref={timelineRef}>
          <div className={styles.timelineLine}>
            <div 
              className={styles.timelineProgress}
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>
          
          {steps.map((step) => (
            <div 
              key={step.number}
              className={`${styles.timelineItem} ${
                visibleSteps.has(step.number) ? styles.active : styles.inactive
              }`}
            >
              <div className={styles.stepNumber}>
                <span 
                  className={`${styles.numberText} ${
                    visibleSteps.has(step.number) 
                      ? styles.numberFilled 
                      : styles.numberOutline
                  }`}
                >
                  0{step.number}
                </span>
              </div>

              <div className={styles.timelineContent}>
                <div className={`${styles.contentCard} ${
                  visibleSteps.has(step.number) ? styles.cardActive : ''
                }`}>
                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.stepDescription}>
                    {step.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;