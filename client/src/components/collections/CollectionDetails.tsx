import React from 'react';
import Divider from '@mui/material/Divider';
import CollectionHeader from './header/CollectionHeader';
import CollectionDescription from './body/CollectionDescription';
import CollectionFooterBox from './footer/CollectionFooterBox';
import Collection from '../../interfaces/Collection';

interface props {
  collection: Collection;
  descMaxNumChar?: number;
}

const CollectionDetails: React.FC<props> = (props) => {
  const { collection, descMaxNumChar } = props;
  const { description } = collection;

  return (
    <>
      <CollectionHeader collection={collection} />
      <Divider variant="middle" sx={{ mb: 2 }} />
      <CollectionDescription
        description={description}
        maxNumCharacters={descMaxNumChar}
      />
      <CollectionFooterBox collection={collection} />
    </>
  );
};

export default CollectionDetails;
