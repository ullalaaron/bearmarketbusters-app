import { Box, styled } from "@chakra-ui/react";

export const TimerItem = styled(Box, {
  baseStyle: {
    bg: "yellow",
    color: "brown",
    border: "2px solid brown",
    boxShadow: "3px 3px 0px brown",
    borderRadius: "23px",
    fontSize: "3rem",
    fontWeight: "900",
    margin: "1rem",
  },
});

export const TimerItemContainer = styled(Box, {
  baseStyle: {
    width: "auto",
  },
});
