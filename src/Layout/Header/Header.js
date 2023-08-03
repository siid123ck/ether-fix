import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import { NetworkContext } from '../../ContextApi/NetworkContext';

const Header = () => {
 const {setShowNetworkPopup, currentNetwork} = useContext(NetworkContext)
  const handleNetworkLinkClick = () => {
    setShowNetworkPopup(true);
    console.log(currentNetwork)
  };

 

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <h2 className={styles.logo}>ERC1155</h2>
        </div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link to="/" className={styles.navbarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/mint" className={styles.navbarLink}>
              Mint Tokens
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/forge" className={styles.navbarLink}>
              Forge Tokens
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/trade" className={styles.navbarLink}>
              Trade Tokens
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/balance" className={styles.navbarLink}>
              Token Balance
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <Link to="/opensea" className={styles.navbarLink}>
              OpenSea
            </Link>
          </li>
          <li className={styles.navbarItem}>
            <button className={styles.navbarLink} onClick={handleNetworkLinkClick}>
              {currentNetwork.toUpperCase()}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
