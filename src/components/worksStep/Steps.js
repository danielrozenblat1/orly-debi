import React from 'react';
import styles from './Steps.module.css';

const steps = [
  {
    number: '01',
    title: 'פגישת ייעוץ',
    text: 'היכרות מעמיקה עם ההרגלים, הרצונות והחזון של הלקוח בבית הקיים.',
  },
  {
    number: '02',
    title: 'גיבוש סגנון והדמיות',
    text: 'שליחת הדמיות ללקוח לקבלת אישור על הכיוון העיצובי.',
  },
  {
    number: '03',
    title: 'תכניות עבודה',
    text: 'הפקת תכניות מדויקות לחשמל, אינסטלציה ותשתיות.',
  },
  {
    number: '04',
    title: 'קניות',
    text: 'בחירת סניטריה, ריהוט ומטבח בליווי אישי ודיוק בתקציב.',
  },
  {
    number: '05',
    title: 'סטיילינג והלבשה',
    text: 'ימי קניות, סטיילינג סופי והלבשת הבית עם טאץ׳ אישי וסגור.',
  },
];

const WorkSteps = () => {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icon}></div>
          <div className={styles.header}>{step.title}</div>
          <div className={styles.text}>{step.text}</div>
          <div className={styles.number}>{step.number}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkSteps;
