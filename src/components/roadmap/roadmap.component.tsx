import { Box, Flex, Heading } from "@chakra-ui/react";
import { BlackWave } from "../../shared/components/black-wave/black-wave.component";
import {
  RoadmapItem,
  RoadmapItemDto,
} from "./roadmap-item/roadmap-item.component";
export interface IRoadmapProps {}

export function Roadmap(props: IRoadmapProps) {
  const items: RoadmapItemDto[] = [
    {
      text: "0% Launch 🚀",
      description: "Have my sister draw 10 bears on the iOS notes app",
    },
    {
      text: "33% Sell all bears 👛",
      description:
        "Find 9 absolutely amazing people willing to spend ETH on bears jpegs",
    },
    {
      text: "66% Buy an e-bike 🚴",
      description: "Lambos are overrated. And too expensive.",
    },
    {
      text: "99% Bear Market Gone 🎉",
      description:
        "After all bearks are sold, bear market will be gone 🎉. At least for me.",
    },
  ];
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
        {items.map((item, index) => (
          <RoadmapItem
            item={item}
            isInverted={index % 2 === 1}
            showDivider={index < items.length - 1}
            key={index}
          />
        ))}
      </Flex>

      <BlackWave></BlackWave>
    </Box>
  );
}
