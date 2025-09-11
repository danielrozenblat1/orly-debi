import React, { useState, useEffect, useRef } from 'react'
import styles from './ProjectsScreen.module.css'

// Import all images (replace these with your actual imports)
import cafe1 from '../images/בית קפה אורלי 1.png'
import cafe2 from '../images/בית קפה אורלי 2.png'
import cafe3 from '../images/בית קפה אורלי 3.png'
import cafe4 from '../images/בית קפה אורלי 4.png'
import cafe5 from '../images/בית קפה אורלי 5.png'
import cafe6 from '../images/בית קפה אורלי 6.png'
import cafe7 from '../images/בית קפה אורלי 7.png'
import cafe8 from '../images/בית קפה אורלי 8.png'
import cafe9 from '../images/בית קפה אורלי 9.png'
import cafe10 from '../images/בית קפה אורלי 10.png'
import cafe11 from '../images/בית קפה אורלי 11.png'
import cafe12 from '../images/בית קפה אורלי 12.png'
import cafe13 from '../images/בית קפה אורלי 13.png'
import cafe14 from '../images/בית קפה אורלי 14.png'
import cafe15 from '../images/בית קפה אורלי 15.png'
import cafe16 from '../images/בית קפה אורלי 16.png'
import cafe17 from '../images/בית קפה אורלי 17.png'
import cafe18 from '../images/בית קפה אורלי 18.png'
import cafe19 from '../images/בית קפה אורלי 19.png'

import livui1 from '../images/בית קרקע במרכז הארץ ליווי 1.png'
import livui2 from '../images/בית קרקע במרכז הארץ ליווי 2.png'
import livui4 from '../images/בית קרקע במרכז הארץ ליווי 4.png'
import livui5 from '../images/בית קרקע במרכז הארץ ליווי 5.png'
import livui6 from '../images/בית קרקע במרכז הארץ ליווי 6.png'
import livui7 from '../images/בית קרקע במרכז הארץ ליווי 7.png'
import livui8 from '../images/בית קרקע במרכז הארץ ליווי 8.png'
import livui9 from '../images/בית קרקע במרכז הארץ ליווי 9.png'
import livui10 from '../images/בית קרקע במרכז הארץ ליווי 10.png'
import livui11 from '../images/בית קרקע במרכז הארץ ליווי 11.png'
import livui12 from '../images/בית קרקע במרכז הארץ ליווי 12.png'
import livui13 from '../images/בית קרקע במרכז הארץ ליווי 13.png'
import livui14 from '../images/בית קרקע במרכז הארץ ליווי 14.png'
import livui15 from '../images/בית קרקע במרכז הארץ ליווי 15.png'

import kablan1 from "../images/דירת קבלן במרכז הארץ 1.png"
import kablan2 from "../images/דירת קבלן במרכז הארץ 2.png"
import kablan3 from "../images/דירת קבלן במרכז הארץ 3.png"
import kablan4 from "../images/דירת קבלן במרכז הארץ 4.png"
import kablan5 from "../images/דירת קבלן במרכז הארץ 5.png"
import kablan6 from "../images/דירת קבלן במרכז הארץ 6.png"
import kablan7 from "../images/דירת קבלן במרכז הארץ 7.png"
import kablan8 from "../images/דירת קבלן במרכז הארץ 8.png"
import kablan9 from "../images/דירת קבלן במרכז הארץ 9.png"
import kablan10 from "../images/דירת קבלן במרכז הארץ 10.png"
import kablan11 from "../images/דירת קבלן במרכז הארץ 11.png"
import kablan12 from "../images/דירת קבלן במרכז הארץ 12.png"
import kablan13 from "../images/דירת קבלן במרכז הארץ 13.png"

import shiputz1 from "../images/בית קרקע במרכז הארץ שיפוץ 1.png"
import shiputz2 from "../images/בית קרקע במרכז הארץ שיפוץ 2.png"
import shiputz3 from "../images/בית קרקע במרכז הארץ שיפוץ 3.png"
import shiputz4 from "../images/בית קרקע במרכז הארץ שיפוץ 4.png"
import shiputz5 from "../images/בית קרקע במרכז הארץ שיפוץ 5.png"
import shiputz6 from "../images/בית קרקע במרכז הארץ שיפוץ 6.png"
import shiputz7 from "../images/בית קרקע במרכז הארץ שיפוץ 7.png"
import shiputz8 from "../images/בית קרקע במרכז הארץ שיפוץ 8.png"
import shiputz9 from "../images/בית קרקע במרכז הארץ שיפוץ 9.png"
import shiputz10 from "../images/בית קרקע במרכז הארץ שיפוץ 10.png"
import shiputz11 from "../images/בית קרקע במרכז הארץ שיפוץ 11.png"
import shiputz12 from "../images/בית קרקע במרכז הארץ שיפוץ 12.png"
import shiputz13 from "../images/בית קרקע במרכז הארץ שיפוץ 13.png"
import shiputz14 from "../images/בית קרקע במרכז הארץ שיפוץ 14.png"
import shiputz15 from "../images/בית קרקע במרכז הארץ שיפוץ 15.png"
import shiputz16 from "../images/בית קרקע במרכז הארץ שיפוץ 16.png"
import shiputz17 from "../images/בית קרקע במרכז הארץ שיפוץ 17.png"
import shiputz18 from "../images/בית קרקע במרכז הארץ שיפוץ 18.png"
import shiputz19 from "../images/בית קרקע במרכז הארץ שיפוץ 19.png"
import shiputz20 from "../images/בית קרקע במרכז הארץ שיפוץ 20.png"
import shiputz21 from "../images/בית קרקע במרכז הארץ שיפוץ 21.png"
import shiputz22 from "../images/בית קרקע במרכז הארץ שיפוץ 22.png"
import shiputz23 from "../images/בית קרקע במרכז הארץ שיפוץ 23.png"
import shiputz24 from "../images/בית קרקע במרכז הארץ שיפוץ 24.png"
import shiputz25 from "../images/בית קרקע במרכז הארץ שיפוץ 25.png"
import shiputz26 from "../images/בית קרקע במרכז הארץ שיפוץ 26.png"

const PortfolioShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [isLoaded, setIsLoaded] = useState(false)
  
  const containerRef = useRef(null)
  const projectRefs = useRef({})
  const thumbnailRefs = useRef([])

  const projects = [
    {
      id: 'cafe-project',
      title: 'בית קפה קונדיטורי',
      description: 'מתיחת פנים אינטנסיבית לבית קפה קונדיטורי במרכז הארץ',
      category: 'עיצוב מסחרי',
      images: [
        cafe1, cafe2, cafe3, cafe4, cafe5,
        cafe6, cafe7, cafe8, cafe9, cafe10,
        cafe11, cafe12, cafe13, cafe14, cafe15,
        cafe16, cafe17, cafe18, cafe19, 
      ]
    },
    {
      id: 'livui-project',
      title: 'בית קרקע במרכז הארץ',
      description: 'ליווי מלא של תהליך תכנון, עיצוב וביצוע לבית קרקע במרכז הארץ',
      category: 'ליווי מלא',
      images: [
        livui2, livui1, livui4, livui5,
        livui6, livui7, livui8, livui9, livui10,
        livui11, livui12, livui13, livui14, livui15
      ]
    },
    {
      id: 'kablan-project',
      title: 'דירת קבלן במרכז הארץ',
      description: 'כשהעיר פוגשת את השקט - עיצוב שמביא תחושת קרקע לגובה',
      category: 'דירת קבלן',
      images: [
        kablan9, kablan1, kablan2, kablan3, kablan4, kablan5,
        kablan6, kablan7, kablan8, kablan10,
        kablan11, kablan12, kablan13
      ]
    },
    {
      id: 'shiputz-project',
      title: 'שיפוץ בית קרקע במרכז הארץ',
      description: 'מהפך דרמטי בבית - כשקיר שחור גונב את ההצגה',
      category: 'שיפוץ',
      images: [
   shiputz6,   shiputz2,  shiputz10,shiputz15, shiputz4, shiputz20, shiputz16, shiputz18, shiputz1, shiputz3,  shiputz5,
        shiputz7, shiputz8, shiputz9, 
        shiputz11, shiputz12, shiputz13, shiputz14,
        shiputz17, shiputz19, 
        shiputz21, shiputz22, shiputz23, shiputz24, shiputz25,
        shiputz26
      ]
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.dataset.index)
          setTimeout(() => {
            setVisibleCards(prev => new Set([...prev, index]))
          }, index * 150)
        }
      })
    }, { threshold: 0.2, rootMargin: '-50px' })

    thumbnailRefs.current.forEach((ref, index) => {
      if (ref) {
        ref.dataset.index = index
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    setIsLoaded(true)
    let ticking = false

    const handleScroll = () => {
      const sections = document.querySelectorAll(`.${styles.projectSection}`)
      const windowHeight = window.innerHeight

      sections.forEach(section => {
        const rect = section.getBoundingClientRect()
        const img = section.querySelector(`.${styles.projectImage}`)
        const content = section.querySelector(`.${styles.projectContent}`)

        if (img) {
          const speed = 0.15
          const yPos = -(rect.top * speed)
          img.style.transform = `translate3d(-50%, calc(-50% + ${yPos}px), 0) scale(1.1)`
        }

        if (content && rect.top < windowHeight * 0.7 && rect.top > -rect.height * 0.3) {
          content.classList.add(styles.animate)
        }
      })

      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(handleScroll)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
    window.addEventListener('resize', requestTick, { passive: true })
    handleScroll()
    return () => {
      window.removeEventListener('scroll', requestTick)
      window.removeEventListener('resize', requestTick)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = e => {
      if (!selectedProject) return
      switch (e.key) {
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          prevImage()
          break
        case 'Escape':
          closeGallery()
          break
        default:
          break
      }
    }

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selectedProject, currentImageIndex, isTransitioning])

  const scrollToProject = projectId => {
    const projectElement = projectRefs.current[projectId]
    if (projectElement) {
      projectElement.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  const openGallery = project => {
    setSelectedProject(project)
    setCurrentImageIndex(0)
    setIsTransitioning(false)
    document.body.style.overflow = 'hidden'
  }

  const closeGallery = () => {
    setSelectedProject(null)
    setCurrentImageIndex(0)
    setIsTransitioning(false)
    document.body.style.overflow = 'auto'
  }

  const navigateImage = direction => {
    if (isTransitioning || !selectedProject) return
    setIsTransitioning(true)
    const newIndex = direction === 'next'
      ? (currentImageIndex + 1) % selectedProject.images.length
      : currentImageIndex === 0 ? selectedProject.images.length - 1 : currentImageIndex - 1

    setTimeout(() => {
      setCurrentImageIndex(newIndex)
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  const nextImage = () => navigateImage('next')
  const prevImage = () => navigateImage('prev')

  const goToImage = index => {
    if (isTransitioning || index === currentImageIndex) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentImageIndex(index)
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  const handleContact = () => {
    if (selectedProject) {
      const projectName = selectedProject.title
      const message = `היי אורלי הגעתי מהדף, אשמח לשמוע עוד על פרויקט ${projectName}`
      const phoneNumber = '972502737378'
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank')
    }
  }

  return (
    <div className={`${styles.container} ${isLoaded ? styles.loaded : ''}`} ref={containerRef} id="פרוייקטים">
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>הפרויקטים שלי</h1>
          {/* <p className={styles.heroSubtitle}></p> */}
          <div className={styles.netflixGrid}>
            {/* {projects.map((project, index) => (
              <div
                key={project.id}
                ref={el => thumbnailRefs.current[index] = el}
                className={`${styles.netflixThumbnail} ${visibleCards.has(index) ? styles.thumbnailVisible : styles.thumbnailHidden}`}
                onClick={() => scrollToProject(project.id)}
                style={{
                  '--delay': `${index * 0.1}s`,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className={styles.thumbnailImageWrapper}>
                  <img 
                    src={project.images[0]}
                    alt={project.title}
                    className={styles.thumbnailImage}
                  />
                </div>
                <div className={styles.thumbnailOverlay}>
                  <h3 className={styles.thumbnailTitle}>{project.title}</h3>
                  <span className={styles.thumbnailCategory}>{project.category}</span>
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <div className={styles.projectGallery}>
        {projects.map((project, index) => (
          <section 
            key={project.id}
            ref={el => projectRefs.current[project.id] = el}
            className={styles.projectSection}
            id={`project-${project.id}`}
          >
            <div className={styles.projectImageContainer}>
              <img 
                src={project.images[0]}
                alt={project.title}
                className={styles.projectImage}
              />
              <div className={styles.projectOverlay} />
            </div>
            
            <div className={styles.projectContent}>
              <div className={styles.textGlassWrapper}>
                <div className={styles.projectCategory}>{project.category}</div>
              </div>
              
              <div className={styles.textGlassWrapper}>
                <h2 className={styles.projectTitle}>{project.title}</h2>
              </div>
              
              <div className={styles.textGlassWrapper}>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
              
              <button 
                className={styles.galleryButton}
                onClick={() => openGallery(project)}
              >
                צפה בגלריה המלאה
              </button>
            </div>
          </section>
        ))}
      </div>

      {/* Gallery Modal */}
      {selectedProject && (
        <div className={`${styles.galleryModal} ${selectedProject ? styles.active : ''}`}>
          <div className={styles.galleryContainer}>
            <button className={styles.galleryClose} onClick={closeGallery}>
              ×
            </button>
            
            <button className={`${styles.galleryNav} ${styles.prev}`} onClick={prevImage} />
            <button className={`${styles.galleryNav} ${styles.next}`} onClick={nextImage} />

            <div className={styles.galleryImageContainer}>
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} - תמונה ${currentImageIndex + 1}`}
                className={`${styles.galleryImage} ${isTransitioning ? styles.transitioning : ''}`}
              />
            </div>

            <div className={styles.galleryThumbnails}>
              {selectedProject.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`תמונה זעירה ${index + 1}`}
                  className={`${styles.galleryThumbnail} ${index === currentImageIndex ? styles.active : ''}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>

            <div className={styles.galleryButtonContainer}>
              <button className={styles.contactButton} onClick={handleContact}>
                ליצירת קשר לחצו כאן
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PortfolioShowcase