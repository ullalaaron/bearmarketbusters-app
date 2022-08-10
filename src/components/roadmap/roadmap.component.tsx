import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { BlackWave } from "../../shared/components/black-wave/black-wave.component";
import { RoadmapItem, RoadmapItemDivider } from "./roadmap.styles";

export interface IRoadmapProps {}

export function Roadmap(props: IRoadmapProps) {
  return (
    <Box
      bg="whiteGray"
      paddingTop="2rem"
      paddingBottom="15rem"
      textAlign="center"
      position="relative"
    >
      <Heading
        color="white"
        fontSize={["3rem", "4rem"]}
        fontWeight="900"
        stroke="black"
        textShadow={"0.25rem 0.25rem 0 var(--chakra-colors-black)"}
        margin={"0 auto"}
      >
        Roadmap
      </Heading>
      <Flex
        direction="column"
        maxWidth="80rem"
        margin="5rem auto"
        alignItems="center"
      >
        <RoadmapItem>
          <Box className="textContainer">
            <Text className="mainText" color="brown">
              0% Launch 🚀
            </Text>
          </Box>
          <Box className="imageContainer">
            <Image src="./img/brown-circle.png" />
          </Box>
          <Box className="textContainer">
            <Box className="descriptionContainer">
              <Text>Have my sister draw 10 bears on the iOS notes app</Text>
            </Box>
          </Box>
        </RoadmapItem>
        <RoadmapItemDivider></RoadmapItemDivider>
        <RoadmapItem>
          <Box className="textContainer">
            <Box className="descriptionContainer">
              <Text>
                Find 9 absolutely amazing people willing to spend ETH on bears
                jpegs
              </Text>
            </Box>
          </Box>
          <Box className="imageContainer">
            <Image src="./img/brown-circle.png" />
          </Box>

          <Box className="textContainer">
            <Text className="mainText" color="brown">
              33% Sell all bears 👛
            </Text>
          </Box>
        </RoadmapItem>
        <RoadmapItemDivider></RoadmapItemDivider>
        <RoadmapItem>
          <Box className="textContainer">
            <Text className="mainText" color="brown">
              66% Buy an e-bike 🚴
            </Text>
          </Box>
          <Box className="imageContainer">
            <Image src="./img/brown-circle.png" />
          </Box>
          <Box className="textContainer">
            <Box className="descriptionContainer">
              <Text>Lambos are overrated. And too expensive.</Text>
            </Box>
          </Box>
        </RoadmapItem>
        <RoadmapItemDivider></RoadmapItemDivider>
        <RoadmapItem>
          <Box className="textContainer">
            <Box className="descriptionContainer">
              <Text>
                After all bearks are sold, bear market will be gone 🎉. At least
                for me.
              </Text>
            </Box>
          </Box>
          <Box className="imageContainer">
            <Image src="./img/brown-circle.png" />
          </Box>

          <Box className="textContainer">
            <Text className="mainText" color="brown">
              99% Bear Market Gone 🎉
            </Text>
          </Box>
        </RoadmapItem>
      </Flex>
      <BlackWave></BlackWave>
    </Box>
  );
}
