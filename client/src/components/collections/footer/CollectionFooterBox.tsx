import React from 'react';
import Box from '@mui/material/Box';
import CollectionActivityButton from './CollectionActivityButton';
import CollectionLikeButton from './CollectionLikeButton';
import CollectionViewsBox from './CollectionViewsBox';
import Collection from '../../../interfaces/Collection';

interface props {
  collection: Collection;
}

const CollectionFooterBoxStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  mt: 2,
};

const LikesAndViewsBoxStyles = {
  display: 'flex',
  alignItems: 'center',
};

const CollectionFooterBox: React.FC<props> = (props) => {
  const {
    collection: { _id, likes, views },
  } = props;

  return (
    <Box sx={CollectionFooterBoxStyles}>
      <Box>
        <CollectionActivityButton
          id={_id}
          variant="contained"
          route="play"
          label="Play"
        />
        <CollectionActivityButton
          id={_id}
          variant="outlined"
          route="practice"
          label="Practice"
        />
      </Box>
      <Box sx={LikesAndViewsBoxStyles}>
        <CollectionLikeButton numLikes={likes} />
        <CollectionViewsBox numViews={views} />
      </Box>
    </Box>
  );
};

export default CollectionFooterBox;
