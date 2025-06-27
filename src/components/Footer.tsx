import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='container-fluid w-100 p-0 d-flex align-items-center flex-column text-light'>
            <div className="triangle"></div>
            <div className="px-xl-5 w-100 " style={{ background: "#14274A" }}>
                <div className='w-100 p-4 p-lg-5' >
                    <div className="row px-xl-5">
                        <div className="col">
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="col">
                            <p>About Us</p>
                            <p>Contact</p>
                            <p>Terms & Conditions</p>
                        </div>
                        <div className="col">
                            <p className='.align-icon-text'><BsFacebook /> Facebook</p>
                            <p className='.align-icon-text'><BsTwitter /> Twitter</p>
                            <p className='.align-icon-text'><BsInstagram /> Instagram</p>
                        </div>
                        <div className="col">
                            <p>Subscribe to our Newsletter</p>
                            <div className='d-flex align-items-center border border-warning border-4'>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="form-control rounded-0"
                                />
                                <button className='btn btn-warning rounded-0'> OK </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer