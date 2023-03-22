import React from 'react';
import { Toolbar, Typography, Box } from '@mui/material';
import { useState } from 'react';
import './Footer.scss';

function Footer() {
const credits = '{{ MonaCodeLisa }}';

  return (
    <Box className="footer">
        <Toolbar>
          <Typography>
            <a href="https://www.linkedin.com/in/monacodelisa/" target="_blank" rel="noreferrer">{credits}</a>
          </Typography>
        </Toolbar>
    </Box>
  );
}

export default Footer;
