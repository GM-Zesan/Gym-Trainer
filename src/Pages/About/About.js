import React from "react";
import AboutImg from "../../images/ab1.png"
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./About.css";
const About = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h2 className="text-center my-5">About Myself</h2>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Eligendi iure dolores ipsum asperiores
                            molestias cum ut nam delectus suscipit, a culpa
                            sequi tempore officia repellat. Itaque aliquam odit
                            animi cum.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="w-50 mx-auto">
                            <img className="w-100" src={AboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
