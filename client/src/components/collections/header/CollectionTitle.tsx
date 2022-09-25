import React from 'react';
import Typography from '@mui/material/Typography';

interface props {
  title: string;
}

const CollectionCardTitle: React.FC<props> = ({ title }) => {
  return (
    <Typography variant="h5" component="div" my={0.5}>
      {title}
    </Typography>
  );
};

export default CollectionCardTitle;
