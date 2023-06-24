import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Login(props) {
    return (
        <div
            className="container"
            style={{padding: "5%"}}>
            <Card className="text-center mx-auto" style={{maxWidth: "500px"}}>
                <Card.Body>
                    <Card.Title style={{padding: "5%"}}><h3>Sign In</h3></Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="primary">LOGIN</Button>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Login;