import React, { useContext, useEffect, useState } from 'react';
import styles from './Network.module.css';
import { NetworkContext } from '../../ContextApi/NetworkContext';
import UseEthers from '../../custom-hooks/UseEthers';
import { ethers } from 'ethers';

const Network = () => {
  const [accounts, setAccounts]  = useState([])
  const [balance, setBalance] = useState(0)
  const {showNetworkPopup, setShowNetworkPopup,currentNetwork,
     setCurrentNetwork, currentAccount, setCurrentAccount} 
  = useContext(NetworkContext)

  const [provider, signer] = UseEthers();

  useEffect(()=>{
    const getAccounts =async ()=>{
      if (provider) {
        const accounts = await provider.listAccounts();
        const network = await provider.getNetwork();
        setCurrentNetwork(network.name)
        setAccounts(accounts);
      }
      if(signer){
        // const address = await signer.getAddress();
        const balance = await provider.getBalance(currentAccount);
        setBalance(Number(ethers.utils.formatEther(balance)).toFixed(4))
      }
    }
    getAccounts();

  }, [provider, currentAccount, signer, setCurrentNetwork])


  const handleNetworkChange = e => {
    // onChange(e.target.value);
    setCurrentNetwork(e.target.value)
  };

  const handleAccountChange = e=>{
    setCurrentAccount(e.target.value)
  }

  return (
    <div className={styles.networkSwitch}>
      
      {showNetworkPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <h3 className={styles.title}>Select Network:</h3>
            <select className={styles.select} value={currentNetwork} onChange={handleNetworkChange}>
              <option value="mainnet">Mainnet</option>
              <option value="polygon">Polygon</option>
              <option value="testnet">Testnet</option>
              <option value="sepolia">Sepolia</option>
            </select>

            <h3 className={styles.title}>Select Account:</h3>
            <select className={styles.select} value={currentAccount} onChange={handleAccountChange}>
              {accounts.map((account, i)=>(<option key={i} value={account}>
                Account {i + 1} - {account}
              </option>))}
            
            </select>

            <h3> Account Balance</h3>
            <p>{balance}</p>
            <button className={styles.closeButton} onClick={() => setShowNetworkPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Network;
