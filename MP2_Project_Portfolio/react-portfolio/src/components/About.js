import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import AboutMe from './aboutme.js';
import Mission from './misssion.js';
import Vision from './vision.js';
import CoreValues from './corevalues.js';

const About = () => {
  return (
    <Carousel showStatus={false} showThumbs={false} infiniteLoop autoPlay>
      <div>
        <AboutMe />
      </div>
      <div>
        <Mission />
      </div>
      <div>
        <Vision />
      </div>
      <div>
        <CoreValues />
      </div>
    </Carousel>
  );
};

export default About;
