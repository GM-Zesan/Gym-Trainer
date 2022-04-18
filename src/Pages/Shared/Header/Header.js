import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../logo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    };
    const navigteLogIn = () => {
        navigate("/login")
    }
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
                        <CustomLink className="nav-link" to="/blog">
                            Blog
                        </CustomLink>
                        <CustomLink className="nav-link" to="/about">
                            About
                        </CustomLink>
                    </Nav>
                    <Nav className="ms-auto">
                        {user ? (
                            <button
                                className="nav-link log-detail"
                                onClick={handleLogOut}
                            >
                                Logout
                            </button>
                        ) : (
                            <button
                                className="nav-link log-detail"
                                onClick={navigteLogIn}
                                to="/login"
                            >
                                Login
                            </button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
