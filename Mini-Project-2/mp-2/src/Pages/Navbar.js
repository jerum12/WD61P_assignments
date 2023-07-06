import React from 'react';
import petshopPic from '../images/petshop.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));

const BlackShoppingCartIcon = styled(ShoppingCartIcon)({
    color: 'black'
});


function CustomNavbar() {

    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                variant="light"
                id="navbar-container"
                style={{ backgroundColor: "#fffbf4" }}
            >
                <Container>
                    <Navbar.Brand as={Link} to="/" id="petshopPic">
                        <img
                            src={petshopPic}
                            alt="Petshop Logo"
                            className="logo-image"
                            style={{ maxHeight: "50px", width: "auto" }}
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto text-center">
                            <Nav.Link as={Link} to="/cats" style={{ margin: "3%", fontWeight: "bold" }}>
                                Cats
                            </Nav.Link>
                            <Nav.Link as={Link} to="/dogs" style={{ margin: "3%", fontWeight: "bold" }}>
                                Dogs
                            </Nav.Link>
                            <Nav.Link as={Link} to="/fishes" style={{ margin: "3%", fontWeight: "bold" }}>
                                Fishes
                            </Nav.Link>
                            <Nav.Link as={Link} to="/petsupplies" style={{ margin: "3%", fontWeight: "bold" }}>
                                Supplies
                            </Nav.Link>
                            <Nav.Link as={Link} to="/aboutus" style={{ margin: "3%", fontWeight: "bold" }}>
                                About
                            </Nav.Link>
                            <Nav.Link as={Link} to="/contactus" style={{ margin: "3%", fontWeight: "bold" }}>
                                Contact
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <div className="d-flex align-items-center">
                                <Link
                                    to="/shoppingcart"
                                    className="me-2"
                                    style={{ paddingRight: "7%", fontSize: "23px" }}
                                >
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={0} color="success" showZero>
                                            <BlackShoppingCartIcon />
                                            <ShoppingCartIcon />
                                        </StyledBadge>
                                    </IconButton>
                                </Link>
                                <Link as={Link} to="/login" >
                                    <FontAwesomeIcon
                                        icon={faUser}
                                        style={{ color: "#000", fontSize: "23px" }}
                                    />
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
