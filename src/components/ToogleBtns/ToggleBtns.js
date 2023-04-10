import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { withTMDBService } from '../hocHelpers/withTMDBService';
import { updateListObj, updateFilter } from '../../actions';

const ToggleBtns = ({ filter, tmdbService, updateListObj, updateFilter }) => {
  const [alignment, setAlignment] = useState(filter);

  useEffect(() => {
    setAlignment(filter);
  }, [filter]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);

    tmdbService.getFilms(newAlignment, 1).then((data) => {
      updateListObj(data)
      updateFilter(newAlignment)

    });
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

const mapDispatchToProps = { updateListObj, updateFilter };

const wrapped = withTMDBService()(connect(null, mapDispatchToProps)(ToggleBtns));

export { wrapped as ToggleBtns };
