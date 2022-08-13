import { Box, styled } from "@chakra-ui/react";
export const RoadmapItemContainer = styled(Box, {
  baseStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
    ".textContainer": {
      width: "45%",
    },
    ".mainText": {
      fontSize: { base: "2.5rem", lg: "3rem" },
    },
    ".descriptionContainer": {
      margin: "0 auto",
      width: "80%",
      padding: "1rem",
      backgroundColor: "whiteGray",
      borderRadius: "1rem",
      boxShadow: "0.25rem 0.25rem 0 var(--chakra-colors-black)",
      fontSize: { base: "1.2rem", lg: "1.5rem" },
    },
    ".imageContainer": {
      width: "10%",
      img: {
        margin: "0 auto",
      },
    },
  },
});
export const RoadmapItemDivider = styled(Box, {
  baseStyle: {
    borderLeft: "1rem dashed var(--chakra-colors-brown)",
    height: "8rem",
    marginY: "1.5rem",
    content: "''",
  },
});
