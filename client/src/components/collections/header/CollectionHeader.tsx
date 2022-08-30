import Box from '@mui/material/Box';
import CollectionTitle from './CollectionTitle';
import CollectionImage from './CollectionImage';
import CollectionContributorsBox from './CollectionContributorsBox';
import CollectionDate from './CollectionDate';
import Collection from '../../../interfaces/Collection';

interface props {
  collection: Collection;
}

const CollectionCardContent = ({ collection }: props) => {
  const { image, title, contributors, creationDate } = collection;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
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
