import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { TimerItemContainer, TimerItem } from "./mint-timer.styles";

export interface IMintTImerProps {}

export function MintTimer(props: IMintTImerProps) {
  return (
    <Box
      bg="whiteGray"
      borderColor="black"
      borderWidth="2px"
      borderRadius="46px"
      textAlign="center"
      w={["70%", "60%", "50%"]}
      paddingY="3rem"
      maxWidth={["90rem"]}
    >
      <Heading as="h4" fontWeight="extrabold" fontSize="4xl">
        MINT STARTS IN
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 3 }}>
        <TimerItemContainer>
          <TimerItem>
            <Text>01</Text>
          </TimerItem>
          <Text>Hours</Text>
        </TimerItemContainer>
        <TimerItemContainer>
          <TimerItem>
            <Text>15</Text>
          </TimerItem>
          <Text>Minutes</Text>
        </TimerItemContainer>
        <TimerItemContainer>
          <TimerItem>
            <Text>14</Text>
          </TimerItem>
          <Text>Seconds</Text>
        </TimerItemContainer>
      </SimpleGrid>
    </Box>
  );
}
