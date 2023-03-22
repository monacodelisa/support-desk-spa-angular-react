import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './Header.scss';

function Header({ onSearch }) {
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
          <Search onSearch={onSearch}/>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function Search({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <Box >
      <SearchIcon onClick={() => onSearch(inputValue)} />
      <InputBase
        placeholder="Search…"
        inputProps={{ 'aria-label': 'search' }} 
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        />
    </Box>
  );
}

export default Header;
