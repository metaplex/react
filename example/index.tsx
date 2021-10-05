import { Metaplex } from '@metaplex/js';
import { useAnchorWallet, useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { getPhantomWallet, WalletName } from '@solana/wallet-adapter-wallets';
import React, { useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useMetaplex } from '../src';

const View = () => {
  const { wallet, connect, connected, select, adapter } = useWallet();
  const anchorWallet = useAnchorWallet();
  const { setWallet } = useMetaplex();

  useEffect(() => {
    // TODO: update to wallet adapter
    adapter && setWallet(anchorWallet);
  }, [anchorWallet]);

  return (
    <>
      <div>Hello, example!</div>
      {!wallet && (
        <div>
          <button
            onClick={() => {
              select(WalletName.Phantom);
            }}
          >
            Select
          </button>
        </div>
      )}
      {connected ? (
        <button
          onClick={async () => {
            const { storeId, txId } = await Metaplex.initStore(adapter?.publicKey);
            console.log(storeId, txId);
          }}
        >
          Init store
        </button>
      ) : (
        wallet && (
          <button
            onClick={async () => {
              console.log('Connecting...');
              await connect();
            }}
          >
            Connect
          </button>
        )
      )}
    </>
  );
};

const App = () => {
  const wallets = useMemo(() => [getPhantomWallet()], []);

  return (
    <WalletProvider wallets={wallets} autoConnect>
      <View />
    </WalletProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
