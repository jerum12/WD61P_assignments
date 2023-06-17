import React from 'react';
import { Typography, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const useStyles = makeStyles(() => ({
  container: {
    padding: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius: '10px',
    display: 'flex',
    marginTop: '5%',
    justifyContent: 'center !important',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
  },
  icon: {
    color: 'black',
    transition: 'color 0.3s ease',
    '&:hover': {
      color: '#3f51b5',
    },
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: '10px',
  },
  typography: {
    textAlign: 'center',
  },
  '@media (max-width: 767px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    iconsContainer: {
      marginTop: '20px',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container xs={12} md={6} xl={6} alignItems="center" justifyContent="center">
        <Typography variant="body1" color="textSecondary" style={{ whiteSpace: 'nowrap', color: 'black' }}>
          © 2023 JP Adlaon Portfolio. All rights reserved.
        </Typography>
      </Grid>
      <Grid container xs={12} md={6} xl={6} className={classes.iconsContainer}>
        <IconButton href="https://www.facebook.com/" target="_blank" sx={{ fontSize: '2rem', margin: '5px' }}>
          <FacebookIcon className={classes.icon} />
        </IconButton>
        <IconButton href="https://www.instagram.com/" target="_blank" sx={{ fontSize: '2rem', margin: '5px' }}>
          <InstagramIcon className={classes.icon} />
        </IconButton>
        <IconButton href="https://github.com/" target="_blank" sx={{ fontSize: '2rem', margin: '5px' }}>
          <GitHubIcon className={classes.icon} />
        </IconButton>
        <IconButton href="https://www.linkedin.com/" target="_blank" sx={{ fontSize: '2rem', margin: '5px' }}>
          <LinkedInIcon className={classes.icon} />
        </IconButton>
        <IconButton href="https://www.youtube.com/" target="_blank" sx={{ fontSize: '2rem', margin: '5px' }}>
          <YouTubeIcon className={classes.icon} />
        </IconButton>
      </Grid>
    </div>
  );
};

export default Footer;
