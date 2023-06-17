import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselSlider = ({images}) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 7,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 5,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const autoPlay = window.innerWidth >= 464;

    const carouselContainerStyle = {
        border: "none"
    };

    return (
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
        >
            {images.map((image, index) => (
                <div className="card" style={{border: "none"}} key={index}>
                    <img src={image.src} alt={image.alt}/>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselSlider;
