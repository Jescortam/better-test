import React from 'react';
import Box from '@mui/material/Box';
import CollectionTitle from './CollectionTitle';
import CollectionImage from './CollectionImage';
import CollectionContributorsBox from './CollectionContributorsBox';
import CollectionDate from './CollectionDate';
import Collection from '../../../interfaces/Collection';

interface props {
  collection: Collection;
}

const CollectionCardContentStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const CollectionCardContent: React.FC<props> = (props) => {
  const {
    collection: { image, title, contributors, creationDate },
  } = props;

  return (
    <Box sx={CollectionCardContentStyles}>
      <Box sx={{ mr: 1 }}>
        <CollectionContributorsBox
          contributors={contributors}
          numContributorsShown={1}
        />
        <CollectionTitle title={title} />
        <CollectionDate creationDate={creationDate} />
      </Box>
      <CollectionImage image={image} />
    </Box>
  );
};

export default CollectionCardContent;
