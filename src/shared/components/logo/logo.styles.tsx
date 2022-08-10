import { Box, styled } from "@chakra-ui/react";

export const LogoContainer = styled(Box, {
  baseStyle: (props: any) => ({
    color: props.inverted ? "white" : "brown",
    fontWeight: "900",
    fontSize: "1.5rem",
    lineHeight: "1.5rem",
    span: {
      display: "block",
    },
  }),
});
