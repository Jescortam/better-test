import Typography from '@mui/material/Typography';

interface props {
  description: string;
  maxNumCharacters?: number;
}

const CollectionDescription = ({ description, maxNumCharacters }: props) => {
  const sliceDescription = () => {
    if (sliceNotNeeded()) {
      return description;
    }
    return `${description.slice(0, maxNumCharacters)}...`;
  };

  const sliceNotNeeded = () => {
    return (
      typeof maxNumCharacters === 'undefined' ||
      maxNumCharacters > description.length
    );
  };

  return <Typography variant="body2">{sliceDescription()}</Typography>;
};

export default CollectionDescription;
