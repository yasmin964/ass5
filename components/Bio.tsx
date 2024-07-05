import React from 'react';
import styles from '@styles/global.module.css';
interface BioProps {
  bio: {
    name: string;
    description: string;
  };
}

const Bio: React.FC<BioProps> = ({ bio }) => {
  return (
    <div className={styles.top__content}>
      <div className={styles.content_container}>
        <div className={styles.subtitle1}>
          <h2>Bio</h2>
        </div>
        <div className={styles.subpar1}>
          <p>{bio.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
