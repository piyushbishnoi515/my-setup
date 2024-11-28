import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import deere from "../assets/images/istockphoto-1167553151-1024x1024.jpg"


export default function SimpleSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>

            <div>
                <h3><img src={deere} alt="" /></h3>
            </div>
            <div>
                <h3>Bishnoi</h3>
            </div>
            <div>
                <h3><img src={deere} alt="" /></h3>
            </div>
            <div>
                <h3>Bishnoi</h3>
            </div>
            <div>
                <h3><img src={deere} alt="" /></h3>
            </div>
            <div>
                <h3>Bishnoi</h3>
            </div>
        </Slider >
    );
}