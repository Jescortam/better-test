import Box from '@mui/material/Box';
import CollectionPlayButton from './CollectionPlayButton';
import CollectionPracticeButton from './CollectionPracticeButton';
import CollectionLikeButton from './CollectionLikeButton';
import CollectionViewsBox from './CollectionViewsBox';
import Collection from '../../../interfaces/Collection';

interface props {
  collection: Collection;
}

const CollectionFooterBox = ({ collection }: props) => {
  const { _id, likes, views } = collection;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        mt: 2,
      }}
    >
      <Box>
        <CollectionPlayButton id={_id} />
        <CollectionPracticeButton id={_id} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CollectionLikeButton likes={likes} />
        <CollectionViewsBox views={views} />
      </Box>
    </Box>
  );
};

export default CollectionFooterBox;
