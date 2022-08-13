import { Button, StyleProps } from "@chakra-ui/react";

export interface IActionButtonProps {
  disabled?: boolean;
  text: string;
  action?: () => void;
  styleProps?: StyleProps;
}

export function ActionButton(props: IActionButtonProps) {
  return (
    <Button
      color="brown"
      background="yellow"
      boxShadow="0.25rem 0.25rem 0 var(--chakra-colors-brown)"
      borderRadius="66px"
      padding="0.8rem"
      disabled={props.disabled}
      _hover={{
        background: "brown",
        color: "yellow",
        boxShadow: "0.3rem 0.3rem 0 var(--chakra-colors-yellow)",
      }}
      onClick={() => props.action && props.action()}
      {...props.styleProps}
    >
      {props.text}
    </Button>
  );
}
