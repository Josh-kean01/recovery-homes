import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type RoomProps = {
    images: string[];
    title: string;
    price: number | string;
    onViewDetails?: () => void;
    showDots?: boolean;
};

const Room = ({ images, title, price, onViewDetails, showDots = true }: RoomProps) => {
    const multipleImages = images.length > 1;

    const settings = {
        dots: multipleImages && showDots,
        infinite: multipleImages,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: multipleImages,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        appendDots: (dots: React.ReactNode) => (
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <ul style={{ margin: 0, padding: 0 }}>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#fff",
                    opacity: 0.75,
                }}
            />
        ),
    };

    return (
        <div className="container p-md-5 p-3 room-card">
            <div>
                {multipleImages ? (
                    <Slider {...settings} className="m-0 w-100 h-100">
                        {images.map((src, index) => (
                            <div key={index} className="p-0 m-0 w-100 h-100">
                                <img
                                    src={src}
                                    alt={`Slide ${index}`}
                                    className="rounded-top-4 p-0 m-0"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        maxHeight: "80dvh",
                                    }}
                                />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <img
                        src={images[0]}
                        alt={title}
                        className="rounded-top-4 p-0 m-0 w-100 h-100"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            maxHeight: "80dvh",
                        }}
                    />
                )}

                <div
                    className="p-3 text-light z-3 position-relative"
                    style={{
                        backgroundColor: "#14274A",
                        marginTop: "-.5rem",
                    }}
                >
                    <h3 className="text-center mb-0" style={{ fontVariant: "small-caps" }}>
                        {title}
                    </h3>
                </div>

                <div className="p-2 px-md-5 border border-3 d-flex justify-content-between align-items-center">
                    <button className="btn outline-0 border-0 p-md-2 p-0" onClick={onViewDetails}>
                        <span className="btn btn-secondary rounded-circle py-1   me-1 me-md-2">+</span>
                        View Details
                    </button>
                    <button className="btn btn-secondary ">{price} Avg/Night</button>
                </div>
                <div className="p-2 px-md-5 border border-3 d-flex justify-content-between align-items-center">
                    <div>
                        <h6>Room Details</h6>
                        <p>
                            Two Queen beds, Smart TV, Netflix, Foam Mattress, 3 meals daily, Free Wi-Fi, Air Conditioning, and more.
                        </p>
                    </div>
                    <div>
                        <h6>{`${price}/night`}</h6>
                        <button className="btn btn-secondary ">Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Room;
