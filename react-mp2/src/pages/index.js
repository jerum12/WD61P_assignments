import React from 'react';

const Home = () => {
	return (
        <><div class="homeintro">
        <div>
            <img src={require('C:/Users/Sephina/OneDrive/Documents/GitHub/WD61P_assignments/react-mp2/src/image/les1.jpg')} class="home-img"/ >
        </div>
        <div class="hometxt">
        <p class="title">Music for Everyone</p>    
        <p>Arellano Music Studio is a Band Rehearsal Studio equipped with a basic band set-up in a sound-contained, safe & friendly space for bands to rehearse.
            We offer a safe, private and gated location with FREE PARKING for our clients.
           </p>
            <p>Arellano Music Studio also offers one-on-one Music Lessons for Drums, Guitar, Piano, and Voice for both ONLINE and FACE-TO-FACE learning. 
            </p>
            <p>We pride ourselves on having affordable rates, without having to sacrifice the quality of service or the quality of education. 
           </p>
        </div>
        <div>
            <img src={require('C:/Users/Sephina/OneDrive/Documents/GitHub/WD61P_assignments/react-mp2/src/image/les3.jpg')}  class="home-img"/ >
        </div>
    </div>
    </> 
	);
};

export default Home;
