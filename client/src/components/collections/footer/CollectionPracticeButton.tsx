import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

interface props {
  id: string;
}

const CollectionPracticeButton = ({ id }: props) => {
  return (
    <Button
      sx={{ mr: 1 }}
      component={Link}
      to={`/collections/${id}/practice`}
      variant="outlined"
    >
      Practice
    </Button>
  );
};

export default CollectionPracticeButton;
