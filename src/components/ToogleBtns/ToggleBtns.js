import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import { withTMDBService } from '../hocHelpers/withTMDBService';
import { upadatelistObj, updateFilter, updatePage } from '../../actions';

const ToggleBtns = ({ filter, tmdbService, upadatelistObj, updateFilter, updatePage }) => {
  const [alignment, setAlignment] = useState(filter);

  useEffect(() => {
    setAlignment(filter);
  }, [filter]);

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);

    tmdbService.getFilms(newAlignment, 1).then((data) => {
      upadatelistObj(data)
      updateFilter(newAlignment)
      updatePage(1);
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

const mapDispatchToProps = { upadatelistObj, updateFilter, updatePage };

const wrapped = withTMDBService()(connect(null, mapDispatchToProps)(ToggleBtns));

export { wrapped as ToggleBtns };
