import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Link, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ActionButton } from "../../shared/components/action-button/action-button.component";
import { Logo } from "../../shared/components/logo/logo.component";
import "./navbar.styles.scss";

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

  const menuItems = ["Home", "Features", "Mint", "Roadmap", "About"];

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
      <Box display={{ base: "none", md: "inherit" }} className="connect-wallet">
        <ActionButton
          text="Connect Wallet"
          action={() => {
            console.log("nabnar");
          }}
        />
      </Box>
      <MenuToggle isOpen={isOpen} toggle={toggle} />
    </Flex>
  );
}
