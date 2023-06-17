import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import profileImages from './pics/profile.png';

const AboutMe = () => {
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
        <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
          About Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                Hi, I'm John Paul Adlaon
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', color: 'black' }}>
                As a full stack web developer, I am committed to providing high-quality and reliable web development
                solutions that meet the unique needs of my clients and exceed their expectations. With my background as an
                experienced draftsman, I bring a keen attention to detail and a strong work ethic to every project I work
                on. My mission is to create innovative and functional web solutions that empower businesses and individuals
                to reach their fullest potential in the digital world. My vision is to become a leading full stack web
                developer, known for my innovative solutions and exceptional customer service.
                <br />
                <br />
                At the core of my work are my values of quality, customer focus, continuous learning, honesty and
                integrity, and creativity. I am committed to delivering top-quality work that meets or exceeds industry
                standards. I prioritize my clients' needs and work collaboratively with them to achieve their goals. I stay
                up-to-date with the latest technologies and trends in web development to ensure that I provide the best
                solutions to my clients. I am transparent in my communication with clients and operate with the highest
                level of honesty and integrity. I am passionate about exploring new ideas and finding innovative solutions
                to challenging problems.
                <br />
                <br />
                And so, Are you Ready to Level Up Your Website? I'm Prepared to Make it Happen!
                <br />
                Let's work together to create the website of your dreams.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={profileImages}
              alt="John Paul Adlaon"
              sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default AboutMe;
