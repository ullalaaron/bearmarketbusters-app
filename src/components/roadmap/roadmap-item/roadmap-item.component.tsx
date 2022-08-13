import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  RoadmapItemContainer,
  RoadmapItemDivider,
} from "./roadmap-item.styles";

export interface IRoadmapItemProps {
  item: RoadmapItemDto;
  isInverted: boolean;
  showDivider: boolean;
}
export interface RoadmapItemDto {
  text: string;
  description: string;
}
export function RoadmapItem(props: IRoadmapItemProps) {
  const textContainer = (
    <Box className="textContainer">
      <Text className="mainText" color="brown">
        {props.item.text}
      </Text>
    </Box>
  );
  const descriptionContainer = (
    <Box className="textContainer">
      <Box className="descriptionContainer">{props.item.description}</Box>
    </Box>
  );

  return (
    <Flex alignItems="center" direction="column">
      <motion.div
        initial="initial"
        whileInView="inView"
        viewport={{ once: true }}
        transition={{ type: "tween", duration: 0.8 }}
        variants={{
          initial: { x: props.isInverted ? 150 : -150, scale: 0, opacity: 0 },
          inView: { x: 0, scale: 1, opacity: 1 },
        }}
      >
        <RoadmapItemContainer>
          {props.isInverted ? descriptionContainer : textContainer}
          <Box className="imageContainer">
            <Image src="./img/brown-circle.png" />
          </Box>

          {props.isInverted ? textContainer : descriptionContainer}
        </RoadmapItemContainer>
      </motion.div>
      {props.showDivider && <RoadmapItemDivider></RoadmapItemDivider>}
    </Flex>
  );
}
