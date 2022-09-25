import React from 'react';
import Stack from '@mui/material/Stack';
import CollectionCard from './CollectionCard';
import collections from '../../../dbPlaceholder/collections';

const CollectionCardList: React.FC = () => {
  const renderCollections = () => {
    return collections.map((collection) => {
      return <CollectionCard key={collection._id} collection={collection} />;
    });
  };

  return <Stack spacing={4}>{renderCollections()}</Stack>;
};

export default CollectionCardList;
