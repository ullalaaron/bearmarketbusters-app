import { Box, Button, Flex, Image } from "@chakra-ui/react";
import { Logo } from "../../shared/components/logo/logo.component";
import { ContactForm } from "./contact-form/contact-form.component";
import { HashLink } from "react-router-hash-link";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Box id="about">
      <Flex
        bg="black"
        padding="2rem"
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-evenly"
        alignContent="space-between"
      >
        <Logo inverted={true}></Logo>
        <Box w={{ base: "100%", md: "70%" }}>
          <ContactForm></ContactForm>
        </Box>
        <Button bg="transparent" variant="link">
          <HashLink to="#top" smooth>
            <Image maxW="8rem" src="./img/yellow-arrow-up.png"></Image>
          </HashLink>
        </Button>
      </Flex>
    </Box>
  );
}
