import React from 'react'
import CustomNavbar from './Navbar'
import Footer from './Footer'
import TextField from '@mui/material/TextField';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Login(props) {
    return (
        <div>
            <CustomNavbar />
            <div style={{ backgroundColor: "#fffbf4" }}>
                <div className="container" style={{ padding: "5%" }}>
                    <h1 className="text-center">
                        Login
                    </h1>
                    <div>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6} md={5} lg={4}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Email"
                                    margin="none"
                                    defaultValue=""
                                    type='email'
                                    fullWidth
                                    size="small"
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row className="justify-content-center">
                            <Col xs={12} sm={6} md={5} lg={4}>
                                <TextField
                                    required
                                    id="outlined-required"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    margin='none'
                                    fullWidth
                                    size='small'
                                />
                            </Col>
                        </Row>
                        <p className='text-center p-2'><Link as={Link} to="/forgotpassword" className="text-center">Forgot Password?</Link></p>

                        <div className="text-center">
                            <Button variant="outlined" color="success">
                                Sign in
                            </Button>
                            <p className="text-center p-2"><Link as={Link} to="/signup" className="text-center">Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;