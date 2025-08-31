import React, { useEffect, useRef } from 'react';
import styles from './Me.module.css';
import orlyImage from "../../images/אורלי דבי תמונה תדמיתית.png";
import ScrollReveal from 'scrollreveal';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const containerRef = useRef(null);
  const quoteRef = useRef(null);
  const strongTextRefs = useRef([]);

  useEffect(() => {
    if (containerRef.current) {
      const sr = ScrollReveal({
        duration: 1000,
        delay: 150,
        opacity: 0,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        viewFactor: 0.2
      });

      sr.reveal(`.${styles.revealItem}`, {
        origin: 'bottom',
        distance: '20px',
        interval: 100
      });

      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, scale: 0.8, rotationY: 15 },
          {
            opacity: 1,
            scale: 1,
            rotationY: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quoteRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      strongTextRefs.current.forEach((ref, index) => {
        if (ref) {
          gsap.fromTo(
            ref,
            { opacity: 0, x: -50, scale: 0.9 },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
              delay: index * 0.2,
              scrollTrigger: {
                trigger: ref,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }

    return () => {
      ScrollReveal().destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleWhatsAppMessage = () => {
    const phoneNumber = "972502737378";
    const message = "היי אורלי הגעתי מהדף שלך, אשמח לשמוע עוד על";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={containerRef} className={styles.section} id="מי אני">
      <div className={styles.container}>
        <div className={`${styles.imageWrapper} ${styles.revealItem}`}>
          <img src={orlyImage} alt="אורלי דבי" className={styles.image} />
        </div>

        <div className={`${styles.content} ${styles.revealItem}`}>
          <h2 className={styles.mainTitle}>נעים מאוד, אורלי דבי</h2>

          <div className={styles.quoteContainer} ref={quoteRef}>
         <p className={styles.quote}>
    "הרגע הכי מרגש בשבילי הוא כשאני רואה את ההקלה על הפנים שלכם, כשאתם מבינים שהכול מסודר ויש מי שמוביל אתכם"
  </p>
          </div>

          <div className={styles.textBlock}>
            <p className={styles.paragraph}>
              כל החיים עסקתי באומנות. עיצבתי תכשיטים, שולחנות, עוגות - כל מה שמאפשר לי לדייק, לייצר יופי ולרגש. אבל היה בי גם צד אחר. פרקטי, חד, ריאלי וכשהבנתי שאני יכולה לשלב את שני הצדדים האלה במקום אחד - זה הרגע שהחלטתי להכנס לתחום.
            </p>

            <div className={styles.divider}></div>
     <p className={styles.paragraph}>
  רק כשהתחלתי ללוות משפחות בתהליך, הבנתי כמה תהליך כזה הכרחי!. זה לא רק עיצוב ותכנון בית. מבחינתי, התהליך איתי זה לשאול את השאלות הנכונות, להבין מה הנושאים שעלולים לעורר מתח בין בני הזוג ולעזור להם לבחור מתוך בהירות וביטחון, למנוע טעויות קריטיות שעולות המון כסף (ובהמון כאבי ראש) ובסוף, להוביל את הלקוחות שלי אל בית החלומות שלהם.
</p>
            <div className={styles.divider}></div>

   

            <p className={styles.finalText}>
              מה שמניע אותי זה השקט שלכם. לדעת שלא תצטרכו להתמודד לבד מול קבלנים, שלא תצטרכו לריב אחד עם השנייה מרוב תסכול, ושכשתיכנסו הביתה - תדעו שהכול נעשה בדיוק לפי מי שאתם ואיך שאתם חיים. כשאני נכנסת לתמונה, אתם יודעים מה קורה, מתי, עם מי ובכמה. בלי כאבי ראש, בלי טעויות ובלי להמר.
            </p>
          </div>

          <button className={styles.ctaButton} onClick={handleWhatsAppMessage}>
            <span className={styles.buttonIcon}>💬</span>
         הצעד הראשון מתחיל בלחיצה כאן
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
