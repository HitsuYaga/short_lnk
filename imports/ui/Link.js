import React from "react";

import LinkList from "./LinkList";
import PrivateHeader from "./PrivateHeader";
import AddLink from "./AddLink";
import LinkListFilter from "./LinkListFilter";

export default () => {
  return (
    <div>
      <PrivateHeader title="Your links" />
      <LinkListFilter />
      <LinkList />
      <AddLink />
    </div>
  );
};
