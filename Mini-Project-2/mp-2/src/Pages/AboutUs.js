import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function AboutUs() {
    return (
        <div>
            <CustomNavbar/>

            <div className="container text-start" style={{paddingTop: "5%", paddingBottom: "5%"}}>
                <div>
                    <b>About Us:</b>
                </div>
                <br/>
                <div>
                    <p>Started by pet lovers, for pet lovers!</p>
                </div>
                <br/>
                <div>
                    <p>
                        Pet Shop PH is all about convenience, we’re here to deliver the best possible service and
                        convenience to all the pet parents out there through:
                    </p>
                    <ul style={{listStyleType: 'square'}}>
                        <li>Huge payment options: COD, Paypal, Credit Cards and more</li>
                        <li>Fast and Free delivery: Right to your door!</li>
                        <li>24/7 shopping: No need to rush out of work</li>
                        <li>Easy returns: Send us an email, and we’ll be happy to help you</li>
                        <li>Wide variety: As we grow, we become your one stop shop.</li>
                    </ul>
                    <p>Shop from your mobile, or desktop, and be at ease with Pet Warehouse!</p>
                    <p>Free shipping all over Metro Manila right now!</p>
                    <p>Love,</p>
                    <p>Pet Shop PH Team</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default AboutUs;
