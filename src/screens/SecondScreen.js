import { BenefitsContainer } from "../components/benefitsHistalmut/BenefitHishtalmut"
import Button from "../components/buttonForm/Button"
import Steps from "../components/steps/Steps"
import styles from "./SecondScreen.module.css"
const SecondScreen=()=>{

 return <>
    <div className={styles.title}>אם אתם כאן</div>
     <div className={styles.description}>סימן שאתם רגע לפני שיפוץ או שכבר קניתם דירה מקבלן</div>
       <div className={styles.title}>אז מגיע לכם מזל טוב!</div>
           <div className={styles.description}>
        התחלה חדשה היא לא משהו שקורה כל יום ואני בטוחה שהראש שלכם כבר מלא ברעיונות, השראות וחלומות על איך הבית ייראה כשיהיה מוכן
      </div>
      <div className={styles.title}>אבל כשהתחלתם לזוז.. הבנתם שזה לא כזה פשוט</div>
      <BenefitsContainer/>
          <div className={styles.title}>וחשוב לי שתדעו - אתם לא לבד!</div>
            <div className={styles.description}>
כמעצבת פנים ואדריכלית שליוותה עשרות משפחות בדיוק ברגע שאתם נמצאים בו, אני שומעת ומבינה את כל החששות שלכם ואני יודעת כמה מהר אפשר ללכת לאיבוד..  
      </div>
        <div className={styles.title}>ובדיוק כאן, אני נכנסת לעניינים</div>
              <div className={styles.description}>
כשיש מי שמלווה אתכם בכל התהליך מקצה לקצה אתם..
      </div>
        <Steps/>
   
    </>
}
export default SecondScreen