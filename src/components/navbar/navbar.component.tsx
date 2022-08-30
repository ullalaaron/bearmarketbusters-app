import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Text,
  Link,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FC, useContext, useEffect, useState } from "react";
import { ModalContext } from "../../context/modal.context";
import { WalletContext } from "../../context/wallet.context";
import { ActionButton } from "../../shared/components/action-button/action-button.component";
import { Logo } from "../../shared/components/logo/logo.component";
import { setWallet } from "../../utils/web3.utils";
import "./navbar.styles.scss";

export const Install: FC = () => {
  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Text>No worries 🥳 We got you covered...</Text>
      <Text>Follow the link to install 👇🏼</Text>
      <Link
        href="https://metamask.io/download.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        Meta Mask
      </Link>
    </Flex>
  );
};

const MenuToggle = ({
  toggle,
  isOpen,
}: {
  toggle: () => void;
  isOpen: boolean;
}) => {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      fontSize="2rem"
      onClick={toggle}
    >
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
};

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const toast = useToast();

  const walletContext = useContext(WalletContext);
  const modalContext = useContext(ModalContext);

  const menuItems = ["Home", "Features", "Mint", "Roadmap", "About"];
  useEffect(() => {
    if (
      walletContext?.walletState?.provider &&
      walletContext?.walletState?.provider?.network.chainId !== 1
    ) {
      toast({
        title: "Wrong Network",
        description: "Please switch to mainnet",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
    if (
      walletContext?.walletState?.balance &&
      walletContext.walletState.balance < 1
    ) {
      toast({
        title: "Insufficient funds",
        description: "These Bears are expensive. Fund your wallet now",
        status: "error",
        duration: 9000,
        isClosable: true,
        position: "top",
      });
    }
  }, [walletContext?.walletState]);

  function handleConnectWalletClick() {
    if (!(window as any).ethereum) {
      modalContext?.setModalState({
        ...modalContext.modalState,
        componentName: "install",
        isModalOpen: true,
        modalTitle: "OOPS...Metmask Not Detected 😢",
      });
    } else {
      setWallet(walletContext!);
    }
  }

  return (
    <Flex
      as="header"
      position="fixed"
      w="100%"
      id="navbar"
      justifyContent="space-between"
      alignItems="center"
      padding="1rem"
    >
      <Logo></Logo>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        className="menu-items"
      >
        <Stack
          as={motion.div}
          spacing={8}
          align="center"
          justify={["center", "center", "flex-end", "flex-end"]}
          direction={["column", "column", "row", "row"]}
          pt={[4, 4, 0, 0]}
          height={{ base: "100vh", md: "auto" }}
        >
          {menuItems.map((item, i) => (
            <Link key={i} color="black">
              <Button variant="nav"> {item} </Button>
            </Link>
          ))}
        </Stack>
      </Box>
      {!walletContext?.walletState?.address && (
        <Box
          display={{ base: "none", md: "inherit" }}
          className="connect-wallet"
        >
          <ActionButton
            text="Connect Wallet"
            action={() => handleConnectWalletClick()}
          />
        </Box>
      )}
      {walletContext?.walletState?.address && (
        <Box
          display={{ base: "none", md: "inherit" }}
          className="connect-wallet"
        >
          <ActionButton text={walletContext.walletState.balance + "ETH"} />
        </Box>
      )}
      <MenuToggle isOpen={isOpen} toggle={toggle} />
    </Flex>
  );
}
