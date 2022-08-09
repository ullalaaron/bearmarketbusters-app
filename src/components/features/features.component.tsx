import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { BrownWave } from "../../shared/components/brown-wave/brown-wave.component";
import {
  ClassicFeatureContainer,
  CompanyContainer,
  InvertedFeatureContainer,
} from "./features.styles";

export interface IFeaturesProps {}

export function Features() {
  const features = [
    "NO TWITTER  - NO DISCORD - NOTHING",
    "10 NFTs HAND DRAWN WITH iOS NOTES APP",
    "PRETTY USELESS PROJECT",
    "NONE OF THE FUNDS WILL BE SHARED WITH THE COMMUNTY BECAUSE THERE IS NO COMMUNITY",
  ];
  return (
    <Box paddingTop="3rem" bg="whiteGray" width="100%" position="relative">
      <Flex
        direction="column"
        justifyContent="space-between"
        left="0"
        right="0"
        margin="0 auto"
        width="90%"
        maxWidth={["90rem"]}
        paddingBottom="10rem"
      >
        <Heading color="brown">FEATURES</Heading>
        {features.map((feature, index) => {
          return index % 2 === 0 ? (
            <ClassicFeatureContainer key={index}>
              <Text>{feature}</Text>
            </ClassicFeatureContainer>
          ) : (
            <InvertedFeatureContainer key={index}>
              <Text>{feature}</Text>
            </InvertedFeatureContainer>
          );
        })}

        <Heading color="brown" marginY="3rem" maxW="40rem">
          SOME OF THE COMPANIES THAT DIDN'T SPEAK ABOUT US
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
        >
          <CompanyContainer>
            <Image src="./img/companies/cnbc.png"></Image>
          </CompanyContainer>
          <CompanyContainer>
            <Image src="./img/companies/tc.png"></Image>
          </CompanyContainer>
          <CompanyContainer>
            <Image src="./img/companies/wired.png"></Image>
          </CompanyContainer>
          <CompanyContainer>
            <Image src="./img/companies/wsj.png"></Image>
          </CompanyContainer>
        </Flex>
      </Flex>
      <BrownWave></BrownWave>
    </Box>
  );
}
