import React from 'react';

import LinkList from './LinkList';
import PrivateHeader from './PrivateHeader'
import AddLink from './AddLink';

export default () => {
  return (
    <div>
      <PrivateHeader title="Your links" />
      <LinkList />
      <AddLink />
    </div>
  )
}
