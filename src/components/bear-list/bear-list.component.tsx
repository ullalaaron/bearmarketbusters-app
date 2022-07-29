import { Component, ReactNode } from "react";
import { BearMarketBuster } from "../bear-detail/bear-detail.component";

export interface BearListProps {
  bearList: BearMarketBuster[];
}
export class BearList extends Component<BearListProps, any> {
  render(): ReactNode {
    console.log("Rendered BearList");
    const { bearList } = this.props;
    return (
      <div>
        {bearList.map((bear) => (
          <div key={bear.tokenId}>
            <p>{bear.name}</p>
          </div>
        ))}
      </div>
    );
  }
}
