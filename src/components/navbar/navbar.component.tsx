import { Button, Flex, HStack, Link } from "@chakra-ui/react";
import { ActionButton } from "../../shared/components/action-button/action-button.component";
import "./navbar.styles.scss";

export interface INavbarProps {}

export function Navbar(props: INavbarProps) {
  //TODO: Menu mobile + styled components
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
      <div id="logo">
        <span>BEAR</span>
        <span>MARKET</span>
        <span>BUSTERS</span>
      </div>

      <div className="menu-items">
        <HStack as="nav" spacing="5">
          {menuItems.map((item, i) => (
            <Link key={i} color="black">
              <Button variant="nav"> {item} </Button>
            </Link>
          ))}
        </HStack>
      </div>
      <div className="connect-wallet">
        <ActionButton
          text="Connect Wallet"
          action={() => {
            console.log("nabnar");
          }}
        />
      </div>
    </Flex>
  );
}
