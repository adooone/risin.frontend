import React from 'react';
import styles from '../home.module.scss';
// import Routes from '~/pages/Routes';

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home_item}>
        <div className={styles.we_are}>
          <h1>WE</h1>
          <h1>ARE</h1>
        </div>
        <div className={styles.button_link}>
          <div className={styles.label}>Photography</div>
          <div className={styles.info}>We o!er object and advertizing photo sessions and anything you want.</div>
          <button className={styles.buttton}></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
