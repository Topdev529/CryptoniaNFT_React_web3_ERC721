import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar.js";

import Home from "./pages/Home.js";
import Genesis from "./pages/Genesis.js";
import Roadmap from "./pages/Roadmap.js";
import FAQ from "./pages/FAQ.js";

import React, { useEffect, useState } from 'react';
import ConnectionState from "./context/connection/state.js";
import {
  connectWallet,
  CryptoKittenNFT,
  getCurrentWalletConnected,
  mint_genesis,
  mint_normal,
} from "./util/interact.jsx"

function App() {
  const [address, setWallet] = useState('');
  const [genesisNumber, setGenesisNumber] = useState(1);
  const [ normalNumber, setNormalNumber ] = useState(1);

	useEffect(() => {
		async function getInformation() {
		
			addSmartContractListener();

			const { address } = await getCurrentWalletConnected();
			setWallet(address);
			addWalletListener();
		}
		getInformation()
	}, [])

	function addSmartContractListener() {
	  CryptoKittenNFT.events.JoinFace({}, (error, data) => {
			if (error) {
			} else {
			}
		});
	}

	function addWalletListener() {
		if (window.ethereum) {
		window.ethereum.on("accountsChanged", (accounts) => {
			if (accounts.length > 0) {
				setWallet(accounts[0]);
			} else {
				setWallet("");
			}
		});
		} else {
		}
	}


  const connect = async() => {
    const walletResponse = await connectWallet();
		setWallet(walletResponse.address);
  };
  const genesisMint = async() => {

    await mint_genesis(address, genesisNumber);


  }
  const normalMint = async() => {
    await mint_normal(address, normalNumber);
  }
  return (
    <ConnectionState>
      <Router>
        <Navbar account={address} connect={connect} />
        <Switch>
          <Route path="/genesis">
            <Genesis genesisNumber={genesisNumber} setGenesisNumber={setGenesisNumber} genesisMint={genesisMint}/>
          </Route>
          <Route path="/roadmap">
            <Roadmap />
          </Route>
          <Route path="/faq">
            <FAQ />
          </Route>
          <Route exact path="/">
            <Home normalNumber={normalNumber} setNormalNumber={setNormalNumber} normalMint={normalMint}/>
          </Route>
        </Switch>
      </Router>
    </ConnectionState>
  );
}

export default App;
