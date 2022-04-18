import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../logo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    };
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
            <Container>
                <Navbar.Brand to="/">
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
                        <CustomLink className="nav-link" to="/">
                            Home
                        </CustomLink>
                        <CustomLink className="nav-link" to="/temp">
                            temp
                        </CustomLink>
                        <CustomLink className="nav-link" to="/blog">
                            Blog
                        </CustomLink>
                        <CustomLink className="nav-link" to="/about">
                            About
                        </CustomLink>
                    </Nav>
                    <Nav className="ms-auto">
                        {user ? (
                            <CustomLink
                                className="nav-link"
                                onClick={handleLogOut}
                            >
                                Logout
                            </CustomLink>
                        ) : (
                            <CustomLink className="nav-link" to="/login">
                                Login
                            </CustomLink>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
