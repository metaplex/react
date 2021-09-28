import { Connection, Metaplex, Wallet } from '@metaplex/js';
import { useMemo, useState } from 'react';

export const useMetaplex = () => {
  const [connection, setConnection] = useState<Connection>(new Connection('devnet'));
  const [wallet, setWallet] = useState<Wallet>();

  const provider = useMemo(() => {
    Metaplex.init(connection, wallet);
    return Metaplex.getProvider();
  }, [connection, wallet]);

  return {
    provider,
    connection,
    setConnection,
    wallet,
    setWallet,
  };
};
