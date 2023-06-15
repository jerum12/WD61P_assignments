import React from 'react';
import { Typography, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

//Custom CSS using makeStyles//
const useStyles = makeStyles(() => ({
    container: {
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    icon: {
      color: '#fff',
      margin: '0 10px',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#3f51b5',
      },
    },
  }));

//Footer Component defined//
const Footer = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <Typography variant="body2" color="textSecondary">
          © 2023 JP Adlaon Portfolio. All rights reserved.
        </Typography>
        <Grid container justifyContent="center" alignItems="center">
          <IconButton href="https://www.facebook.com/" target="_blank">
            <FacebookIcon className={classes.icon} />
          </IconButton>
          <IconButton href="https://www.instagram.com/" target="_blank">
            <InstagramIcon className={classes.icon} />
          </IconButton>
          <IconButton href="https://github.com/" target="_blank">
            <GitHubIcon className={classes.icon} />
          </IconButton>
          <IconButton href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon className={classes.icon} />
          </IconButton>
          <IconButton href="https://www.youtube.com/" target="_blank">
            <YouTubeIcon className={classes.icon} />
          </IconButton>
        </Grid>
      </div>
    );
  };
  
  export default Footer;  