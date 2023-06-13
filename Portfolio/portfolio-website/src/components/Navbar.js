import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Link } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link
            component={RouterLink}
            to="/"
            underline="none"
            color="inherit"
            variant="h6"
          >
            Your Name
          </Link>
        </Typography>
        <Link
          component={RouterLink}
          to="/"
          underline="none"
          color="inherit"
          variant="subtitle1"
          sx={{ marginRight: '1rem' }}
        >
          Home
        </Link>
        <Link
          component={RouterLink}
          to="/projects"
          underline="none"
          color="inherit"
          variant="subtitle1"
          sx={{ marginRight: '1rem' }}
        >
          Projects
        </Link>
        <Link
          component={RouterLink}
          to="/contact"
          underline="none"
          color="inherit"
          variant="subtitle1"
        >
          Contact
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
