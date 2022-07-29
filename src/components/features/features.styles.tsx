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
    boxShadow: "3px 3px 0px brown",
    _hover: {
      boxShadow: "3px 3px 0px yellow",
      color: "yellow",
      bg: "brown",
    },
  },
});

export const InvertedFeatureContainer = styled(BaseFeatureContainer, {
  baseStyle: {
    bg: "whiteGray",
    color: "black",
    boxShadow: "3px 3px 0px black",
    _hover: {
      boxShadow: "3px 3px 0px whiteGray",
      color: "whiteGray",
      bg: "black",
    },
  },
});

export const CompanyContainer = styled(Box, {
  baseStyle: {
    border: "1.5px solid #714930",
    boxShadow: "2.5px 2.5px 0px #714930",
    borderRadius: "2rem",
    textAlign: "center",
    padding: "3rem",
    width: "20%",
    img: {},
  },
});
