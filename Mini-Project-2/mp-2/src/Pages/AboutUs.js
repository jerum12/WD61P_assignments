import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import PetshopPH from '../images/petshopph.jpg';

function AboutUs() {
    const currentDate = new Date().toLocaleString('en-PH', { timeZone: 'Asia/Manila' });

    // Extract the current day of the week and hour
    const currentDayOfWeek = new Date(currentDate).getDay();
    const currentHour = new Date(currentDate).getHours();

    const openingHours = [
        { dayOfWeek: 0, openingHour: 11, closingHour: 21 }, // Sunday
        { dayOfWeek: 1, openingHour: 11, closingHour: 21 }, // Monday
        { dayOfWeek: 2, openingHour: 11, closingHour: 21 }, // Tuesday
        { dayOfWeek: 3, openingHour: 11, closingHour: 21 }, // Wednesday
        { dayOfWeek: 4, openingHour: 11, closingHour: 21 }, // Thursday
        { dayOfWeek: 5, openingHour: 11, closingHour: 21 }, // Friday
        { dayOfWeek: 6, openingHour: 11, closingHour: 21 }, // Saturday
    ];

    // Find the opening hours for the current day of the week
    const currentOpeningHours = openingHours.find(
        (hours) => hours.dayOfWeek === currentDayOfWeek
    );

    // Determine if the store is currently open
    const isStoreOpen =
        currentOpeningHours &&
        currentHour >= currentOpeningHours.openingHour &&
        currentHour < currentOpeningHours.closingHour;

    return (
        <div>
            <CustomNavbar />
            <div className="container text-start" style={{ padding: "5% 0" }}>
                <div>
                    <b>About Us:</b>
                </div>
                <br />
                <div style={{ padding: "0 3%" }}>
                    <div>
                        <p>Started by pet lovers, for pet lovers!</p>
                    </div>
                    <div>
                        <p>
                            Pet Shop PH is all about convenience, we’re here to deliver the best possible service and
                            convenience to all the pet parents out there through:
                        </p>
                        <ul style={{ listStyleType: 'square' }}>
                            <li>Huge payment options: COD, Paypal, Credit Cards and more</li>
                            <li>Fast and Free delivery: Right to your door!</li>
                            <li>24/7 shopping: No need to rush out of work</li>
                            <li>Easy returns: Send us an email, and we’ll be happy to help you</li>
                            <li>Wide variety: As we grow, we become your one stop shop.</li>
                        </ul>
                        <p>From our physical store to our online e-store (<a style={{
                            textDecoration: "none",
                            color: "#0e4d92",
                            fontSize: "13px"
                        }} href="mailto:petwarehouseph@gmail.com"> petwarehouseph@gmail.com</a>), we take pride in the
                            exclusive
                            collections that top-tier pet products bring to the market and the incomparable customer
                            service we provide to our clients every day. Shopping for all your pet care needs made easy
                            with just a few clicks!</p>
                        <p>Free shipping all over Metro Manila right now!</p>
                        <p>Love,</p>
                        <p>Pet Shop PH Team</p>
                    </div>
                </div>
                <div>
                    <div>
                        <CardGroup style={{ paddingTop: "4%" }}>
                            <Card style={{ borderRadius: "0" }} className="border-0 bg-transparent">
                                <Card.Img variant="top" src={PetshopPH} fluid={"true"}
                                    style={{ borderTopLeftRadius: "0", borderTopRightRadius: "0" }} />
                            </Card>
                            <Card style={{ borderRadius: '0' }} className="border-0 bg-transparent">
                                <Card.Body>
                                    <h3 className="text-center">Visit Our Super Store</h3>
                                    <Card.Text style={{ padding: '2% 5%' }}>
                                        1686 Nicolas Zamora St
                                        <br />
                                        Tondo Manila, City
                                        <br />
                                        Open Everyday: 11:00AM - 9:00PM
                                        <br />
                                        <span style={{ color: isStoreOpen ? 'green' : 'red' }}>
                                            {isStoreOpen ? 'Open' : 'Closed'}
                                        </span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardGroup>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutUs;
