import React from 'react';
import { Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import profileImage from './pics/profile.png';

//Custom CSS using makestyles//
const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    paper: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px',
      backdropFilter: 'blur(5px)', // Apply the glassmorphism effect
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjust the opacity and color as desired
      boxShadow: 'none',
    },
    profileImage: {
      width: '500px', // Adjust the size as desired
      height: 'auto', // Adjust the size as desired
      marginRight: '30px',
    },
    textContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    title: {
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '18px',
    },
  }));
  
//Home Component Defined//
const Home = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <img src={profileImage} alt="Profile" className={classes.profileImage} />
          <div className={classes.textContainer}>
            <Typography variant="h4" className={classes.title}>
              Hi! My Name is John Paul Adlaon
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle}>
              I'm a Full Stack Web Developer
            </Typography>
          </div>
        </Paper>
      </div>
    );
  };
  
  export default Home;  