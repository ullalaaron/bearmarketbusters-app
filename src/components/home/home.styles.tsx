import { styled, Image, keyframes } from "@chakra-ui/react";
const leftJump = keyframes`
  0%,100% {     
    transform: rotate(45deg) translateY(0);
  }
  50% {     
    transform: rotate(45deg) translateY(-20px);
  }
`;

const leftAnimation = `${leftJump} 4s ease infinite`;

const rightJump = keyframes`
  0%,100% {     
    transform: rotate(-45deg) translateY(0);
  }
  50% {     
    transform: rotate(-45deg) translateY(-20px);
  }
`;

const rightAnimation = `${rightJump} 4s ease infinite`;

export const SideBearImage = styled(Image, {
  baseStyle: (props) => ({
    width: ["22rem", "30rem"],
    position: "fixed",
    zIndex: "1",
  }),
});
export const LeftSideBearImage = styled(SideBearImage, {
  baseStyle: {
    animation: leftAnimation,
    top: "25%",
    left: ["-55%", "-25%", "-25% ", "-25%", "-15rem"],
  },
});
export const RightSideBearImage = styled(SideBearImage, {
  baseStyle: {
    animation: rightAnimation,
    top: "35%",
    right: ["-55%", "-25%", "-25% ", "-25%", "-15rem"],
  },
});
