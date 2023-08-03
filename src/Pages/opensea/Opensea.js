import React from 'react';
import styles from './Opensea.module.css';

const Opensea = () => {
  return (
    <div className={styles.openSeaLink}>
      <a href="https://opensea.io/" target="_blank" rel="noopener noreferrer">
        Visit OpenSea
      </a>
    </div>
  );
};

export default Opensea;