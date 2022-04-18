import React from 'react';
import { Link } from 'react-router-dom';
import Facebook from "../../../images/social-icon/facebook.png";
import Git from "../../../images/social-icon/github.png";
import Google from "../../../images/social-icon/google.png";
import "./Footer.css"
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="mt-5">
            <div className="footer_top">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4">
                            <div className="widget_box social_icons">
                                <h6>Let's Connect</h6>
                                <Link to="/">
                                    <img src={Facebook} alt="" />
                                </Link>
                                <Link to="/" className="pl-3">
                                    <img src={Git} alt="" />
                                </Link>
                                <Link to="/" className="pl-3">
                                    <img src={Google} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget_box">
                                <h6>Provide</h6>
                                <ul>
                                    <li>
                                        <span>Quality Equipment</span>
                                    </li>
                                    <li>
                                        <span>Always Punctual</span>
                                    </li>
                                    <li>
                                        <span>Product Service</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="widget_box">
                                <h6>Services</h6>
                                <ul>
                                    <li>
                                        <span>Yoga</span>
                                    </li>
                                    <li>
                                        <span>Weight-loss</span>
                                    </li>
                                    <li>
                                        <span>Bodu-building</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2">
                            <div className="widget_box">
                                <h6>ReadMe</h6>
                                <ul>
                                    <li>
                                        <span>About Us</span>
                                    </li>
                                    <li>
                                        <span>My Blogs</span>
                                    </li>
                                    <li>
                                        <span>Contact Us</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-12 copyright">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <p className="text-white mt-5">
                                        Copyright &copy; {year}
                                        <br className="d-none d-lg-block" /> All
                                        rights reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <p className="text-white">
                                <Link to="/">Privacy Policy</Link> and{" "}
                                <Link to="/"> Terms of Service</Link> apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;