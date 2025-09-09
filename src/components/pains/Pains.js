import React from 'react';
import { Heart, Star, Shield, Crown, Gem } from 'lucide-react';
import styles from './Pains.module.css';

const PearlGrid = () => {
  const gridItems = [
    {
      id: 1,
      icon: Heart,
      description: 'אהבה ורגש'
    },
    {
      id: 2,
      icon: Star,
      description: 'הצלחה ויצירתיות'
    },
    {
      id: 3,
      icon: Shield,
      description: 'הגנה ובטחון'
    },
    {
      id: 4,
      icon: Crown,
      description: 'מלכות ויוקרה'
    },
    {
      id: 5,
      icon: Gem,
      description: 'יופי ושלמות'
    }
  ];

  return (
    <div className={styles.pearlGridContainer}>
      <div className={styles.pearlGrid}>
        {gridItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <div key={item.id} className={styles.pearlCard}>
              <div className={styles.cardContent}>
            
                <div className={styles.description}>
                  {item.description}
                </div>
                    <div className={styles.iconContainer}>
                  <IconComponent className={styles.cardIcon} />
                </div>
              </div>
          
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PearlGrid;