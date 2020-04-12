import React, { Component } from "react";

import { data } from "./data";

import PreviewCollection from "../../components/previewCollection/previewCollection";

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: data,
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...props }) => (
          <PreviewCollection key={id} {...props} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
