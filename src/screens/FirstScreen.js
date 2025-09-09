import React, { useState, useEffect, useRef } from 'react';
import styles from './FirstScreen.module.css';
import WorkSteps from '../components/worksStep/Steps';
import Button from '../components/buttonForm/Button';
import Timeline from '../components/steps copy/Steps';

const FirstScreen = () => {
return <>
{/* <div className={styles.description}>כשאני ניגשת לכל פרוייקט, חשוב לי להכיר אתכם, להבין איך אתם מדמיינים את הבית שלכם..... ולכן, אני עוביך  </div> */}
<Timeline/>

</>
};

export default FirstScreen;