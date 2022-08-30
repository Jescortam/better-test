import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const CollectionsSortBy = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
    >
      <Tab icon={<WhatshotIcon />} />
      <Tab icon={<FavoriteIcon />} />
      <Tab icon={<VisibilityIcon />} />
    </Tabs>
  );
};

export default CollectionsSortBy;
