import { Flex } from "@chakra-ui/react";
import { Logo } from "../../shared/components/logo/logo.component";

export interface IFooterProps {}

export function Footer(props: IFooterProps) {
  return (
    <Flex bg="black" padding="3rem">
      <Logo inverted={true}></Logo>
    </Flex>
  );
}
