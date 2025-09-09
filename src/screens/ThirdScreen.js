import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './ThirdScreen.module.css';

// תמונות לדסקטופ
import image1Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 1.png";
import image2Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 2.png";
import image3Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 3.png";
import image4Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 4.png";
import image5Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 5.png";
import image6Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 6.png";
import image7Desktop from "../images/אורלי דבי קרוסלת פתיחה מחשבים 7.png";

// תמונות למובייל
import image1Mobile from "../images/אורלי דבי קרוסלת פתיחה 1.png";
import image2Mobile from "../images/אורלי דבי קרוסלת פתיחה 2.png";
import image3Mobile from "../images/אורלי דבי קרוסלת פתיחה 3.png";
import image4Mobile from "../images/אורלי דבי קרוסלת פתיחה 4.png";
import image5Mobile from "../images/אורלי דבי קרוסלת פתיחה 5.png";
import image6Mobile from "../images/אורלי דבי קרוסלת פתיחה 6.png";
import image7Mobile from "../images/אורלי דבי קרוסלת פתיחה 7.png";
import image8Mobile from "../images/אורלי דבי קרוסלת פתיחה 8.png";
import image9Mobile from "../images/אורלי דבי קרוסלת פתיחה 9.png";

// תמונת הלוגו
import logoImage from "../images/אורלי דבי לוגו.png";

import Loader from '../components/loader/Loader';
import PrivacyPolicy from '../components/privacy/Privacy';

const ArchitectLanding = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImagesCount, setLoadedImagesCount] = useState(0);
  
  // Refs for GSAP animations
  const logoRef = useRef(null);
  const textContainerRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });
  
  const [errors, setErrors] = useState({
    fullName: '',
    phone: '',
    reason: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const serverUrl = "https://dynamic-server-dfc88e1f1c54.herokuapp.com/leads/newLead";
  const reciver = "od.intdesign@gmail.com";

  // בחירת תמונות בהתאם לגודל המסך
  const desktopImages = [ image4Desktop, image5Desktop, image6Desktop,image1Desktop, image2Desktop, image3Desktop, image7Desktop];
  const mobileImages = [image6Mobile,image3Mobile,image1Mobile, image2Mobile,  image4Mobile, image5Mobile,  image7Mobile, image8Mobile, image9Mobile];
  
  // זיהוי מכשיר מובייל
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const images = isMobile ? mobileImages : desktopImages;

  // פונקציה ליצירת אפקט GSAP ללוגו
  const createGSAPLogo = () => {
    if (!logoRef.current || !imagesLoaded) return;
    
    // GSAP Timeline עדין וקליל ללוגו
    const tl = gsap.timeline({ delay: 0.8 });
    
    // אפקט כניסה עדין ללוגו
    tl.fromTo(logoRef.current, 
      {
        opacity: 0,
        y: 50,
        scale: 0.8,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out"
      }
    );
    
    // אפקט זוהר עדין ללוגו
    tl.to(logoRef.current,
      {
        filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
        duration: 0.8,
        ease: "power1.out"
      },
      "-=0.6"
    );
    
    // אינטראקטיביות עדינה ללוגו
    logoRef.current.addEventListener('mouseenter', () => {
      gsap.to(logoRef.current, {
        y: -8,
        scale: 1.05,
        duration: 0.5,
        ease: "power2.out",
        filter: "drop-shadow(0 0 30px rgba(255,255,255,0.5))"
      });
    });
    
    logoRef.current.addEventListener('mouseleave', () => {
      gsap.to(logoRef.current, {
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: "power2.out",
        filter: "drop-shadow(0 0 20px rgba(255,255,255,0.3))"
      });
    });
  };

  // אנימציות נוספות עם GSAP
  useEffect(() => {
    if (!imagesLoaded) return;

    // אנימציית כניסה לקונטיינר הטקסט
    gsap.fromTo(textContainerRef.current, 
      {
        opacity: 0,
        scale: 0.8,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1.2,
        delay: 0.5,
        ease: "power3.out"
      }
    );

    // יצירת אנימציה ללוגו
    createGSAPLogo();

    // אנימציית כניסה לאינדיקטור גלילה
    gsap.fromTo(scrollIndicatorRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 2,
        ease: "power2.out"
      }
    );

  }, [imagesLoaded]);

  const handlePrivacyClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  useEffect(() => {
    const preloadImages = () => {
      let loadedCount = 0;
      const allImages = [...images, logoImage]; // כולל את הלוגו בטעינה מוקדמת
      
      allImages.forEach((imageSrc) => {
        const img = new Image();
        img.onload = () => {
          loadedCount++;
          setLoadedImagesCount(loadedCount);
          
          if (loadedCount === allImages.length) {
            setImagesLoaded(true);
            setTimeout(() => {
              setIsLoaded(true);
            }, 300);
          }
        };
        
        img.onerror = () => {
          loadedCount++;
          setLoadedImagesCount(loadedCount);
          console.error(`Failed to load image: ${imageSrc}`);
          
          if (loadedCount === allImages.length) {
            setImagesLoaded(true);
            setTimeout(() => {
              setIsLoaded(true);
            }, 300);
          }
        };
        
        img.src = imageSrc;
      });
    };

    if (images.length > 0) {
      preloadImages();
    }
  }, [images]);

  useEffect(() => {
    if (!imagesLoaded) return;
    
    const interval = setInterval(() => {
      if (!showContactForm) {
        handleNextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide, showContactForm, imagesLoaded]);

  const handleNextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(index);
        setIsTransitioning(false);
      }, 500);
    }
  };

  const scrollToSecondScreen = () => {
    const secondScreenElement = document.getElementById('מסך שני');
    if (secondScreenElement) {
      secondScreenElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // פונקציה חדשה לגלילה לפרויקטים
  const scrollToProjects = () => {
    const projectsElement = document.getElementById('פרוייקטים');
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const validateForm = () => {
    if (!agreed) {
      alert("עליך לאשר את תנאי השימוש ומדיניות הפרטיות");
      return false;
    }

    let valid = true;
    const newErrors = { fullName: '', phone: '', reason: '' };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'נא להזין שם מלא';
      alert('נא להזין שם מלא');
      valid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'שם חייב להכיל לפחות 2 תווים';
      alert('שם חייב להכיל לפחות 2 תווים');
      valid = false;
    }

    const phoneRegex = /^0(5\d|[23489])\d{7}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'נא להזין מספר טלפון';
      alert('נא להזין מספר טלפון');
      valid = false;
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'נא להזין מספר טלפון תקין';
      alert('נא להזין מספר טלפון תקין');
      valid = false;
    }

    if (!formData.reason.trim()) {
      newErrors.reason = 'נא לבחור סיבת פנייה';
      alert('נא לבחור סיבת פנייה');
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleContactSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const serverData = {
      name: formData.fullName,
      phone: formData.phone,
      email: "",
      reason: formData.reason,
      reciver: reciver
    };

    try {
      const serverResponse = await fetch(serverUrl, {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(serverData)
      });

      if (serverResponse.ok) {
        setIsSubmitting(false);
        setSubmitted(true);
        
        setTimeout(() => {
          setFormData({
            fullName: '',
            phone: '',
            reason: ''
          });
          setErrors({
            fullName: '',
            phone: '',
            reason: ''
          });
          setSubmitted(false);
          setShowContactForm(false);
          setAgreed(false);
        }, 3000);
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      alert("התרחשה שגיאה, אנא נסו שוב מאוחר יותר");
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  if (!imagesLoaded) {
    return <Loader />;
  }

  return (
    <>
      <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`}>
        {/* Background Carousel */}
        <div className={styles.carouselContainer}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.slide} ${index === currentSlide ? styles.active : ''} ${isTransitioning ? styles.transitioning : ''}`}
            >
              <div
                className={styles.slideImage}
                style={{ backgroundImage: `url("${image}")` }}
              ></div>
              <div className={styles.overlay}></div>
            </div>
          ))}
        </div>

        {/* Vignette Effect */}
        <div className={styles.vignette}></div>

        {/* Content */}
        <div className={styles.content}>
          {/* Text Container with Glass Effect - Including Logo */}
          <div ref={textContainerRef} className={styles.textContainer}>
            <img 
              ref={logoRef} 
              src={logoImage} 
              alt="Orly Debi Logo" 
              className={styles.logoImage}
            />
            {/* <p className={styles.subtitle}>
              כשחלומות פוגשים מציאות
            </p>
            <p className={styles.description}>
              מעצבת פנים ואדריכלית - ליווי מלא מהשרטוטים עד לקבלת המפתח
            </p> */}
          </div>
          
          {/* Scroll Indicator */}
          <div ref={scrollIndicatorRef} className={styles.scrollIndicator} onClick={scrollToSecondScreen}>
            <div className={styles.scrollArrow}></div>
          </div>
        </div>

        {/* Action Buttons Container */}
        <div className={styles.actionButtonsContainer}>
          <button className={styles.contactButton} onClick={() => setShowContactForm(true)}>
            <span>צרו קשר</span>
          </button>
          <button className={styles.projectsButton} onClick={scrollToProjects}>
            <span>לפרוייקטים</span>
          </button>
        </div>
      </div>

      {/* Contact Form Overlay */}
      <div className={`${styles.contactOverlay} ${showContactForm ? styles.active : ''}`}>
        <div className={styles.contactForm}>
          <button className={styles.closeButton} onClick={() => setShowContactForm(false)}>
            ×
          </button>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>שם מלא</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`${styles.formInput} ${errors.fullName ? styles.inputError : ''}`}
              placeholder="השם שלכם"
              disabled={isSubmitting || submitted}
            />
            {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>מספר טלפון</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`${styles.formInput} ${errors.phone ? styles.inputError : ''}`}
              placeholder="050-1234567"
              disabled={isSubmitting || submitted}
            />
            {errors.phone && <p className={styles.errorText}>{errors.phone}</p>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.formLabel}>סיבת פנייה</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleInputChange}
              className={`${styles.formSelect} ${errors.reason ? styles.inputError : ''}`}
              disabled={isSubmitting || submitted}
            >
              <option value="">בחרו סיבת פנייה</option>
              <option value="שיפוץ">שיפוץ</option>
              <option value="קניתי דירה מקבלן">קניתי דירה מקבלן</option>
              <option value="אחר">אחר</option>
            </select>
            {errors.reason && <p className={styles.errorText}>{errors.reason}</p>}
          </div>

          {/* תיבת האישור למדיניות הפרטיות */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            marginTop: "20px",
            marginBottom: "20px"
          }}>
            <label style={{ 
              direction: "rtl", 
              fontFamily: "AssistantR", 
              fontSize: "0.9rem", 
              textAlign: "right", 
              display: "flex", 
              alignItems: "center", 
              flexWrap: "wrap", 
              gap: "5px" 
            }}>
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                style={{ marginLeft: "10px" }}
                disabled={isSubmitting || submitted}
              />
              קראתי את
              <span onClick={handlePrivacyClick}>
                <PrivacyPolicy 
                  ownerName="אורלי דבי" 
                  email="od.intdesign@gmail.com" 
                  phone="+972 50-273-7378" 
                  domain="https://orlydebi.co.il/" 
                />
              </span>
              ואני מאשר/ת
            </label>
          </div>

          <div className={styles.formButtons}>
            <button 
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''} ${submitted ? styles.submitted : ''}`}
              onClick={handleContactSubmit}
              disabled={isSubmitting || submitted}
            >
              {isSubmitting ? 'שולח...' : submitted ? 'נשלח בהצלחה!' : 'אורלי, בואי נדבר'}
            </button>
            <button 
              className={styles.cancelButton} 
              onClick={() => setShowContactForm(false)}
              disabled={isSubmitting || submitted}
            >
              ביטול
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArchitectLanding;