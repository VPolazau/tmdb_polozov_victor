import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const ToggleBtns = () => {
  const [alignment, setAlignment] = useState('popular');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup color='primary' value={alignment} exclusive onChange={handleChange} aria-label='Platform' size='small'>
      <ToggleButton value='popular'>Popular</ToggleButton>
      <ToggleButton value='top_rated'>Top</ToggleButton>
      <ToggleButton value='now_playing'>Latest</ToggleButton>
    </ToggleButtonGroup>
  );
};

export { ToggleBtns };
