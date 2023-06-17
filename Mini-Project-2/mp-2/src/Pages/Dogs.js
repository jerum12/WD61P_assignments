import React from 'react';
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "react-multi-carousel";

function Dogs(props) {

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 8
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 6
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    const autoPlay = window.innerWidth >= 464;

    const carouselContainerStyle = {
        border: "none"
    };

    return (
        <div>
            <CustomNavbar/>
            <div style={{padding: "5%"}} className="container">
                <Carousel
                    swipeable={false}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={autoPlay}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    deviceType={null}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-10-px"
                    style={carouselContainerStyle}
                >
                    <div className="card" style={{border: "none"}}>
                        <img
                            src="https://www.petwarehouse.ph/27925-big_default/discounted-purina-supercoat-all-breed-beef-dog-dry-food.jpg"
                            alt="Dog 1"/>
                    </div>
                    <div className="card" style={{border: "none"}}>
                        <img
                            src="https://www.petwarehouse.ph/24448-big_default/pedigree-dentastix-chewy-chunks-maxi-smoky-chicken-68g-dog-treats.jpg"
                            alt="Dog 2"/>
                    </div>
                    <div className="card" style={{border: "none"}}>
                        <img
                            src="https://www.petwarehouse.ph/24154-big_default/royal-canin-size-health-nutrition-maxi-adult-5-dog-dry-food.jpg"
                            alt="Dog 3"/>
                    </div>
                    <div className="card" style={{border: "none"}}>
                        <img
                            src="https://www.petwarehouse.ph/13132-big_default/jerhigh-den-t-stix-milk-70g-dog-treats.jpg"
                            alt="Dog 4"/>
                    </div>
                    <div className="card" style={{border: "none"}}>
                        <img
                            src="https://www.petwarehouse.ph/23231-big_default/iron-aid-minerals-60ml-hematinic-syrup-for-dogs-and-cats.jpg"
                            alt="Dog 5"/>
                    </div>
                    <div className="card" style={{border: "none"}}>
                        <img
                            src="https://www.petwarehouse.ph/19717-big_default/purina-beggin-strips-bacon-cheese-170g-dog-treats.jpg"
                            alt="Dog 6"/>
                    </div>
                </Carousel>
            </div>
            <Footer/>
        </div>
    );
}

export default Dogs;