import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ActionButton } from "../../shared/components/action-button/action-button.component";

export interface BearMarketBuster {
  tokenId: number;
  name: string;
  description: string;
  image: string;
  price: number;
  minted: boolean;
}

export interface IBearDetailProps {
  bear: BearMarketBuster;
}

export function BearDetail(props: IBearDetailProps) {
  return (
    <Flex
      margin="2rem"
      padding="1rem"
      bg="whiteGray"
      border={"0.5rem solid var(--chakra-colors-brown)"}
      borderRadius="2rem"
      direction="column"
      alignItems="center"
    >
      <Flex
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
      >
        <Text color={"brown"} fontSize="2.5rem">
          #{props.bear.tokenId} {props.bear.name}
        </Text>
        <Text
          fontSize="1.75rem"
          color={"brown"}
          border="0.25rem solid var(--chakra-colors-brown)"
          borderRadius="0.75rem"
          paddingX="0.5rem"
        >
          {props.bear.price} Ξ
        </Text>
      </Flex>
      <Box
        border={"0.25rem solid var(--chakra-colors-brown)"}
        borderRadius="2rem"
        bg="yellow"
        padding="1rem"
        marginY="1rem"
      >
        <Image src={props.bear.image} margin="0 auto" />
      </Box>
      <Flex
        border={"0.25rem dashed var(--chakra-colors-brown)"}
        borderRadius="2rem"
        padding="1rem"
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        <Text color={"brown"} height="3.5rem" fontSize="1.5rem">
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
