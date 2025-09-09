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
              כל החיים שלי סבבו סביב אומנות. עיצבתי תכשיטים, שולחנות, עוגות - כל מה שאפשר לי לדייק, לייצר יופי ולרגש אנשים. אבל לצד היצירתיות שלי, תמיד היה בי גם צד ריאלי (שאפילו כולל תואר במדעי המחשב) והשילוב הזה בין הצדדים הוא הבסיס של כל פרויקט שאני מובילה - חשיבה יצירתית מצד אחד, ותכנון מסודר, מהיר ויעיל מצד שני.
            </p>

            <div className={styles.divider}></div>

        <p className={styles.paragraph}>כשהתחלתי ללוות משפחות, הבנתי כמה התהליך הוא הכרחי ואפילו משנה חיים! זה לא רק עיצוב, זה תכנון נכון של בית. זה להבין איך תרגישו בבית שלכם ביום יום. איפה תזוזו, איפה תתארגנו בבוקר, איפה תשבו בערב, ושאחרי כל המסע הזה - אתם תכנסו לבית שחלמתם עליו בהתחלה בלי כאב ראש מכל הדרך ובלי כאב בכיס מטעויות שאפשר למנוע בקלות!</p>

            <div className={styles.divider}></div>


            <p className={styles.finalText}>
              מה שמניע אותי זה השקט שלכם. לדעת שאתם רגועים ומרגישים בידיים טובות, שהתהליך יהיה חלק וברור ושבסוף - תתאהבו בתוצאה!. כשאני נכנסת לתמונה, אתם יודעים מה קורה, מתי, עם מי ובכמה. בלי כאבי ראש, עם ביטחון מלא ובהנאה.
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