import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 4000,
    };

    return (
        <div className="container p-4">
            <h2 className="text-center mb-1">Testimonials</h2>
            <Slider {...settings}>
                <div className="text-center p-4">
                    <blockquote className="blockquote">
                        <p>"Calm, Serene, Retro – What a way to relax and enjoy."</p>
                        <footer className="blockquote-footer mt-2">
                            Mr. and Mrs. Baxter, <cite title="UK">UK</cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="text-center p-4">
                    <blockquote className="blockquote">
                        <p>"The best recovery experience we've ever had."</p>
                        <footer className="blockquote-footer mt-2">
                            John Doe, <cite title="USA">USA</cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="text-center p-4">
                    <blockquote className="blockquote">
                        <p>"A beautiful place to reconnect and heal."</p>
                        <footer className="blockquote-footer mt-2">
                            Aisha Bello, <cite title="Nigeria">Nigeria</cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="text-center p-4">
                    <blockquote className="blockquote">
                        <p>"A beautiful place to reconnect and heal."</p>
                        <footer className="blockquote-footer mt-2">
                            Aisha Bello, <cite title="Nigeria">Nigeria</cite>
                        </footer>
                    </blockquote>
                </div>
                <div className="text-center p-4">
                    <blockquote className="blockquote">
                        <p>"A beautiful place to reconnect and heal."</p>
                        <footer className="blockquote-footer mt-2">
                            Aisha Bello, <cite title="Nigeria">Nigeria</cite>
                        </footer>
                    </blockquote>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;
