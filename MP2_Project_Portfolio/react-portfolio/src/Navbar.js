import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';
import '@mui/styles';

//Creating custom CSS using makeStyles//
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
    navbar: {
      backdropFilter: 'blur(5px)', // Apply the glassmorphism effect
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjust the opacity and color as desired
      boxShadow: 'none',
    },
    logo: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      marginRight: '10px',
    },
  }));
  
//Navbar Component Defined//
const Navbar = () => {
    const classes = useStyles();
  
    return (
      <AppBar position="static" className={classes.navbar}>
        <Toolbar position="relative" className={classes.toolbar}>
          <Typography variant="h6" className={classes.logo}>
            JP Adlaon
          </Typography>
          <Button component={Link} to="/" className={classes.link}>
            Home
          </Button>
          <Button component={Link} to="/about" className={classes.link}>
            About
          </Button>
          <Button component={Link} to="/projects" className={classes.link}>
            Projects
          </Button>
          <Button component={Link} to="/contact" className={classes.link}>
            Contact
          </Button>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;