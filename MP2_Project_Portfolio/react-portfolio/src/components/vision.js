import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import visionpic from './pics/vision.jpg';

const Vision = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
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
        <Typography variant="h4" component="h2" sx={{ mb: 2, color: 'black' }}>
          My Vision Statement
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box
            component="img"
            src={visionpic}
            alt="Vision Image"
            sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, color: 'black' }}>
              Our vision is to be the leading provider of web development services by consistently delivering high-quality solutions
              that exceed our clients' expectations.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default Vision;
