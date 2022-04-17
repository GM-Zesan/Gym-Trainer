import React from "react";
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import banner from "../../../images/banner/b1.jpg";
import logo from "../../../logo.png";
import "./Header.css";
const Header = () => {
    return (
        <div className="header-outs">
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="170"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="/blog">Blog</Nav.Link>
                        </Nav>
                        <Nav className="ms-auto">
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* herosection banner*/}
            <div className="hero-container">
                <div className="heading">
                    <h2 className="hero title">The Best Fitness</h2>
                    <p>Grow your strength</p>
                    <div className="mt-3 read-more">
                        <a href="/">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
