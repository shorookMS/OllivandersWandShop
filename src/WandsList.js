import React, { Component } from "react";
import WandItem from "./WandItem";

class WandsList extends Component {
  render() {
    let cardList = this.props.wands.map(wand => (
      <WandItem wand={wand} key={wand.imageUrl} />
    ));
    return (
      <div className="wands">
        <div className="row">{cardList}</div>
      </div>
    );
  }
}
export default WandsList;
