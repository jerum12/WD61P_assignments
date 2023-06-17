import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

//Custom CSS using makeStyles//
const useStyles = makeStyles(() => ({
    container: {
      display: 'flex',
      justifyContent: 'center',
    //   padding: '50px',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      
    },
    form: {
      marginTop: '10px',
      // margin: '10%',
      // position: 'relative',
      padding: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.15)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      width: '50vw',
      height: '60vh',
      textTransform:'uppercase',
      letterSpacing: '0.4rem',
    },
    textField: {
      // margin: '10px',
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      // borderRadius: '5px !important',
      // height: '3rem !important',
      padding: '1rem',
      marginTop: '20px !important',
      background: 'rgba(64, 64, 64, 0.15)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      borderRadius: '2rem',
      outline: 'none !important',
    
    },
    button: {
      marginTop: '20px !important',
      margin: 'auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '50% !important',
      borderRadius: '50px !important',
      fontSize: '1.5rem !important',
    },
  }));

//Contact-Me component defined//
const ContactMe = () => {
    const classes = useStyles();
  
    // Form state
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [message, setMessage] = React.useState('');
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform desired actions with form data
      console.log('Name:', name);
      console.log('Email:', email);
      console.log('Message:', message);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    };
  
    return (
      <div className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Contact Me
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={classes.textField}
            fullWidth
            sx={{ borderRadius: "10px !important" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textField}
            fullWidth
            sx={{ borderRadius: "10px !important" }}
          />
          <TextField
            label="Message"
            multiline
            rows={7}
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.textField}
            fullWidth
            sx={{ borderRadius: "10px !important" }}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    );
  };
  
  export default ContactMe;
  