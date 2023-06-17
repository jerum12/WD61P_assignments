import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function Career() {
    return (
        <div>
            <CustomNavbar/>
            <div className="container text-start" style={{padding: "5%"}}>
                <div>
                    <b>Careers</b>
                </div>
                <br/>
                <div>
                    <p>Join Our Passionate Team</p>
                    <p>At Pet Shop PH, we are dedicated to providing exceptional care and love to our furry friends. We
                        believe in creating a positive and nurturing environment for both pets and their owners. If you
                        share our passion for animals and want to make a difference in their lives, we invite you to
                        explore the exciting career opportunities available at our pet shop.
                    </p>
                    <p>If you are passionate about animals, customer service-oriented, and eager to be part of a team
                        that values excellence and compassion, we would love to hear from you. Explore our current job
                        openings below and start your journey towards a rewarding career with Pet Shop PH.
                    </p>
                    <p>
                        We look forward to welcoming you to Our Pet Shop family and creating a bright future together!
                    </p>
                    <p>
                        If you want to help Pet Warehouse grow, send us an email
                        at <a style={{
                        textDecoration: "none",
                        color: "#0e4d92",
                        fontSize: "13px"
                    }} href="mailto:petwarehouseph@gmail.com">petwarehouseph@gmail.com</a> with your
                        resume and what position you’re interested in!
                    </p>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Career;