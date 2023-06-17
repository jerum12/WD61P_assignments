import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

function PetCare(props) {
    return (
        <div>
            <div>
                <CustomNavbar/>
                <div className="container" style={{padding: "5% 0"}}></div>
                <Footer/>
            </div>
        </div>
    );
}

export default PetCare;