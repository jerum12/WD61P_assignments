import React from 'react';
import { Typography, Paper, Grid, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Rating from '@mui/material/Rating';
import HtmlLogo from './pics/HTML5.png';
import CssLogo from './pics/CSS3.png';
import JsLogo from './pics/JS.png';
import ReactLogo from './pics/React.png';
import PhotoshopLogo from './pics/PS.png';

//makeStyles Custom CSS//
const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      backdropFilter: 'blur(5px)', // Apply the glassmorphism effect
      backgroundColor: 'rgba(255, 255, 255, 0.2)', // Adjust the opacity and color as desired
      boxShadow: 'none',
    },
    heading: {
      marginBottom: '20px',
    },
    description: {
      marginBottom: '30px',
      textAlign: 'center',
    },
    sectionHeading: {
      marginBottom: '10px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    logo: {
      width: '50px',
      height: '50px',
      marginRight: '10px',
    },
  }));
  

//About Me Component Defined//
const About = () => {
    const classes = useStyles();
  
    return (
      <div className={classes.container}>
        <Paper className={classes.paper}>
          <Typography variant="h4" className={classes.heading}>
            About Me
          </Typography>
          <Typography variant="body1" className={classes.description}>
            [Brief description about yourself]
          </Typography>
          <Typography variant="h5" className={classes.sectionHeading}>
            Mission, Vision, and Core Values
          </Typography>
          <Typography variant="body1" className={classes.description}>
            [Description of your mission, vision, and core values]
          </Typography>
          <Typography variant="h5" className={classes.sectionHeading}>
            Skillset
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <img src={HtmlLogo} alt="HTML Logo" className={classes.logo} />
                <Typography variant="body1">HTML</Typography>
              </Box>
              <Rating value={4} readOnly />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <img src={CssLogo} alt="CSS Logo" className={classes.logo} />
                <Typography variant="body1">CSS</Typography>
              </Box>
              <Rating value={4} readOnly />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <img src={JsLogo} alt="JavaScript Logo" className={classes.logo} />
                <Typography variant="body1">JavaScript</Typography>
              </Box>
              <Rating value={4} readOnly />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <img src={ReactLogo} alt="React Logo" className={classes.logo} />
                <Typography variant="body1">React JS</Typography>
              </Box>
              <Rating value={4} readOnly />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" alignItems="center">
                <img src={PhotoshopLogo} alt="Photoshop Logo" className={classes.logo} />
                <Typography variant="body1">Photoshop</Typography>
              </Box>
              <Rating value={3} readOnly />
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  };
  
  export default About;
  