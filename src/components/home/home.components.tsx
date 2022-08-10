import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { MintTimer } from "./mint-timer/mint-timer.component";
import { LeftSideBearImage, RightSideBearImage } from "./home.styles";
import { YellowWave } from "../../shared/components/yellow-wave/yellow-wave.component";
import { Comment } from "./comment/comment.component";
import { useRef, useState } from "react";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const [isIdle, setIsIdle] = useState(true);
  const timerRef = useRef<NodeJS.Timeout>();
  window.onscroll = function () {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setIsIdle(false);
    timerRef.current = setTimeout(() => {
      setIsIdle(true);
    }, 7000);
  };

  const comments = [
    {
      comment: "Best NFT Collection of 2022",
      author: "Nobody",
    },
    {
      comment: "What is this? Help me clean the dishes",
      author: "My Mom",
    },
    {
      comment: "I hope I can sell even one of them JPEGS",
      author: "Me",
    },
  ];
  return (
    <Flex
      direction="column"
      alignItems="center"
      textAlign="center"
      bg="yellow"
      paddingBottom={["35%", "25%", "20%", "15%"]}
      w="100%"
      paddingTop="8rem"
      position="relative"
    >
      <Box marginBottom="2rem">
        <Text color="brown" fontWeight="400" fontSize={["1.5rem"]}>
          Are you tired of getting crushed by the bear market?
        </Text>
        <Heading
          color="whiteGray"
          fontSize={["3rem", "4rem"]}
          fontWeight="900"
          stroke="black"
          textShadow={"0.25rem 0.25rem 0 var(--chakra-colors-black)"}
        >
          Bear Market Busters
        </Heading>
        <Text color="brown" fontWeight="400" fontSize={["1.5rem"]}>
          The first NFT collection that makes the Bear Market go away 🎉
        </Text>
      </Box>
      <LeftSideBearImage
        isIdle={isIdle}
        src="./img/Hilde.png"
      ></LeftSideBearImage>
      <RightSideBearImage
        isIdle={isIdle}
        src="./img/Rascal.png"
      ></RightSideBearImage>
      <MintTimer></MintTimer>
      <SimpleGrid
        columns={{ sm: 1, md: 3 }}
        w="100%"
        marginTop="3rem"
        spacing="3rem"
        maxWidth={["90rem"]}
      >
        {comments.map((comment, i) => {
          return (
            <Comment
              key={i}
              comment={comment.comment}
              author={comment.author}
            ></Comment>
          );
        })}
      </SimpleGrid>
      <YellowWave></YellowWave>
    </Flex>
  );
}
