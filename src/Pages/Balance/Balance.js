import React, { useState } from 'react';
import styles from './Balance.module.css';
import UseContract from '../../custom-hooks/UseContract';


const Balance = () => {
  const [tokenBalance, setTokenBalance] = useState(0);
  const [account, setAccount] = useState('0x5B38Da6a701c568545dCfcB03FcB875f56beddC4');
  const [tokenId, setTokenId] = useState(0);
  const [erc1155Contract, , daiContract] = UseContract();
  const [name, setName] = useState(''); 
  // console.log(erc1155Contract)

  // console.log(forgeContract)
  // console.log(daiContract)

  // useEffect(() => {
  //   fetchBalance();
  // }, [account, tokenId]);
 

  console.log(name); 

  const fetchBalance = async () => {
    try {
      const balance = await erc1155Contract.balanceOf(account,tokenId);
      
      const name = await daiContract.name();
      setName(name);
      setTokenBalance(balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <div className={styles.tokenBalance}>
      <h3 className={styles.tokenName}>ERC1155</h3>
      <div>
        <label htmlFor='account'>Account</label>
        <input id='account' placeholder='account' type='text'
        onChange={e=>setAccount(e.target.value)} value={account}/>
      </div>
      <div>
        <label htmlFor='tokenId'>Token Id</label>
        <input id='tokenId' placeholder='tokenId' type='number'
        onChange={e=>setTokenId(e.target.value)} value={tokenId}/>
      </div>
      <button className={styles.tradeButton} onClick={fetchBalance}>
        View 
      </button>
      <p className={styles.balance}>Balance: {tokenBalance}</p>
    </div>
  );
};

export default Balance;
