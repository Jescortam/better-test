import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box';
import DateString from '../DateString';
import Flashcard from '../../interfaces/Flashcard';

interface props {
  flashcard: Flashcard;
}

const CardContentDetailsStyles = { display: 'flex', justifyContent: 'end' };

const FlashcardCard: React.FC<props> = (props) => {
  const {
    flashcard: { question, answer, author, creationDate },
  } = props;

  return (
    <Card>
      <CardContent>
        <Box my={1}>{question}</Box>
        <Box my={1} fontWeight={'bold'}>
          {answer}
        </Box>
        <Box sx={CardContentDetailsStyles}>
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
