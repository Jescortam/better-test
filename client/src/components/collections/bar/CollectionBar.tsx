import Box from '@mui/material/Box';
import CollectionNewButton from './CollectionNewButton';
import CollectionSortBy from './CollectionSortBy';

const CollectionBar = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        mb: 2,
      }}
    >
      <CollectionNewButton />
      <CollectionSortBy />
    </Box>
  );
};

export default CollectionBar;
