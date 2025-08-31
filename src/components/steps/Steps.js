import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import styles from './Steps.module.css'
import Button from '../buttonForm/Button'

// ייבוא SVG כ־ReactComponent
import { ReactComponent as MoneyIcon } from '../../svg/חסכון בכסף.svg'
import { ReactComponent as MagnetIcon } from '../../svg/בלי הפתעות.svg'
import { ReactComponent as BusinessIcon } from '../../svg/תקציב.svg'
import { ReactComponent as SupplierIcon } from '../../svg/ספקים.svg'

const Steps = () => {
  const stepsData = [
    {
      id: 1,
      icon: <MoneyIcon className={styles.svgIcon} />,
      title: 'חוסכים עשרות אלפי שקלים',
      description:
        'ניהול נכון של התקציב כבר מהשלב הראשון מונע טעויות יקרות, רכישות מיותרות ובחירות שתשלמו עליהן פעמיים. אני מוודאת שכל שקל מושקע נכון.'
    },
    {
      id: 2,
      icon: <MagnetIcon className={styles.svgIcon} />,
      title: 'יודעים בדיוק איך הבית שלכם ייראה - בלי הפתעות',
      description:
        'בלי בלבול, בלי שאלות מיותרות, בלי חוסר וודאות. יש סדר ברור, תהליך מדויק וליווי צמוד לאורך כל הדרך.'
    },
    {
      id: 3,
      icon: <BusinessIcon className={styles.svgIcon} />,
      title: 'נשארים בתוך מסגרת התקציב שקבענו מראש',
      description:
        'אני בונה יחד אתכם תוכנית מסודרת, כוללת פתרונות מותאמים ושיקולים כלכליים חכמים. אתם יודעים מראש כמה יעלה כל שלב - בלי הפתעות בהמשך.'
    },
    {
      id: 4,
      icon: <SupplierIcon className={styles.svgIcon} />,
      title: 'לא מתנהלים מול אף ספק וקבלן',
      description:
        'אני מנהלת את התהליך מול כל בעלי המקצוע, בודקת את העבודה בפועל, ודואגת שתדעו בדיוק מה אתם מקבלים - ובאיזה שלב.'
    }
  ]

  useEffect(() => {
    ScrollReveal().reveal(`.${styles.stepTitle}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    })

    ScrollReveal().reveal(`.${styles.stepDescription}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    })

    ScrollReveal().reveal(`.${styles.iconContainer}`, {
      distance: '40px',
      duration: 800,
      delay: 200,
      origin: 'bottom',
      easing: 'ease-out',
      interval: 100,
      reset: false,
      viewFactor: 0.3
    })

    ScrollReveal().reveal(`.${styles.connector}`, {
      duration: 1200,
      delay: 400,
      easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      reset: false,
      viewFactor: 0.2,
      beforeReveal: el => {
        el.style.transform = 'scaleY(0)'
        el.style.transformOrigin = 'top center'
      },
      afterReveal: el => {
        el.style.transform = 'scaleY(1)'
      },
      interval: 200
    })
  }, [])

  return (
    <div className={styles.stepsContainer}>
      {stepsData.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.stepItem} step-${step.id}`}>
            <div className={styles.iconContainer}>{step.icon}</div>
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
          {index < stepsData.length - 1 && (
            <div className={styles.connector}></div>
          )}
        </div>
      ))}
      <Button text='אורלי, בואי נדבר!' />
    </div>
  )
}

export default Steps
