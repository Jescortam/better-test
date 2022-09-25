import React from 'react';
import Box from '@mui/material/Box';

interface props {
  image: string;
}

const CollectionImageStyles = {
  width: 80,
  height: 80,
};

const CollectionImage: React.FC<props> = ({ image }) => {
  const getImage = () => {
    if (image === '') {
      return 'placeholder.png';
    }
  };

  return <Box component="img" sx={CollectionImageStyles} src={getImage()} />;
};

export default CollectionImage;
