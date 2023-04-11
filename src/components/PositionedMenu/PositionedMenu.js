import * as React from 'react';
import { connect, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

import { withTMDBService } from '../hocHelpers/withTMDBService';
import { updateListObj, updateFilter, updateType, updateSearchText } from '../../actions';

const PositionedMenu = ({ tmdbService, updateType, updateFilter, updateSearchText }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const searchText = useSelector((state) => state.searchText);

  const handleClick = (event) => {
    updateSearchText('');
    document.querySelector('#outlined-basic').value = null;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    if (e.target.textContent === 'People') {
      tmdbService.getPeople(1).then((data) => {
        updateType('people');
        updateListObj(data);
        navigate(`/people/page/1`);
      });
    }
    if (e.target.textContent === 'Films') {
      tmdbService.getFilms('popular', 1).then((data) => {
        updateListObj(data);
        updateType('films');
        updateFilter('popular');
        navigate(`/`);
      });
    }
    setAnchorEl(null);
    updateSearchText('');
    document.querySelector('#outlined-basic').value = null;
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
        <MenuItem onClick={handleClose} disabled={searchText.length > 0}>
          Films
        </MenuItem>
        <MenuItem onClick={handleClose} disabled={searchText.length > 0}>
          People
        </MenuItem>
      </Menu>
    </div>
  );
};

const mapDispatchToProps = { updateListObj, updateType, updateFilter, updateSearchText };

const wrapped = withTMDBService()(connect(null, mapDispatchToProps)(PositionedMenu));

export { wrapped as PositionedMenu };
