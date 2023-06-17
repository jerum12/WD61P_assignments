import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Project1 from './pics/proj1.jpg';
import Project2 from './pics/proj2.jpg';
import Project3 from './pics/proj3.jpg';

//Custom CSS using makeStyles//
const useStyles = makeStyles(() => ({
  container: {
    padding: '50px',
  },
  card: {
    maxWidth: '80% !important',
    margin: 'auto !important',
    borderRadius: '10px',
    background: 'rgba(255, 255, 255, 0.2) !important',
    backdropFilter: 'blur(10px) !important',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37) !important',
    border: '1px solid rgba(255, 255, 255, 0.18) !important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  media: {
    height: 'auto !important',
    cursor: 'pointer',
  },
}));

//Project Component Defined//
const Projects = () => {
  const classes = useStyles();

  // Sample data for three latest projects
  const projects = [
    {
      id: 1,
      title: <b>eshop.</b>,
      description:
        'A seamless e-commerce store with an extensive product selection, intuitive user experience, secure payments, personalized recommendations, fast delivery, and responsive customer support.',
      image: Project1, // Provide the appropriate image path
    },
    {
      id: 2,
      title: <b>HOMYZ</b>,
      description:
        'Experience the best in real estate. Discover a user-friendly website, extensive property listings, expert agents, secure transactions, and exceptional customer service. Your dream home awaits.',
      image: Project2, // Provide the appropriate image path
    },
    {
      id: 3,
      title: <b>Business</b>,
      description:
        'Elevate your business with our comprehensive solutions. Experience seamless integration, data-driven insights, innovative strategies, and dedicated support. Drive growth and stay ahead in today\'s competitive landscape.',
      image: Project3, // Provide the appropriate image path
    },
  ];

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        Latest Projects
      </Typography>
      <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
        {projects.map((project) => (
          <div key={project.id}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={project.title}
                  image={project.image}
                  className={classes.media}
                  onClick={() => window.open(project.image, '_blank')}
                />
                <CardContent>
                  <Typography variant="h5" component="div">
                    {project.title}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
