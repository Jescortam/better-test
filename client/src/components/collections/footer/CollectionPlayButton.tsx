import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

interface props {
  id: string;
}

const CollectionPlayButton = ({ id }: props) => {
  return (
    <Button
      sx={{ mr: 1 }}
      component={Link}
      to={`/collections/${id}/play`}
      variant="contained"
    >
      Play
    </Button>
  );
};

export default CollectionPlayButton;
