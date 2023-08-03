import React, { createContext, useEffect, useState } from 'react'
import UseEthers from '../custom-hooks/UseEthers';

export const NetworkContext = createContext();
const NetworkProvider = ({children}) => {
  const [showNetworkPopup, setShowNetworkPopup] = useState(false);
  const [currentNetwork, setCurrentNetwork] = useState('Network');
  const [currentAccount, setCurrentAccount] = useState('0x66D22cD5174cb4f8831BE8fF360459f354aC78b4');
  const [provider] = UseEthers();

  useEffect(()=>{
    const fetchNetwork = async()=>{
      if(provider){
        const network = await provider.getNetwork();
        setCurrentNetwork(network.name)
      }
    }

    fetchNetwork();
  }, [provider])
  return (
    <NetworkContext.Provider value={{showNetworkPopup, setShowNetworkPopup,
     currentNetwork, setCurrentNetwork, currentAccount, setCurrentAccount}}>
        {children}
    </NetworkContext.Provider>
  )
}

export default NetworkProvider

