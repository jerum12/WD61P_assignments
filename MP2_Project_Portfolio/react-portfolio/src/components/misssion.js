import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import missionpic from './pics/mission.jpg';

const Mission = () => {
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
          My Mission Statement
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
          <Box
            component="img"
            src={missionpic}
            alt="Mission Image"
            sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
          />
          <CardContent>
            <Typography variant="h6" sx={{ textAlign: 'center', mt: 2, color: 'black' }}>
              Our mission is to provide innovative web development solutions that meet the needs of our clients while providing
              excellent customer service and support.
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </div>
  );
};

export default Mission;
