import { Box, styled, Text } from "@chakra-ui/react";

export const NumberContainer = styled(Box, {
  baseStyle: {
    textAlign: "center",
    borderRadius: "5rem",
    border: "4px solid var(--chakra-colors-yellow)",
    bg: "whiteGray",
    ".number": {
      color: "brown",
      fontSize: "5rem",
      lineHeight: "7rem",
    },
  },
});
export const NumberDescription = styled(Text, {
  baseStyle: {
    fontSize: "1.8rem",
    paddingTop: "0",
    paddingX: "2rem",
    paddingBottom: "1.5rem",
  },
});
export const Divider = styled(Box, {
  baseStyle: {
    content: 'url("./img/connector.svg")',
    transform: { base: "rotate(90deg)", md: "rotate(0deg)" },
    width: { md: "15%" },
    height: { base: "1rem", md: "auto" },
    marginX: "-1rem",
    marginY: { base: "2.5rem" },
  },
});
