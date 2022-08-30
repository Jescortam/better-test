import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import DateString from '../DateString';
import Flashcard from '../../interfaces/Flashcard';

interface props {
  flashcard: Flashcard;
}

const FlashcardCard = ({ flashcard }: props) => {
  const { question, answer, author, creationDate } = flashcard;

  return (
    <Card>
      <CardContent>
        <Box my={1}>{question}</Box>
        <Box my={1} fontWeight={'bold'}>
          {answer}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'end' }}>
          <Box mx={1}>
            <DateString>{creationDate}</DateString>
          </Box>
          |<Box ml={1}>{author}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default FlashcardCard;
