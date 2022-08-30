import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CollectionDetails from '../CollectionDetails';
import Collection from '../../../interfaces/Collection';

interface props {
  collection: Collection;
}

const CollectionCard = ({ collection }: props) => {
  return (
    <Button
      sx={{ textTransform: 'none' }}
      component={Link}
      to={`/collections/${collection._id}`}
    >
      <Card
        sx={{
          margin: 'auto',
          minWidth: 275,
          textAlign: 'start',
        }}
      >
        <CardContent>
          <CollectionDetails collection={collection} descMaxNumChar={150} />
        </CardContent>
      </Card>
    </Button>
  );
};

export default CollectionCard;
