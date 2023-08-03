import { ethers } from 'ethers';
import { useEffect, useState } from 'react'

const UseEthers = () => {
    const [provider, setProvider] = useState(null); 
    const [signer, setSigner] = useState(null); 

    useEffect(()=>{
        const connectToProvider = async ()=>{
            if(window.ethereum){
            await window.ethereum.request({ method: 'eth_requestAccounts' });

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider); 
            
            const signer = provider.getSigner();
           
            setSigner(signer);
        } else{
            console.log('no ethereum provider found')
        }
    }
        connectToProvider();      
    }, [])
  return [provider, signer];
}

export default UseEthers