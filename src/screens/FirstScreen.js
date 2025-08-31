import React, { useState, useEffect, useRef } from 'react';
import styles from './FirstScreen.module.css';
import WorkSteps from '../components/worksStep/Steps';
import Button from '../components/buttonForm/Button';

const FirstScreen = () => {
return <>
{/* <div className={styles.description}>כשאני ניגשת לכל פרוייקט, חשוב לי להכיר אתכם, להבין איך אתם מדמיינים את הבית שלכם..... ולכן, אני עוביך  </div> */}
  <div className={styles.description}>
אז אם כבר קניתם דירה מהקבלן, אתם רגע לפני שיפוץ או שיש לכם בית עסק ואתם רוצים להפוך את המסע הזה להרבה יותר קל,חסכוני ומהנה
      </div>
  <Button text="תלחצו כאן ואצור אתכם קשר!"/>

</>
};

export default FirstScreen;