import React from 'react';
import styles from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.info_container}>
        <p className={styles.rights}>Risin Production all rights are not reserved</p>
        <div className="a" />
        <p className={styles.designer}>Designed by NeptuneWS</p>
      </div>
    </div>
  );
};

export default Footer;
