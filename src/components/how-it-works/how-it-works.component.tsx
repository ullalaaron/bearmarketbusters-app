import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import {
  NumberContainer,
  Divider,
  NumberDescription,
} from "./how-it-works.styles";

export interface IHowItWorksProps {}

export function HowItWorks(props: IHowItWorksProps) {
  return (
    <Box bg="brown" padding="3rem">
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        maxWidth={["80rem"]}
        margin="0 auto"
      >
        <NumberContainer>
          <Text as={Heading} className="number">
            1
          </Text>
          <NumberDescription>Pick your fav. bear</NumberDescription>
        </NumberContainer>
        <Divider></Divider>
        <NumberContainer>
          <Text as={Heading} className="number">
            2
          </Text>
          <NumberDescription>Mint it good fo real</NumberDescription>
        </NumberContainer>
        <Divider></Divider>
        <NumberContainer>
          <Text as={Heading} className="number">
            3
          </Text>
          <NumberDescription>Bear market gone</NumberDescription>
        </NumberContainer>
      </Flex>
    </Box>
  );
}
