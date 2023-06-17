import React from 'react';
import { Card, Typography, List, ListItem, ListItemIcon, ListItemText, Box } from '@mui/material';

const CoreValues = () => {
  const coreValues = [
    {
      name: 'Quality',
      description: 'We are committed to delivering top-quality work that meets or exceeds industry standards.',
      icon: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/100/null/external-quality-logistic-delivery-kiranshastry-gradient-kiranshastry.png',
    },
    {
      name: 'Customer Focus',
      description: "We prioritize our clients' needs and work collaboratively with them to achieve their goals.",
      icon: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/100/null/external-quality-logistic-delivery-kiranshastry-gradient-kiranshastry.png',
    },
    {
      name: 'Continuous Learning',
      description:
        'We stay up-to-date with the latest technologies and trends in web development to ensure that we provide the best solutions to our clients.',
      icon: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/100/null/external-quality-logistic-delivery-kiranshastry-gradient-kiranshastry.png',
    },
    {
      name: 'Honesty and Integrity',
      description: 'We are transparent in our communication with clients and operate with the highest level of honesty and integrity.',
      icon: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/100/null/external-quality-logistic-delivery-kiranshastry-gradient-kiranshastry.png',
    },
    {
      name: 'Creativity',
      description: 'We are passionate about exploring new ideas and finding innovative solutions to challenging problems.',
      icon: 'https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/100/null/external-quality-logistic-delivery-kiranshastry-gradient-kiranshastry.png',
    },
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.2)', // Glassmorphism effect
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          p: 2,
          textAlign: 'center',
          width: '80%',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" component="h2" sx={{ mb: 2, color: 'black'}}>
          My Core Values
        </Typography>
        <List sx={{ textAlign: 'left' }}>
          {coreValues.map((value, index) => (
            <ListItem key={index} disableGutters sx={{ mb: 2 }}>
              <ListItemIcon>
                <img src={value.icon} alt={value.name} className="core-img" style={{ color: 'black !important' }} />
              </ListItemIcon>
              <ListItemText
                primary={value.name}
                primaryTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
                secondary={value.description}
                secondaryTypographyProps={{ variant: 'subtitle1', color: 'black', fontWeight: 'bold' }}
              />
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default CoreValues;
