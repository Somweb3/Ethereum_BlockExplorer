import { Alchemy, Network } from 'alchemy-sdk';
import { useEffect, useState } from 'react';

import './App.css';

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

function App() {
  const [blockNumber, setBlockNumber] = useState();
  const [block, setBlock] = useState();
  const [blockTransaction, setBlockTransaction] = useState();

  useEffect(() => {
    async function getBlockNumber() {
      setBlockNumber(await alchemy.core.getBlockNumber());
    }

    getBlockNumber();

    async function getBlock(){
      setBlock(await alchemy.core.getBlock(block.blockhash(blockNumber)));
    }
    getBlock();

    async function getBlockWithTransactions(){
      setBlockTransaction(await alchemy.core.getBlockWithTransactions());
    }
    getBlockWithTransactions();
  });

  return <div className="App">Block Number: {blockNumber}, Block Details: {block}, Transaction: {blockTransaction}</div>;
}

export default App;
