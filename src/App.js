import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import './App.css';
import Header from './Layout/Header/Header';
import Balance from './Pages/Balance/Balance';
import MintToken from './Pages/MintingToken/MintToken';
import Forge from './Pages/Forge/Forge';
import Trading from './Pages/Trading/Trading';
import Network from './Pages/Network/Network';
import { NetworkContext } from './ContextApi/NetworkContext';
import { useContext } from 'react';
import Home from './Pages/Home/Home';
import Footer from './Layout/Footer/Footer';
import Opensea from './Pages/opensea/Opensea';

function App() {
  const {showNetworkPopup} = useContext(NetworkContext);

  return (
    <Router>
      <Header />
      {showNetworkPopup && <Network />} {/* Render the Network component only when showNetworkPopup is true */}

      <Routes>
        <Route Component={Home} path='/' />
        <Route Component={Balance} path='balance'/>
        <Route Component={MintToken} path='mint'/>
        <Route Component={Forge} path='forge'/>
        <Route Component={Trading} path='trade'/>
        <Route Component={Opensea} path='opensea'/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
