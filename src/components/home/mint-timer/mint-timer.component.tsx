import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { ActionButton } from "../../../shared/components/action-button/action-button.component";
import { TimerItemContainer, TimerItem } from "./mint-timer.styles";

export interface IMintTImerProps {
  isLive: boolean;
}

export function MintTimer(props: IMintTImerProps) {
  return (
    <Box
      bg="whiteGray"
      borderColor="black"
      borderWidth="0.15rem"
      borderRadius="3rem"
      textAlign="center"
      w={["70%", "60%", "50%"]}
      paddingY="2rem"
      maxWidth={["90rem"]}
    >
      <Heading as="h5" fontWeight="extrabold" fontSize="xl">
        MINT STARTS IN...
      </Heading>
      {props.isLive && (
        <Box>
          <Heading
            color="yellow"
            paddingY="2rem"
            animation={"blinker 1.5s infinite"}
          >
            LIVE NOW
          </Heading>
          <HashLink to="#mint" smooth>
            <ActionButton text={"GO MINT"}></ActionButton>
          </HashLink>
        </Box>
      )}
      {!props.isLive && (
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
      )}
    </Box>
  );
}
