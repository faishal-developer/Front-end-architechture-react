import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



const CustomCarousel = (props) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: props.responsive.sl
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: props.responsive.l
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: props.responsive.t
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: props.responsive.m
        }
    };

    
    return (
        <div className='carousel_container'>
            <Carousel responsive={responsive} arrows={true} >
                {props.children}
            </Carousel>
        </div>
    );
};

export default CustomCarousel;