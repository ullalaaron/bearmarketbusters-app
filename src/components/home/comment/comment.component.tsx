import { Text, Image, Box, Flex } from "@chakra-ui/react";
import "./comment.styles.scss";

export interface ICommentProps {
  comment: string;
  author: string;
}

export function Comment(props: ICommentProps) {
  return (
    <Box position="relative" display="inline-block">
      <Image
        src="./img/comment.svg"
        display="block"
        maxW="100%"
        margin="auto"
        padding="auto"
      ></Image>
      <Text
        fontSize={["2rem"]}
        position="absolute"
        top="10%"
        left="0"
        right="0"
        width={["70%", "40%", "90%"]}
        maxWidth="20rem"
        margin="auto"
      >
        "{props.comment}"
      </Text>
      <Flex
        position="absolute"
        bottom="20%"
        left="0"
        right="0"
        margin="auto"
        width="90%"
        maxWidth="30rem"
        justifyContent="space-evenly"
      >
        <Text fontSize={["1.5rem", "1.3rem"]}>
          {Array(5)
            .fill(null)
            .map((value, index) => (
              <Image src="./img/star.svg" display="inline"></Image>
            ))}
        </Text>
        <Text fontSize={["1.5rem", "1.3rem"]} color="whiteGray" placeSelf="end">
          - {props.author}
        </Text>
      </Flex>
    </Box>
  );
}
