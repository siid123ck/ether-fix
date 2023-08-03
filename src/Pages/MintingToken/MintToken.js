import React, { useState, useEffect } from 'react';
import styles from './MintToken.module.css';
import { ercContract } from '../../Ethers';
import UseEthers from '../../custom-hooks/UseEthers';

const MintToken = ({ onMint = () => {} }) => {
  const [cooldown, setCooldown] = useState(false);
  const [signer] = UseEthers();
  const [remainingTime, setRemainingTime] = useState(0);


  const handleMint = async () => {
    if (!cooldown && signer) {
      try {
        // Call the mint function of the contract
        console.log(signer)

        const transaction = await ercContract.connect(signer).mint(1,2)
        console.log('Transaction hash:', transaction.hash);
        // await ercContract.connect(signer).mint(0, 1);
        onMint();
        setCooldown(true);
        setRemainingTime(60);
      } catch (error) {
        console.error('Error minting token:', error);
      }
    }
  };

  useEffect(() => {
    let interval = null;
    if (cooldown && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime(prevTime => prevTime - 1);
      }, 1000);
    } else if (remainingTime === 0) {
      setCooldown(false);
    }
    return () => clearInterval(interval);
  }, [cooldown, remainingTime]);

  return (
    <div className={styles.tokenMinting}>
      <button className={styles.mintButton} onClick={handleMint} disabled={cooldown}>
        Mint Token
      </button>
      {cooldown && (
        <p className={styles.cooldownMessage}>
          Minting Cooldown: {remainingTime} seconds remaining
        </p>
      )}
    </div>
  );
};

export default MintToken;
