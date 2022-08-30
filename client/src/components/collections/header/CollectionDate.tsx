import Typography from '@mui/material/Typography';
import DateString from '../../DateString';

interface props {
  creationDate: Date;
}

const CollectionCardDate = ({ creationDate }: props) => {
  return (
    <Typography sx={{ mb: 1.5 }} color="text.secondary">
      <DateString>{creationDate}</DateString>
    </Typography>
  );
};

export default CollectionCardDate;
