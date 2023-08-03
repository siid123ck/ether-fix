import React, { useState } from 'react';
import styles from './Forge.module.css';
import UseContract from '../../custom-hooks/UseContract';
import UseEthers from '../../custom-hooks/UseEthers';

const Forge = () => {
  const [selectedToken1, setSelectedToken1] = useState(0);
  const [selectedToken2, setSelectedToken2] = useState(0);

  const [, forgeContract] = UseContract();
  const [, signer] = UseEthers();


  const handleForge = async() => {
    if(forgeContract){
      const connectedContract = forgeContract.connect(signer);

      const tx = await connectedContract.burnAndForge(selectedToken1, selectedToken2)
      console.log(tx)
      // await forgeContract.burnAndForge(selectedToken1, selectedToken2);
    }
  };

  const isSelectedValid = (token1, token2)=>{
    return token1 >= 0 && token1 < 3 &&  token2 >= 0 && token2 < 3 && token1 !== token2
  }

  return (
    <div className={styles.tokenForging}>
      <h3 className={styles.title}>Token Forging</h3>
      <div className={styles.selection}>
        <label htmlFor="tokenSelect" className={styles.label}>
          Select 2 Tokens (0-2) to Burn:
        </label>
        <select id="tokenSelect" className={styles.select} value={selectedToken1} 
        onChange={e=>setSelectedToken1(e.target.value)}>
          <option value="">-- Select Token --</option>
          {[0, 1, 2].map(token => (
            <option value={token} key={token}>
              {token}
            </option>
          ))}
        </select>
        <select id="tokenSelect" className={styles.select} value={selectedToken2} 
        onChange={e=>setSelectedToken2(e.target.value)}>
          <option value="">-- Select Token --</option>
          {[0, 1, 2].map(token => (
            <option value={token} key={token}>
              {token}
            </option>
          ))}
        </select>
      </div>
      <button className={styles.forgeButton} onClick={handleForge} 
      disabled={!isSelectedValid(selectedToken1, selectedToken2)}>
        Forge Token
      </button>
    </div>
  );
};

export default Forge;
