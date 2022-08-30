import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { motion, Variants } from "framer-motion";
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
  const bearVariants: Variants = {
    offscreen: {
      y: 500,
    },
    onscreen: {
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <Flex
      onDrag={(e) => e.preventDefault()}
      w="90vw"
      maxW="25rem"
      margin={"2rem auto"}
      padding="1rem"
      bg="whiteGray"
      borderRadius="2rem"
      direction="column"
      alignItems="center"
      flexBasis={["100%", "31%"]}
      zIndex={1}
      boxShadow="0.15rem 0.15rem 0.15rem var(--chakra-colors-brown)"
      position="relative"
    >
      {props.bear.minted && (
        <Image
          src="img/sold-out.png"
          position="absolute"
          left="-7.5rem"
          top="45%"
          rotate={"45deg"}
          width="15rem"
        ></Image>
      )}
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
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <motion.div variants={bearVariants}>
            <Image src={props.bear.image} margin="0 auto" height="13rem" />
          </motion.div>
        </motion.div>
      </Box>
      <Flex
        borderRadius="2rem"
        alignItems="center"
        justifyContent="center"
        width="100%"
        textOverflow="ellipsis"
        height="7rem"
        paddingX="2rem"
        textAlign="center"
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
