import React, { useState } from 'react';
import styles from './Trading.module.css';

const Trading = () => {
  const [selectedToken, setSelectedToken] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');

  const handleTrade = () => {
    if (selectedToken !== '' && selectedRecipient !== '') {
      // onTrade(selectedToken, selectedRecipient);
      setSelectedToken('');
      setSelectedRecipient('');
    }
  };

  const handleTokenChange = e => {
    setSelectedToken(e.target.value);
  };

  const handleRecipientChange = e => {
    setSelectedRecipient(e.target.value);
  };

  return (
    <div className={styles.tokenTrading}>
      <h3 className={styles.title}>Token Trading</h3>
      <div className={styles.trade}>
        <div className={styles.selection}>
          <label htmlFor="tokenSelect" className={styles.label}>
            Select Token to Trade:
          </label>
          <select id="tokenSelect" className={styles.select} value={selectedToken} onChange={handleTokenChange}>
            <option value="">-- Select Token --</option>
            {[{id:1, name:'erc20'}].map(token => (
              <option value={token.id} key={token.id}>
                {token.name}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.selection}>
          <label htmlFor="recipientSelect" className={styles.label}>
            Select Recipient:
          </label>
          <select id="recipientSelect" className={styles.select} value={selectedRecipient} onChange={handleRecipientChange}>
            <option value="">-- Select Recipient --</option>
            <option value="5x05849">-- 5x05849 --</option>
            {/* Add recipient options here */}
          </select>
        </div>
      </div>
      <button className={styles.tradeButton} onClick={handleTrade} disabled={selectedToken === '' || selectedRecipient === ''}>
        Trade Token
      </button>
    </div>
  );
};

export default Trading;
