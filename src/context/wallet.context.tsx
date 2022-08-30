import { ethers } from "ethers";
import { createContext, Dispatch, SetStateAction, useState } from "react";

export interface IWalletState {
  isMetaMaskInstalled: boolean;
  address?: string;
  balance?: number;
  provider?: ethers.providers.Web3Provider;
}

export interface IWalletContext {
  walletState: IWalletState | null;
  setWalletState: Dispatch<SetStateAction<IWalletState>>;
}
export const WalletContext = createContext<IWalletContext | null>(null);

export const WalletProvider = ({ children }: any) => {
  const [walletState, setWalletState] = useState<IWalletState>({
    isMetaMaskInstalled: false,
  });
  const value = { walletState, setWalletState };
  return (
    <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
  );
};
