import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ActionButton } from "../../shared/components/action-button/action-button.component";

export interface BearMarketBuster {
  tokenId: number;
  name: string;
  description: string;
  image: string;
  basePrice: number;
  minted: boolean;
}

export interface IBearDetailProps {
  bear: BearMarketBuster;
}

export function BearDetail(props: IBearDetailProps) {
  return (
    <Flex
      marginY="2rem"
      marginX="1rem"
      padding="1rem"
      bg="whiteGray"
      borderRadius="2rem"
      direction="column"
      alignItems="center"
      flexBasis={["100%", "31%"]}
      zIndex={1}
      boxShadow="0.15rem 0.15rem 0.15rem var(--chakra-colors-brown)"
      _hover={{
        cursor: "pointer",
        boxShadow: "0.25rem 0.25rem 0.25rem var(--chakra-colors-brown)",
        transform: "scale(1.05)",
        transition: "all 0.2s ease-in-out",
      }}
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Text
          color={"brown"}
          fontSize={["1.5rem", "1.75rem", "2rem"]}
          noOfLines={1}
        >
          #{props.bear.tokenId} {props.bear.name}
        </Text>
        <Text
          fontSize="1.75rem"
          color={"brown"}
          border="0.25rem solid var(--chakra-colors-brown)"
          borderRadius="0.75rem"
          paddingX="0.15rem"
          noOfLines={1}
        >
          {props.bear.basePrice} ETH
        </Text>
      </Flex>
      <Box borderRadius="2rem" bg="yellow" padding="1rem" marginY="1rem">
        <Image src={props.bear.image} margin="0 auto" height="13rem" />
      </Box>
      <Flex
        borderRadius="2rem"
        padding="1rem"
        alignItems="center"
        justifyContent="center"
        width="100%"
        textOverflow="ellipsis"
        height="7rem"
      >
        <Text color={"brown"} fontSize="1.5rem">
          {props.bear.description}
        </Text>
      </Flex>
      <Flex
        padding="1rem"
        width="50%"
        alignItems="center"
        justifyContent="center"
      >
        <ActionButton
          text="MINT NOW"
          disabled={props.bear.minted}
          action={() => {
            console.log("hi");
          }}
        />
      </Flex>
    </Flex>
  );
}
