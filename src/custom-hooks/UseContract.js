import { ethers } from 'ethers';
import abiForge from '../data/forge.json';
import abiErc1155 from '../data/erc1155.json';
import abiDai from '../data/daiAbi.json';
import { useEffect, useState } from 'react';
import UseEthers from './UseEthers';


const UseContract = () => {
    const erc1155ContractAddress = '0xb5465ED8EcD4F79dD4BE10A7C8e7a50664e5eeEB';
    const forgeContractAddress = '0x8059B0AE35c113137694Ba15b2C3585aE77Bb8E9';
    const daiContractAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

    const [provider,] = UseEthers();
    const [daiContract, setDaiContract] = useState(null)
    const [forgeContract, setForgeContract] = useState(null)
    const [erc1155Contract, setErc1155Contract] = useState(null)
 
    useEffect(()=>{
       const fetchContract = async()=>{
        const erc1155Contract = new ethers.Contract(erc1155ContractAddress, abiErc1155, provider);
        const forgeContract = new ethers.Contract(forgeContractAddress, abiForge, provider);
        const daiContract = new ethers.Contract(daiContractAddress, abiDai, provider);

        setErc1155Contract(erc1155Contract);
        setForgeContract(forgeContract);
        setDaiContract(daiContract);
       }

       fetchContract();
    }, [provider])

  return [
    erc1155Contract,
    forgeContract,
    daiContract
  ]
}

export default UseContract





