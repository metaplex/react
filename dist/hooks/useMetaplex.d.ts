/// <reference types="react" />
import { Connection, Metaplex, Wallet } from '@metaplex/js';
export declare const useMetaplex: () => {
    provider: Metaplex.Provider;
    connection: Connection;
    setConnection: import("react").Dispatch<import("react").SetStateAction<Connection>>;
    wallet: Wallet | undefined;
    setWallet: import("react").Dispatch<import("react").SetStateAction<Wallet | undefined>>;
};
