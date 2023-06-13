import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function Merchants(props) {
    return (
        <div>
            <CustomNavbar/>
            <div className="container text-start" style={{padding: "5%"}}>
                <div>
                    <b>Merchants</b>
                </div>
                <br/>
                <div>
                    <p>
                        At Pet Shop PH, we are dedicated to providing pet owners with a wide range of
                        high-quality products and services for their beloved companions. As a merchant, we strive to
                        create a seamless and enjoyable shopping experience for both you and your pets.
                    </p>
                    <p>
                        We offer an extensive selection of pet supplies, including nutritious food, comfortable bedding,
                        stylish accessories, and interactive toys. Our team of knowledgeable staff members is always
                        ready to assist you in finding the perfect products that cater to your pets' specific needs.
                    </p>
                    <p>
                        At Pet Shop PH, we prioritize the health and well-being of every pet. That's why we
                        partner with reputable suppliers who share our commitment to quality and safety. You can trust
                        that the products you find at our store meet the highest standards and are suitable for your
                        pets' overall wellness.
                    </p>
                    <p>
                        We value your satisfaction as a customer and aim to exceed your expectations with our
                        exceptional service. If you have any questions, concerns, or special requests, our friendly team
                        is here to assist you. We believe in building long-lasting relationships with our customers, and
                        we look forward to being your trusted pet supply provider.
                    </p>
                    <p>
                        Thank you for choosing Pet Shop PH. We appreciate your support and the opportunity to
                        serve you and your furry companions.
                    </p>
                    <p>
                        Sell on Pet Warehouse, and let us do all the heavy lifting. It is so easy, send us an email at
                        <a style={{
                            textDecoration: "none",
                            color: "#0e4d92",
                            fontSize: "13px"
                        }} href="mailto:petwarehouseph@gmail.com"> petwarehouseph@gmail.com</a> so we can start!
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Merchants;