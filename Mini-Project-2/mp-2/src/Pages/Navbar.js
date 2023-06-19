import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import petshopPic from '../images/petshop.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {useState} from "react";


function CustomNavbar() {

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
            <Navbar collapseOnSelect expand="lg" bg={{backgroundColor: '#fbf4e2'}} variant="light" id="navbar-container"
                    style={{backgroundColor: "#fffbf4"}}>
                <Container>
                    <Navbar.Brand as={Link} to="/" id="petshopPic">
                        <img src={petshopPic} alt="Petshop Logo" className='logo-image'
                             style={{maxHeight: "50px", width: "auto"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
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
                                      onMouseLeave={handleMouseLeave}>
                                    <FontAwesomeIcon icon={faShoppingCart} style={{color: iconColor}}/>
                                </Link>
                                <Link to="/login">
                                    <Button variant="outline-success">Login</Button>
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