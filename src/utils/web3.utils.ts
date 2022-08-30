import { ethers } from "ethers";
import { IWalletContext } from "../context/wallet.context";

export const setWallet = async (walletContext: IWalletContext) => {
  const [account] = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const balance = await provider.getBalance(account);

  walletContext?.setWalletState({
    ...walletContext.walletState,
    isMetaMaskInstalled: true,
    address: account,
    balance: +parseFloat(ethers.utils.formatEther(balance)).toFixed(4),
    provider,
  });
};
