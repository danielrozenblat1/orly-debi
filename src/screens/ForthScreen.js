import React, { useLayoutEffect, useRef, useEffect } from "react";
import styles from "./SecondScreen.module.css";
import orly from "../images/אני2.png";

const gsap = {
  registerPlugin: () => {},
  fromTo: (targets, from, to) => {
    const elements = Array.isArray(targets) ? targets : [targets];
    elements.forEach((el, i) => {
      if (el) {
        setTimeout(() => {
          Object.assign(el.style, {
            opacity: to.opacity || 1,
            transform: `rotateY(${to.rotateY || 0}deg)`,
            transition: `all ${to.duration || 1.8}s ease-in-out`,
          });
        }, (to.stagger || 0) * i * 1000);
      }
    });
  }
};
const ScrollTrigger = {};
gsap.registerPlugin(ScrollTrigger);

const Lenis = function () {
  return { raf: () => {} };
};

const TitleLine = ({ text }) => {
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    if (lineRef.current) {
      const letters = lineRef.current.querySelectorAll(`.${styles.letter}`);
      gsap.fromTo(
        Array.from(letters),
        { opacity: 0, rotateY: 90, transformOrigin: "50% 50% -10px" },
        { opacity: 1, rotateY: 0, duration: 1.8, stagger: 0.07 }
      );
    }
  }, []);

  return (
    <h1 ref={lineRef} className={styles.titleLine}>
      {text.split("").map((char, i) =>
        char === " " ? (
          <span key={i} className={styles.space}></span>
        ) : (
          <span key={i} className={styles.letter} style={{ opacity: 0, transform: "rotateY(90deg)" }}>
            {char}
          </span>
        )
      )}
    </h1>
  );
};

const Counter = ({ prefix, value, suffix, label }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (ref.current) {
      let current = 0;
      const increment = value / 60;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          current = value;
          clearInterval(timer);
        }
        ref.current.innerText = Math.floor(current);
      }, 33);
    }
  }, [value]);

  return (
    <div className={styles.counter}>
      <div className={styles.counterValue}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <span ref={ref} className={styles.number}>0</span>
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
      <div className={styles.counterLabel}>{label}</div>
    </div>
  );
};

const ProfileImage = () => {
  const imageRef = useRef(null);

  useLayoutEffect(() => {
    if (imageRef.current) {
      setTimeout(() => {
        imageRef.current.style.opacity = '1';
        imageRef.current.style.transform = 'scale(1) rotateY(0deg)';
      }, 500);
    }
  }, []);

  return (
    <div className={styles.profileContainer}>
      <div
        ref={imageRef}
        className={styles.profileImage}
        style={{
          opacity: 0,
          transform: 'scale(0.85) rotateY(15deg)',
          transition: 'all 1.5s ease'
        }}
      >
        <img src={orly} alt="אורלי דבי - אדריכלית ומעצבת פנים" />
        <div className={styles.imageOverlay}>
          <span className={styles.imageText}>אדריכלית ומעצבת פנים</span>
        </div>
      </div>
    </div>
  );
};

const OrlyHero = () => {
  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    function raf(time) {
      if (lenis.raf) lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <section className={styles.hero}>
      <Counter prefix="+" value={15} label="שנות ניסיון" />
      <div className={styles.center}>
        <div className={styles.topSmall}>בדיוק מה שאתם צריכים</div>
        <TitleLine text="Orly Debi" />
        <ProfileImage />
        <div className={styles.bottomTexts}>
          <p className={styles.textLeft}>
            אני אורלי. כל חיי עסקתי ביצירה, אבל מה שבאמת מרגש אותי הוא להפוך בית של מישהו למקום שמרגיש נכון, מדויק, ולא פחות חשוב - ריאלי.
            התגובות של הלקוחות, הרגע שהם אומרים "בול קלעת", זה מה שמניע אותי.
          </p>
          <p className={styles.textRight}>
            אני מתמחה בתכנון מדויק וליווי אישי בכל שלב, כדי שתדעו לאן הולך כל שקל, ותהיו בטוחים שכל החלטה נלקחת מתוך ניסיון. אני לא רק מעצבת לכם את הבית, אני עוזרת לכם להימנע מטעויות יקרות.
          </p>
        </div>
        <button className={styles.aboutBtn}>בואו נתחיל</button>
        <div className={styles.socials}>
          <a href="#">אינסטגרם</a>
          <a href="#">פייסבוק</a>
          <a href="#">וואטסאפ</a>
          <a href="#">אימייל</a>
        </div>
      </div>
      <Counter suffix="+" value={98} label="פרויקטים מוצלחים" />
    </section>
  );
};

export default OrlyHero;
