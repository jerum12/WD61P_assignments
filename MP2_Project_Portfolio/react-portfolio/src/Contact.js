import React from 'react';
import { Typography, TextField, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

//Custom CSS using makeStyles//
const useStyles = makeStyles(() => ({
    container: {
      padding: '50px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      borderRadius: '10px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      padding: '30px',
    },
    textField: {
      margin: '10px 0',
    },
    button: {
      marginTop: '20px',
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
          />
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textField}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={classes.textField}
          />
          <Button type="submit" variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </form>
      </div>
    );
  };
  
  export default ContactMe;
  