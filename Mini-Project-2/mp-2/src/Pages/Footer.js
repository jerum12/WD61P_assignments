import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div style={{ backgroundColor: "#222222", paddingTop: "5%", paddingBottom: "5%", paddingLeft: "3%", paddingRight: "3%" }}>

            <CardGroup>

                <Card className='border-0 bg-transparent'>
                    <Card.Body>
                        <Card.Text className="text-start" style={{ color: "#fff" }}>
                            <div style={{ display: "flex" }}>
                                <div style={{ paddingRight: "5px", height: "30px", width: "30px" }}>
                                    <Link><FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} size="1.5x" /></Link>
                                </div>
                                <div style={{ paddingLeft: "5px" }}>
                                    <p>Call Us at 09123456789</p>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ paddingRight: "5px", height: "30px", width: "30px" }}>
                                    <Link to="https://web.facebook.com/Ortizpetaccessories" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ color: '#ffffff' }} size="1.5x" /></Link>
                                </div>
                                <div style={{ paddingLeft: "5px" }}>
                                    <p>Like Us on Facebook</p>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ paddingRight: "5px", height: "30px", width: "30px" }}>
                                    <Link to="https://www.instagram.com/toppetpetshop/" target="_blank"><FontAwesomeIcon icon={faInstagram} style={{ color: '#ffffff' }} size="1.5x" /></Link>
                                </div>
                                <div style={{ paddingRight: "5px" }}>
                                    <p>Follow us on Instagram</p>
                                </div>
                            </div>
                            <div style={{ display: "flex" }}>
                                <div style={{ paddingRight: "5px", height: "30px", width: "30px" }}>
                                    <Link to="mailto:jbpena101@example.com"><FontAwesomeIcon icon={faEnvelope} style={{ color: '#ffffff' }} size="1.5x" /></Link>
                                </div>
                                <div style={{ paddingRight: "5px" }}>
                                    <p>Send us an email</p>
                                </div>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card >

                <Card className='border-0 bg-transparent'>
                    <Card.Body>
                        <Card.Text className="text-start" style={{ color: "#fff" }}>
                            <div>
                                <b>Start Shopping</b>
                            </div>
                            <div><Link as={Link} to="/cats" style={{ textDecoration: "none", color: "#fff" }}>Cat</Link></div>
                            <div><Link as={Link} to="/dogs" style={{ textDecoration: "none", color: "#fff" }}>Dog</Link></div>
                            <div><Link as={Link} to="/fishes" style={{ textDecoration: "none", color: "#fff" }}>Fish</Link></div>
                            <div><Link as={Link} to="/dogs" style={{ textDecoration: "none", color: "#fff" }}>Pet Care Products</Link></div>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='border-0 bg-transparent'>
                    <Card.Body>
                        <Card.Text className="text-start" style={{ color: "#fff" }}>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='border-0 bg-transparent'>
                    <Card.Body>
                        <Card.Text className="text-start" style={{ color: "#fff" }}>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>

        </div>
    )
}

export default Footer
