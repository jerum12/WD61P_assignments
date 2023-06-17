import React from 'react';
import { Typography, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import profileImage from './pics/profile.png';
import Typing from 'react-typing-animation';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px',
    height: '75vh',
  },
  paper: {
    display: 'flex',
    alignItems: 'center',
    padding: '30px',
    borderRadius: '30px !important',
    backdropFilter: 'blur(10px) !important',
    backgroundColor: 'rgba(255, 255, 255, 0.2) !important',
    boxShadow: 'none',
  },
  profileImage: {
    width: '500px',
    height: 'auto',
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
  typingText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'blue',
    marginBottom: '20px',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper}>
        <img src={profileImage} alt="Profile" className={classes.profileImage} />
        <div className={classes.textContainer}>
        <Typography variant="h2" className={classes.title}>
            Hi! My Name is
          </Typography>
          <Typography variant="h2" className={classes.title}>
            John Paul Adlaon
          </Typography>
          <Typography variant="h2" className={`${classes.title} ${classes.typingText}`}>
            <Typing loop>
              <Typography component="h3" variant="h3" className={classes.subtitle}>
                <Typing.Speed ms={100} />
                Full Stack Web Developer
                <Typing.Backspace count={26} delay={1500} />
                <Typing.Speed ms={100} />
                Project Estimator
                <Typing.Backspace count={18} delay={1500} />
                <Typing.Speed ms={100} />
                Freelancer
                <Typing.Backspace count={10} delay={1500} />
                <Typing.Speed ms={100} />
                AutoCAD Draftsman
                <Typing.Backspace count={17} delay={1500} />
                <Typing.Speed ms={100} />
                Virtual Assistant
                <Typing.Backspace count={18} delay={1500} />
                <Typing.Speed ms={100} />
                Front End Developer
                <Typing.Backspace count={20} delay={1500} />
                <Typing.Speed ms={100} />
                Back End Developer
                <Typing.Backspace count={18} delay={1500} />
              </Typography>
            </Typing>
          </Typography>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
