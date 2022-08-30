import { Box, Text, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { RoadmapItemContainer } from "./roadmap-item.styles";
import "./roadmap-item.styles.scss";

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
        viewport={{}}
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
      {/* {props.showDivider && <RoadmapItemDivider></RoadmapItemDivider>} */}
      {props.showDivider && (
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{}}
          transition={{ duration: 0.4 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Flex width="100%" alignItems="center">
            <svg
              className="dashed-line"
              height="12rem"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="10"
                y1="10"
                x2="10"
                y2="210"
                stroke="var(--chakra-colors-brown)"
                strokeWidth="10"
                strokeDasharray="0,10,15"
              />
            </svg>
          </Flex>
        </motion.div>
      )}
    </Flex>
  );
}
