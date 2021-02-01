import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ChampCard_Medium.module.css';

const ChampCard_Medium = ({ id, name, title, imgPath, imgAlt, onClick }) => {
  return (
    <Link to={id} onClick={onClick}>
      <div className={styles.card}>
        <div className={styles.imgWrapper}>
          <img src={imgPath} alt={imgAlt} />
        </div>
        <div className={styles.textWrapper}>
          <h3>{name}</h3>
          <p>{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default ChampCard_Medium;
