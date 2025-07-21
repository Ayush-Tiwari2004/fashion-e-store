import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProductCrousels = () => {
    var settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };
    return (
        <>
            <div className="">
                <Slider {...settings}>
                    <img className='crouserl-images' src="/src/assets/images/poster1.jpeg" alt="" />
                    <img className='crouserl-images' src="/src/assets/images/poster2.jpeg" alt="" />
                    <img className='crouserl-images' src="/src/assets/images/poster9.jpeg" alt="" />
                </Slider>
            </div>
        </>
    )
}

export default ProductCrousels
