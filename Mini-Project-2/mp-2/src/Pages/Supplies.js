import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import CarouselSlider from "./CarouselSlider";

function Supplies() {
    const images = [
        {
            src: "https://www.petwarehouse.ph/15810-big_default/zeerun-running-belt.jpg",
            alt: "Supply 1",
        },
        {
            src: "https://www.petwarehouse.ph/14944-big_default/ruff-trading-co-abacama-dalampasigan-pet-bed.jpg",
            alt: "Supply 2",
        },
        {
            src: "https://www.petwarehouse.ph/23530-big_default/ibiyaya-collapsible-floral-gray-shoulder-pet-carrier.jpg",
            alt: "Supply 3",
        },
        {
            src: "https://www.petwarehouse.ph/28400-big_default/zeedog-no-pull-softer-walk-avocado-dog-harness.jpg",
            alt: "Supply 4",
        },
        {
            src: "https://www.petwarehouse.ph/27262-big_default/limited-edition-zeedog-jacquard-collection-adjustable-air-mesh-gibson-dog-harness.jpg",
            alt: "Supply 5",
        },
        {
            src: "https://www.petwarehouse.ph/2756-big_default/michiko-pet-whisker-comb.jpg",
            alt: "Supply 6",
        }
    ];

    return (
        <div>
            <CustomNavbar />
            <div style={{ padding: "5%" }} className="container">
                <CarouselSlider images={images} />
            </div>
            <div className="container"></div>
            <Footer />
        </div>
    );
}

export default Supplies;
