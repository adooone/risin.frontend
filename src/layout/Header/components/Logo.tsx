import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../header.module.scss';
import logo from '../../../shared/assets/risin.svg';

const Logo: React.FC = () => {
  return (
    <Link to="/">
      <div className={styles.logo}>
        <img src={logo} alt="err" />
        <p>RISIN PRODUCTION</p>
      </div>
    </Link>
  );
};

export default Logo;
