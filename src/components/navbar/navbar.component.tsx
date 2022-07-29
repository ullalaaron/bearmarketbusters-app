import { Box, Button, Flex, HStack, Link } from "@chakra-ui/react";
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
        <Box
          as="button"
          color="brown"
          background="yellow"
          boxShadow={"3px 3px 0px brown"}
          borderRadius="66px"
          padding="0.5rem"
          _hover={{
            background: "brown",
            color: "yellow",
            boxShadow(theme) {
              return `3px 3px 0px ${theme.colors.yellow}`;
            },
          }}
        >
          Connect Wallet
        </Box>
      </div>
    </Flex>
  );
}
