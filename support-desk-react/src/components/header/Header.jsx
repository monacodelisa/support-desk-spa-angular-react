import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';

function Header() {
  return (
    <Box className="header">
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
          >
            Support Desk
          </Typography>
          <Search />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Search() {
  return (
    <Box >
      <SearchIcon />
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }} />
    </Box>
  );
}

export default Header;
