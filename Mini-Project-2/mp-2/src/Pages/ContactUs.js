import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function ContactUs() {

    return (
        <div>

            <CustomNavbar />

            <div className="container text-start" style={{ paddingTop: "5%", paddingBottom: "5%" }}>
                <div>
                    <b>Contact Us</b>
                </div>

                <br />
                <div>
                    <p>We'd love to here from you!</p>
                    <p><a style={{
                        textDecoration: "none",
                        color: "#0e4d92",
                        fontSize: "13px"
                    }} href="mailto:petwarehouseph@gmail.com"> petwarehouseph@gmail.com</a>
                    </p>
                    <p><a style={{
                        textDecoration: "none",
                        color: "#0e4d92",
                        fontSize: "13px"
                    }} href="mailto:petwarehouseph@gmail.com"> petshopph@gmail.com</a>
                    </p>
                    <p>
                        (0912) 345-6789
                    </p>
                    <p>
                        (02) 7989-8166
                    </p>
                </div>
            </div>

            <Footer />

        </div>

    )
}

export default ContactUs
