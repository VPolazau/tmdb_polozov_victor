import * as React from 'react';
import { connect } from 'react-redux';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { withTMDBService } from '../hocHelpers/withTMDBService';
import { upadatelistObj, updateFilter, updateType, updatePage } from '../../actions';

const PositionedMenu = ({ tmdbService, upadatelistObj, updateType, updatePage, updateFilter }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    if (e.target.innerText === 'People') {
      tmdbService.getPeople(1).then((data) => {
        updateType('People')
        upadatelistObj(data);
        updatePage(1)
      });
    }
    if (e.target.innerText === 'Films') {
      tmdbService.getFilms('popular', 1).then((data) => {
        updateType('Films')
        upadatelistObj(data);
        updateFilter('popular')
        updatePage(1)
      });
    }
  };

  return (
    <div>
      <Button
        id='demo-positioned-button'
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon fontSize='large' />
      </Button>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Films</MenuItem>
        <MenuItem onClick={handleClose}>People</MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = { upadatelistObj, updateType, updateFilter, updatePage };

const wrapped = withTMDBService()(connect(null ,mapDispatchToProps)(PositionedMenu));

export { wrapped as PositionedMenu };
