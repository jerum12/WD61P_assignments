import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import CarouselSlider from "./CarouselSlider";

function Fishes(props) {

    const images = [
        {
            src: "https://www.petwarehouse.ph/19181-thickbox_default/marine-lab-5kg-saltwater-mix.jpg",
            alt: "Cat 1",
        },
        {
            src: "https://www.petwarehouse.ph/17391-thickbox_default/nutrilogic-sinking-disc-wafers-250g-fish-food.jpg",
            alt: "Cat 2",
        },
        {
            src: "https://www.petwarehouse.ph/17388-thickbox_default/nutrilogic-vitamin-sea-dried-seaweed-strips-10g-fish-food.jpg",
            alt: "Cat 3",
        },
        {
            src: "https://www.petwarehouse.ph/19998-big_default/nutrilogic-shrimp-fiesta-650g-fish-food.jpg",
            alt: "Cat 4",
        },
        {
            src: "https://www.petwarehouse.ph/19996-big_default/nutrilogic-grand-champion-4kg-fish-food.jpg",
            alt: "Cat 5",
        },
        {
            src: "https://www.petwarehouse.ph/19991-big_default/nutrilogic-tropical-floating-pellets-250g-fish-food.jpg",
            alt: "Cat 6",
        }
    ];

    return (
        <div>
            <CustomNavbar/>
            <div className="container" style={{padding: "5%"}}>
                <CarouselSlider images={images}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Fishes;