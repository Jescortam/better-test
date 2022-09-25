import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CollectionDetails from '../CollectionDetails';
import Collection from '../../../interfaces/Collection';

interface props {
  collection: Collection;
}

const CollectionCardButtonStyles = {
  textTransform: 'none',
};

const CollectionCardStyles = {
  margin: 'auto',
  minWidth: 275,
  textAlign: 'start',
};

const CollectionCard: React.FC<props> = (props) => {
  const { collection } = props;

  return (
    <Button
      sx={CollectionCardButtonStyles}
      component={Link}
      to={`/collections/${collection._id}`}
    >
      <Card sx={CollectionCardStyles}>
        <CardContent>
          <CollectionDetails collection={collection} descMaxNumChar={150} />
        </CardContent>
      </Card>
    </Button>
  );
};

export default CollectionCard;
