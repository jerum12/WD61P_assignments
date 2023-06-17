import React from 'react';
import CustomNavbar from './Navbar';
import Footer from './Footer';
import CarouselSlider from "./CarouselSlider";

function Cats() {
    const images = [
        {
            src: "https://www.petwarehouse.ph/27988-big_default/purina-pro-plan-adult-urinary-15kg-cat-dry-food.jpg",
            alt: "Cat 1",
        },
        {
            src: "https://www.petwarehouse.ph/24443-big_default/sheba-tuna-chicken-bonito-70g-cat-wet-food.jpg",
            alt: "Cat 2",
        },
        {
            src: "https://www.petwarehouse.ph/24480-big_default/temptations-mix-ups-catnip-chicken-cheddar-75g-cat-treats.jpg",
            alt: "Cat 3",
        },
        {
            src: "https://www.petwarehouse.ph/2399-big_default/petag-petlac-powder-300g-milk-replacer-for-all-pets.jpg",
            alt: "Cat 4",
        },
        {
            src: "https://www.petwarehouse.ph/10992-big_default/lc-vit-plus-multivitamins-cat-and-kitten-syrup.jpg",
            alt: "Cat 5",
        },
        {
            src: "https://www.petwarehouse.ph/5117-big_default/whiskas-pocket-oceanfish-7kg-cat-dry-food.jpg",
            alt: "Cat 6",
        }
    ];

    return (
        <div>
            <CustomNavbar/>
            <div style={{padding: "5%"}} className="container">
                <CarouselSlider images={images}/>
            </div>
            <Footer/>
        </div>
    );
}

export default Cats;
