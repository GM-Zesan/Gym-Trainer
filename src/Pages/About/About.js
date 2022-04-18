import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./About.css";
const About = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is about page</h2>
            <div className="personal_details_wrapper section_padd v2">
                <div className="container">
                    <form action="#" className="position-relative">
                        <h2 className="text-center title">Enquiry form</h2>
                        <div className="form_box">
                            <div className="row justify-content-center">
                                <div className="col-md-6 mt-3">
                                    <label for="name" className="label_text">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="input_box"
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label for="company" className="label_text">
                                        company
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        className="input_box"
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label for="email" className="label_text">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="input_box"
                                    />
                                </div>
                                <div className="col-md-6 mt-3">
                                    <label for="job" className="label_text">
                                        Job title / Designation
                                        <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="job"
                                        className="input_box"
                                    />
                                </div>
                                <div className="col-md-12 mt-3">
                                    <label for="msg" className="label_text">
                                        Write your comment
                                    </label>
                                    <textarea
                                        id="msg"
                                        className="input_box"
                                    ></textarea>
                                </div>
                                <div className="col-xl-9 mt-5">
                                    <button
                                        type="submit"
                                        className="button black_btn w-100"
                                    >
                                        submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
