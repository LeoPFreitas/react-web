import React from "react";

import CollectionsOverview from "../../components/collectionsOverview/collectionOverview";

const ShopPage = ({ collections }) => {
  return (
    <div className="shop-page">
      <CollectionsOverview />
    </div>
  );
};

export default ShopPage;
