import React, { useState } from 'react';
import styles from './Forge.module.css';

const Forge = () => {
  const [selectedToken, setSelectedToken] = useState('');

  const handleForge = () => {
    if (selectedToken !== '') {
      // onForge(selectedToken);
      setSelectedToken('');
    }
  };

  const handleChange = e => {
    setSelectedToken(e.target.value);
  };

  return (
    <div className={styles.tokenForging}>
      <h3 className={styles.title}>Token Forging</h3>
      <div className={styles.selection}>
        <label htmlFor="tokenSelect" className={styles.label}>
          Select Token to Burn:
        </label>
        <select id="tokenSelect" className={styles.select} value={selectedToken} onChange={handleChange}>
          <option value="">-- Select Token --</option>
          {[{id:1, name:"ERC20"}].map(token => (
            <option value={token.id} key={token.id}>
              {token.name}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.forgeButton} onClick={handleForge} disabled={selectedToken === ''}>
        Forge Token
      </button>
    </div>
  );
};

export default Forge;
