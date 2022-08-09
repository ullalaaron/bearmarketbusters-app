import { Box, styled } from "@chakra-ui/react";

export const BaseFeatureContainer = styled(Box, {
  baseStyle: {
    borderRadius: "3rem",
    padding: "3rem",
    fontSize: "2rem",
    fontWeight: "900",
    marginY: "3rem",
    _hover: {
      cursor: "pointer",
    },
  },
});

export const ClassicFeatureContainer = styled(BaseFeatureContainer, {
  baseStyle: {
    bg: "yellow",
    color: "brown",
    boxShadow: "3px 3px 0px var(--chakra-colors-brown)",
    _hover: {
      boxShadow: "3px 3px 0px var(--chakra-colors-yellow)",
      color: "yellow",
      bg: "brown",
    },
  },
});

export const InvertedFeatureContainer = styled(BaseFeatureContainer, {
  baseStyle: {
    bg: "whiteGray",
    color: "black",
    boxShadow: "3px 3px 0px var(--chakra-colors-black)",
    _hover: {
      boxShadow: "3px 3px 0px var(--chakra-colors-whiteGray)",
      color: "whiteGray",
      bg: "black",
    },
  },
});

export const CompanyContainer = styled(Box, {
  baseStyle: {
    border: "1.5px solid var(--chakra-colors-brown)",
    boxShadow: "2.5px 2.5px 0px var(--chakra-colors-brown)",
    borderRadius: "2rem",
    textAlign: "center",
    padding: "2rem",
    width: { base: "80%", md: "20%" },
    marginY: { base: "2rem", md: "0" },
    maxWidth: { base: "20rem" },
    img: {
      position: "relative",
      margin: "0 auto",
      height: "7rem",
    },
  },
});
