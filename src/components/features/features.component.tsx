import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { BrownWaveUp } from "./brown-wave/brown-wave.component";
import {
  ClassicFeatureContainer,
  CompanyContainer,
  InvertedFeatureContainer,
} from "./features.styles";

export interface IFeaturesProps {
  features: string[];
}

export function Features(props: IFeaturesProps) {
  return (
    <Box paddingTop="3rem" bg="whiteGray" width="100%" position="relative">
      <Flex
        direction="column"
        justifyContent="space-between"
        left="0"
        right="0"
        margin="0 auto"
        width="90%"
        maxWidth="80rem"
        paddingBottom="10rem"
      >
        <Heading color="brown">FEATURES</Heading>
        {props.features.map((feature, index) => {
          return index % 2 === 0 ? (
            <ClassicFeatureContainer>
              <Text>{feature}</Text>
            </ClassicFeatureContainer>
          ) : (
            <InvertedFeatureContainer>
              <Text>{feature}</Text>
            </InvertedFeatureContainer>
          );
        })}

        <Heading color="brown" marginY="3rem" maxW="40rem">
          SOME OF THE COMPANIES THAT DIDN'T SPEAK ABOUT US
        </Heading>
        <Flex direction="row" justifyContent="space-between">
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
      <BrownWaveUp></BrownWaveUp>
    </Box>
  );
}
