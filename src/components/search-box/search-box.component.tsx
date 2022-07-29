import * as React from "react";
import "./search-box.styles.css";
export interface ISearchBoxProps {
  className: string;
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function SearchBox(props: ISearchBoxProps) {
  return (
    <input
      className={`search-box ${props.className}`}
      type="search"
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
    />
  );
}
