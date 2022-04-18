import React from "react";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const About = () => {
    return (
        <div>
            <Header></Header>
            <h2>This is about page</h2>
            <div class="personal_details_wrapper section_padd v2">
                <div class="container">
                    <form action="#" class="position-relative">
                        <h2 class="text-center title">Enquiry form</h2>
                        <div class="note">
                            <em>
                                <span class="required">*</span> Required
                            </em>
                        </div>
                        <div class="form_box">
                            <div class="row justify-content-center">
                                <div class="col-md-6 mt_15">
                                    <label for="name" class="label_text">
                                        Full Name
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        class="input_box"
                                    />
                                </div>
                                <div class="col-md-6 mt_15">
                                    <label for="company" class="label_text">
                                        company
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        class="input_box"
                                    />
                                </div>
                                <div class="col-md-6 mt_15">
                                    <label for="email" class="label_text">
                                        Email
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        class="input_box"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <div class="d-flex">
                                        <div class="mt_15 mr_15">
                                            <label
                                                for="country"
                                                class="label_text"
                                            >
                                                Code
                                                <span class="required">*</span>
                                            </label>
                                            <div class="select_wrapper">
                                                <select
                                                    class="input_box"
                                                    id="country"
                                                >
                                                    <option
                                                        value="India"
                                                        id="+91"
                                                        selected=""
                                                    >
                                                        India
                                                    </option>
                                                    <option
                                                        value="Bangladesh"
                                                        id="+880"
                                                    >
                                                        Bangladesh
                                                    </option>
                                                    <option
                                                        value="Pakistan"
                                                        id="+12"
                                                    >
                                                        Pakistan
                                                    </option>
                                                </select>
                                                <span id="countryCode">
                                                    +91
                                                </span>
                                            </div>
                                        </div>
                                        <div class="mt_15 w-100">
                                            <label for="phn" class="label_text">
                                                Mobile number
                                                <span class="required">*</span>
                                            </label>
                                            <input
                                                type="text"
                                                id="phn"
                                                class="input_box"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6 mt_15">
                                    <label for="job" class="label_text">
                                        Job title / Designation
                                        <span class="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="job"
                                        class="input_box"
                                    />
                                </div>
                                <div class="col-md-6 mt_15">
                                    <label for="enquiry" class="label_text">
                                        type of enquiry
                                        <span class="required">*</span>
                                    </label>
                                    <select
                                        id="enquiry"
                                        class="input_box select_box"
                                    >
                                        <option>Select one</option>
                                        <option>Item 1</option>
                                        <option>Item 2</option>
                                        <option>Item 3</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mt_15">
                                    <label for="msg" class="label_text">
                                        Message
                                        <span class="required">*</span>
                                    </label>
                                    <textarea
                                        id="msg"
                                        class="input_box"
                                    ></textarea>
                                </div>
                                <div class="col-xl-9 mt_50">
                                    <button
                                        type="submit"
                                        class="button black_btn w-100"
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
