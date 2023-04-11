import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { updateFilter } from '../../actions';
import { useNavigate } from 'react-router-dom';

const ToggleBtns = ({ filter, updateFilter }) => {
  const [alignment, setAlignment] = useState(filter);
  const navigate = useNavigate()

  useEffect(() => {
    setAlignment(filter);
  }, [filter]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    updateFilter(newAlignment)
    navigate(`/films/page/1`)
  };

  return (
    <ToggleButtonGroup
      color='primary'
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label='Platform'
      size='small'
    >
      <ToggleButton value='popular'>Popular</ToggleButton>
      <ToggleButton value='top_rated'>Top</ToggleButton>
      <ToggleButton value='now_playing'>Latest</ToggleButton>
    </ToggleButtonGroup>
  );
};

const mapDispatchToProps = { updateFilter };

const wrapped = connect(null, mapDispatchToProps)(ToggleBtns);

export { wrapped as ToggleBtns };
