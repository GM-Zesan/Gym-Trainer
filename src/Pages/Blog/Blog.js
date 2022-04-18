import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import "./Blog.css"
const Blog = () => {
    return (
        <div>
            <Header></Header>
            <div className="container">
                <h2 className="text-center my-5">My Blogs</h2>
                <Accordion style={{ height: "400px" }} className="w-50 mx-auto">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Difference between authorization and authentication
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Why are you using firebase? What other options do
                            you have to implement authentication?
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            What other services does firebase provide other than
                            authentication
                        </Accordion.Header>
                        <Accordion.Body>
                            Other services does firebase provide other than
                            authentication are given bellow: 1. Cloud Firestore
                            2. Cloud Functions 3. Google Analytics 4.Hosting
                            5.Cloud Storage 6.Predictions 7. Remote Config
                            8.Dynamic Links 9.Cloud Messaging
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;