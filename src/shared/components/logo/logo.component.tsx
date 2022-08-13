import { LogoContainer } from "./logo.styles";

export interface ILogoProps {
  inverted?: boolean;
}

export function Logo(props: ILogoProps) {
  return (
    <LogoContainer inverted={+!!props.inverted}>
      <span>BEAR</span>
      <span>MARKET</span>
      <span>BUSTERS</span>
    </LogoContainer>
  );
}
