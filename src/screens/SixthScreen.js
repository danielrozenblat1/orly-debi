import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Player } from '@lordicon/react';
import plans from "../icons/wired-outline-402-legal-balance-legal-hover-pinch.json"
import budget from "../icons/wired-outline-731-real-estate-building-project-hover-pinch (2).json"
import money from "../icons/wired-outline-414-money-bag-dollar-hover-shake (2).json"
import dizzy from "../icons/wired-outline-1252-dizz-hover-pinch (2).json"
import house from "../icons/wired-outline-63-home-loop-smoke.json"
import styles from "./SixthScreen.module.css";
import time from "../icons/wired-outline-472-hourglass-hover-rotation.json"
import PearlGrid from '../components/pains/Pains';
import IconTextComponent from '../components/can copy/Can';
import MinimalComponent from '../components/NewSides/NewSides';
import { Palette } from 'lucide-react';
import pallete from "../icons/wired-outline-761-pantone-color-palette-hover-pinch.json"
import sign from "../icons/wired-outline-1019-document-signature-hand-hover-pinch.json"
import price from "../icons/wired-outline-2913-price-down-hover-pinch.json"
import judge from "../icons/wired-outline-119-law-judge-hover-hit.json"
import stress from "../icons/wired-outline-2471-brain-mental-anxious-hover-pinch.json"
// קומפוננטת טקסט מתחלף
const CustomTextTransition = ({ texts, interval = 3000, className = "" }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setIsVisible(false);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
                setIsVisible(true);
            }, 300);
        }, interval);

        return () => clearInterval(timer);
    }, [texts.length, interval]);

    return (
        <span 
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(-10px)',
                transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out',
                display: 'inline-block',
                minHeight: '1.2em'
            }}
        >
            {texts[currentIndex]}
        </span>
    );
};

const SixthScreen = () => {
    const featuresRef = useRef(null);
    const introRef = useRef(null);
    const summaryRef = useRef(null);
    const parallaxRef = useRef(null);

    const playerRef1 = useRef(null);
    const playerRef2 = useRef(null);
    const playerRef3 = useRef(null);
    const playerRef4 = useRef(null);

    const featureTextRefs = useRef([]);

    const QUESTIONS = [
               "חושבים לשפץ ולא יודעים מאיפה להתחיל?",
       "מרגישים שהגיע הזמן לרענון בבית?",
        "קניתם דירה חדשה מקבלן?",
 
     "עומדים לעבור לדירה חדשה?",
 
    ];

    

    const handleComplete = (playerRef) => {
        setTimeout(() => {
            playerRef?.current?.playFromBeginning();
        }, 2500);
    };

    useEffect(() => {
        const players = [playerRef1, playerRef2, playerRef3, playerRef4];
        players.forEach(playerRef => {
            setTimeout(() => {
                playerRef?.current?.playFromBeginning();
            }, Math.random() * 1000);
        });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (parallaxRef.current) {
                const scrollPosition = window.scrollY;
                const translateY = scrollPosition * 0.4;
                parallaxRef.current.style.transform = `translateY(${translateY}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
            distance: '40px',
            duration: 1000,
            delay: 100,
            opacity: 0,
            easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
            mobile: true,
            reset: false,
            useDelay: 'always',
            viewFactor: 0.2
        });

        const timer = setTimeout(() => {
            if (introRef.current) {
                sr.reveal(introRef.current, {
                    origin: 'bottom',
                    distance: '20px',
                    delay: 100
                });
            }

            featureTextRefs.current.forEach((textRef, index) => {
                if (textRef) {
                    sr.reveal(textRef, {
                        origin: 'bottom',
                        distance: '40px',
                        delay: 200 + (index * 150),
                        duration: 1200,
                        easing: 'cubic-bezier(0.23, 1, 0.32, 1)'
                    });
                }
            });

            if (summaryRef.current) {
                sr.reveal(summaryRef.current, {
                    origin: 'bottom',
                    distance: '30px',
                    delay: 500,
                    duration: 1000
                });
            }
        }, 200);

        return () => {
            clearTimeout(timer);
            sr.destroy();
        };
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.parallaxContainer}>
                    <div ref={parallaxRef} className={styles.parallaxImage}></div>
                </div>
                
                <div className={styles.introSection}>
                    <div className={styles.introBox}>
                        <CustomTextTransition 
                            texts={QUESTIONS} 
                            interval={3000}
                        />
                    </div>
                </div>
                {/* <div className={styles.description}>שינויים בבית זה תמיד מרגש... אבל חשוב שתדעו -  <strong> שינוי אמיתי מתחיל בתכנון נכון. </strong>
שינוי בבית לא מתחיל בצבע לקיר או בכריות לספה. הוא מתחיל בכם. בצרכים שלכם, בטעמים, באורח החיים, ובמה שחשוב באמת.</div>
 <div className={styles.title}>אז למה בעצם חשוב להעזר במעצבת פנים?</div>
           */}
          <div className={styles.description}>

תחילתו של פרק חדש היא לא דבר שבשגרה, ואני בטוחה שהמחשבות שלכם כבר מלאות ברעיונות, השראות וחלומות על איך ייראה הבית שלכם כשהכול יהיה מוכן.  במקביל
      </div>
          <div className={styles.description}>
            <strong>
   טבעי שגם יעלו לא מעט התלבטויות, שאלות וחששות...
       </strong>
      </div>

<div className={styles.row}>
    <IconTextComponent text="מפחדים מהוצאות לא צפויות או עלויות שיצאו משליטה" icon={money}/>
    <IconTextComponent text="חוששים מבחירה של חומרים, צבעים או סגנון שלא יתאימו לכם לאורך זמן" icon={pallete}/>
    <IconTextComponent text="חוששים שהבית לא ייראה כמו שדמיינתם או שלא יתאים לצרכים שלכם בפועל" icon={house}/>
    <IconTextComponent text="מבולבלים לגבי מה כולל כל שלב, אילו אנשי מקצוע מעורבים ומה הסדר הנכון" icon={dizzy}/>
    <IconTextComponent text="חוששים שהפרויקט ייתקע, יתעכב או לא יסתיים בזמן" icon={time}/>
    <IconTextComponent text="לא יודעים איך להתנהל מול הקבלן או אנשי המקצוע" icon={sign}/>
    <IconTextComponent text="חוששים שהשינויים יפגעו בערך הדירה בעתיד" icon={price}/>
    <IconTextComponent text="מרגישים תחושת הצפה, בלבול וסטרס מהעומס של קבלת ההחלטות" icon={stress}/>
    <IconTextComponent text="צריכים לקבל החלטות קריטיות עוד לפני שבכלל נסגרתם על סגנון וכיוון" icon={judge}/>
</div>
   <div className={styles.description}>
כאדריכלית ומעצבת פנים, אני פוגשת לא מעט לקוחות שמגיעים עם חששות ופחדים טבעיים מהתהליך – וזה לגמרי מובן. חשוב לי לומר לכם 
</div>
          <div className={styles.title}>
אני כאן:
      </div>
         <MinimalComponent/>
            </div>
         
        </>
    );
};

export default SixthScreen; 
