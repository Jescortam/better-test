import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

interface props {
  contributors: string[];
  numContributorsShown: number;
}

const ContributorsBoxStyles = {
  display: 'flex',
};

const ContributorsAvatarStyles = {
  width: 20,
  height: 20,
  backgroundColor: 'green',
  mr: 0.5,
};

const CollectionCardContributorsBox: React.FC<props> = (props) => {
  const { contributors, numContributorsShown } = props;

  const renderShortContributorList = (numContributorsShown: number) => {
    if (contributors.length === 1) {
      return contributors[0];
    }

    const contributorsShown = contributors.slice(0, numContributorsShown);
    const contributorsShownString = contributorsShown.join(', ');
    const otherContributors = contributors.length - numContributorsShown;
    const otherContributorsString =
      otherContributors > 0 ? `and ${otherContributors} more...` : '';

    return `${contributorsShownString} ${otherContributorsString}`;
  };

  return (
    <Box sx={ContributorsBoxStyles}>
      <Avatar sx={ContributorsAvatarStyles}></Avatar>
      <Typography color="text.secondary">
        {renderShortContributorList(numContributorsShown)}
      </Typography>
    </Box>
  );
};

export default CollectionCardContributorsBox;
