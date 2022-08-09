import { Box, styled, Text } from "@chakra-ui/react";

export const NumberContainer = styled(Box, {
  baseStyle: {
    textAlign: "center",
    borderRadius: "5rem",
    border: "4px solid var(--chakra-colors-yellow)",
    bg: "whiteGray",
    ".number": {
      color: "brown",
      fontSize: "8rem",
      fontWeight: "900",
    },
  },
});
export const NumberDescription = styled(Text, {
  baseStyle: {
    fontSize: "1.8rem",
    padding: "2rem",
  },
});
export const Divider = styled(Box, {
  baseStyle: {
    content: 'url("./img/connector.svg")',
    transform: { base: "rotate(90deg)", md: "rotate(0deg)" },
    width: { base: "auto", md: "15%" },
    marginX: "-1rem",
    marginY: { base: "5.5rem", sm: "9.5rem" },
  },
});
