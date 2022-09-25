import React from 'react';
import Box from '@mui/material/Box';
import CollectionNewButton from './CollectionNewButton';
import CollectionSortBy from './CollectionSortBy';

const CollectionBarStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  mb: 2,
};

const CollectionBar: React.FC = () => {
  return (
    <Box sx={CollectionBarStyles}>
      <CollectionNewButton />
      <CollectionSortBy />
    </Box>
  );
};

export default CollectionBar;
