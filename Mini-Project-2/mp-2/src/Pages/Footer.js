import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faPhone} from '@fortawesome/free-solid-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div
            style={{
                backgroundColor: '#222222',
                padding: "5%"
            }}
        >
            <CardGroup>
                <Card className="border-0 bg-transparent">
                    <Card.Body>
                        <div className="text-start" style={{color: '#fff'}}>
                            <div style={{display: 'flex'}}>
                                <div style={{paddingRight: '5px', height: '30px', width: '30px'}}>
                                    <Link>
                                        <FontAwesomeIcon icon={faPhone} style={{color: '#ffffff'}}/>
                                    </Link>
                                </div>
                                <div style={{paddingLeft: '5px', color: "#fff", fontSize: "13px"}}>
                                    Call Us at 09123456789
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div style={{paddingRight: '5px', height: '30px', width: '30px'}}>
                                    <Link
                                        to="https://web.facebook.com/Ortizpetaccessories"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faFacebook}
                                            style={{color: '#ffffff'}}
                                        />
                                    </Link>
                                </div>
                                <div style={{paddingLeft: '5px', color: "#fff", fontSize: "13px"}}>
                                    Like Us on Facebook
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div style={{paddingRight: '5px', height: '30px', width: '30px'}}>
                                    <Link
                                        to="https://www.instagram.com/toppetpetshop/"
                                        target="_blank"
                                    >
                                        <FontAwesomeIcon
                                            icon={faInstagram}
                                            style={{color: '#ffffff'}}
                                        />
                                    </Link>
                                </div>
                                <div style={{paddingLeft: '5px', color: "#fff", fontSize: "13px"}}>
                                    Follow us on Instagram
                                </div>
                            </div>
                            <div style={{display: 'flex'}}>
                                <div style={{paddingRight: '5px', height: '30px', width: '30px'}}>
                                    <Link to="mailto:jbpena101@example.com">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            style={{color: '#ffffff'}}
                                        />
                                    </Link>
                                </div>
                                <div style={{paddingLeft: '5px', color: "#fff", fontSize: "13px"}}>
                                    Send us an email
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="border-0 bg-transparent">
                    <Card.Body>
                        <div className="text-start">
                            <div>
                                <b style={{color: '#fff'}}>Start Shopping</b>
                            </div>
                            <div>
                                <Link as={Link} to="/cats"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Cat</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/fish"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Fish</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/dog"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Dog</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/petcare"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Pet Care
                                    Products</Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="border-0 bg-transparent">
                    <Card.Body>
                        <div className="text-start" style={{color: '#fff'}}>
                            <div>
                                <b style={{color: '#fff'}}>Support</b>
                            </div>
                            <div>
                                <Link as={Link} to="/payment"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Payment</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/returns"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Returns</Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>

                <Card className="border-0 bg-transparent">
                    <Card.Body>
                        <div className="text-start" style={{color: '#fff'}}>
                            <div>
                                <b>Pet Shop PH</b>
                            </div>
                            <div>
                                <Link as={Link} to="/aboutus"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>About
                                    Us</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/careers"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Careers</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/merchants"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Merchants</Link>
                            </div>
                            <div>
                                <Link as={Link} to="/contactus"
                                      style={{textDecoration: "none", color: "#fff", fontSize: "13px"}}>Contact
                                    Us</Link>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
}

export default Footer;
