import React from 'react';
import CustomNavbar from './Navbar';
import pic1 from '../images/banner.jpeg';
import catpic from '../images/cat-pic.png';
import dogpic from '../images/dog-pic.png';
import fishpic from '../images/fish-pic.png';
import pawpic from '../images/paw-pic.png';
import Image from 'react-bootstrap/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faFishFins, faDog, faPaw } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Footer from './Footer';


function Home() {
    const [isCatHovered, setIsCatHovered] = useState(false);
    const [isFishHovered, setIsFishHovered] = useState(false);
    const [isDogHovered, setIsDogHovered] = useState(false);
    const [isPetCareHovered, setIsPetCareHovered] = useState(false);

    const handleCatHover = () => {
        setIsCatHovered(true);
    };

    const handleCatLeave = () => {
        setIsCatHovered(false);
    };

    const handleFishHover = () => {
        setIsFishHovered(true);
    };

    const handleFishLeave = () => {
        setIsFishHovered(false);
    };

    const handleDogHover = () => {
        setIsDogHovered(true);
    };

    const handleDogLeave = () => {
        setIsDogHovered(false);
    };

    const handlePetCareHover = () => {
        setIsPetCareHovered(true);
    };

    const handlePetCareLeave = () => {
        setIsPetCareHovered(false);
    };

    return (
        <div>
            <div>
                <CustomNavbar />
                <div style={{ padding: "5%" }}>
                    <Image src={pic1} fluid id="adpic" className="img-fluid cover-image" />
                </div>
                <div style={{ backgroundColor: "#fffbf4", }}>
                    <div className="container" style={{ padding: "4%" }}>
                        <h3 className='text-center' style={{ paddingBottom: "2%" }}>Our Pet Categories</h3>

                        <CardGroup>

                            <Card className="border-0 bg-transparent" style={{ margin: "1%" }}>
                                <Link as={Link} to='/cats'><Card.Img variant="top" src={catpic} fluid="true" style={{ objectFit: "cover" }} onMouseEnter={handleCatHover}
                                    onMouseLeave={handleCatLeave} /></Link>
                                <Card.Body>
                                    <br />
                                    <Link as={Link} to="/cats" style={{ textDecoration: "none" }}>
                                        <Card.Title
                                            style={{
                                                textDecoration: isCatHovered ? 'underline' : 'none',
                                                color: "#000",
                                                cursor: "pointer"
                                            }}
                                            onMouseEnter={handleCatHover}
                                            onMouseLeave={handleCatLeave}
                                        >
                                            Cats
                                        </Card.Title>
                                    </Link>
                                </Card.Body>
                            </Card>

                            <Card className="border-0 bg-transparent" style={{ margin: "1%" }}>
                                <Link as={Link} to='/fishes'><Card.Img variant="top" src={fishpic} fluid="true" style={{ objectFit: "cover" }} onMouseEnter={handleFishHover}
                                    onMouseLeave={handleFishLeave} /></Link>
                                <Card.Body>
                                    <br />
                                    <Link as={Link} to="/fishes" style={{ textDecoration: "none" }}><Card.Title style={{ textDecoration: isFishHovered ? 'underline' : 'none', color: "#000", cursor: "pointer" }} onMouseEnter={handleFishHover}
                                        onMouseLeave={handleFishLeave}>Fishes</Card.Title></Link>
                                </Card.Body>
                            </Card>

                            <Card className="border-0 bg-transparent" style={{ margin: "1%" }}>
                                <Link as={Link} to='/dogs'><Card.Img variant="top" src={dogpic} fluid="true" style={{ objectFit: "cover" }} onMouseEnter={handleDogHover}
                                    onMouseLeave={handleDogLeave} /></Link>
                                <Card.Body>
                                    <br></br>
                                    <Link as={Link} to="/dogs" style={{ textDecoration: "none" }}><Card.Title style={{ textDecoration: isDogHovered ? 'underline' : 'none', color: "#000", cursor: "pointer" }} onMouseEnter={handleDogHover}
                                        onMouseLeave={handleDogLeave}>Dogs</Card.Title></Link>
                                </Card.Body>
                            </Card>

                            <Card className="border-0 bg-transparent" style={{ margin: "1%" }}>
                                <Card.Img variant="top" src={pawpic} fluid="true" style={{ objectFit: "cover" }} onMouseEnter={handlePetCareHover}
                                    onMouseLeave={handlePetCareLeave} />
                                <Card.Body>
                                    <br></br>
                                    <Link as={Link} to='/dogs' style={{ textDecoration: "none" }}><Card.Title style={{ textDecoration: isPetCareHovered ? 'underline' : 'none', color: "#000", cursor: "pointer" }} onMouseEnter={handlePetCareHover}
                                        onMouseLeave={handlePetCareLeave}>Pet Care</Card.Title></Link>
                                </Card.Body>
                            </Card>

                        </CardGroup>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home;
