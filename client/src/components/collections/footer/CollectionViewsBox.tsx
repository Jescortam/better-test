import React from 'react';
import Box from '@mui/material/Box';

interface props {
  numViews: number;
}

const CollectionViewsBoxStyles = {
  mx: 1.5,
  fontSize: 14,
};

const CollectionViewsBox: React.FC<props> = ({ numViews }) => {
  return (
    <Box sx={CollectionViewsBoxStyles}>
      {numViews} {numViews === 1 ? 'view' : 'views'}
    </Box>
  );
};

export default CollectionViewsBox;
