import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import petshopPic from '../images/petshop.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, Button, Form} from 'react-bootstrap';
import {faFacebook, faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons';


function CustomNavbar() {

    //FOR MODAL
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    //for modal
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const iconColor = isHovered ? '#808080' : '#000';

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light" id="navbar-container"
                    style={{backgroundColor: "#fffbf4"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/" id="petshopPic">
                        <img src={petshopPic} alt="Petshop Logo" className='logo-image'
                             style={{maxHeight: "50px", width: "auto"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link as={Link} to="/cats" style={{margin: "3%", fontWeight: "bold"}}>Cats</Nav.Link>
                            <Nav.Link as={Link} to="/dogs" style={{margin: "3%", fontWeight: "bold"}}>Dogs</Nav.Link>
                            <Nav.Link as={Link} to="/fishes"
                                      style={{margin: "3%", fontWeight: "bold"}}>Fishes</Nav.Link>
                            <NavDropdown title="Pet Care" id="collasible-nav-dropdown"
                                         style={{margin: "3%", fontWeight: "bold"}}>
                                <NavDropdown.Item href="#action/3.1" style={{fontWeight: "bold"}}>Bowl and
                                    Feeders</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2" style={{fontWeight: "bold"}}>
                                    Care and Health Supplies
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3" style={{fontWeight: "bold"}}>Food and
                                    Treats</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4" style={{fontWeight: "bold"}}>Small Pet
                                    House</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.5" style={{fontWeight: "bold"}}>
                                    All Products
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="/aboutus"
                                      style={{margin: "3%", fontWeight: "bold"}}>About</Nav.Link>
                            <Nav.Link as={Link} to="/contactus"
                                      style={{margin: "3%", fontWeight: "bold"}}>Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="d-flex align-items-center">
                                <Link to="/shoppingcart" className="me-2" onMouseEnter={handleHover}
                                      style={{paddingRight: "7%"}}
                                      onMouseLeave={handleMouseLeave}>
                                    <FontAwesomeIcon icon={faShoppingCart} style={{color: iconColor}}/>
                                </Link>
                                <Link>
                                    <Button variant="outline-success"
                                            onClick={handleShow}>Login</Button>
                                    <Modal show={show} onHide={handleClose} size="md">
                                        <Modal.Header closeButton
                                                      style={{borderBottom: "none"}}>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <div><h3 className="text-center">Sign In</h3></div>
                                            <div>
                                                <Form className="container">
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Email Address</Form.Label>
                                                        <Form.Control type="email"
                                                                      placeholder="juandelacruz@email.com"/>
                                                        <Form.Text className="text-muted" style={{fontSize: "10px"}}>
                                                            We'll never share your email with anyone else.
                                                        </Form.Text>
                                                    </Form.Group>
                                                    <Form.Group controlId="formBasicPassword">
                                                        <Form.Label>Password</Form.Label>
                                                        <Form.Control type="password" placeholder="Password"/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <div className="row" style={{padding: "5% 0"}}>
                                                            <div className="col">
                                                                <Button size="md" variant="outline-success"
                                                                        style={{width: "100%"}}>
                                                                    Login
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <div>
                                                            <p className="text-center">Or Sign in with:</p>
                                                        </div>
                                                        <div className="mx-auto text-center">
                                                            <button type="button"
                                                                    className="btn btn-floating mx-1 rounded-circle btn-outline-secondary">
                                                                <FontAwesomeIcon icon={faFacebook}/>
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-floating mx-1 rounded-circle btn-outline-secondary">
                                                                <FontAwesomeIcon icon={faGoogle}/>
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-floating mx-1 rounded-circle btn-outline-secondary">
                                                                <FontAwesomeIcon icon={faTwitter}/>
                                                            </button>
                                                        </div>
                                                        <br/>
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <div className="text-center">
                                                            <span>Don't have an account? </span>
                                                            <span><Link as={Link}
                                                                        to="/signup"
                                                                        className="text-primary"
                                                                        style={{textDecoration: "none"}}>Create account</Link></span>
                                                        </div>
                                                    </Form.Group>
                                                </Form>

                                            </div>
                                        </Modal.Body>
                                        <Modal.Footer
                                            style={{borderTop: "none", padding: "5%"}}>
                                        </Modal.Footer>
                                    </Modal>
                                </Link>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default CustomNavbar;