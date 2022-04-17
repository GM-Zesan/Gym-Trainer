import React from "react";
import { Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import "./Login.css";
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    let errorElement;
    let loadingElement;
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);
    
    
    if (user) {
        navigate(from, { replace: true });
    }


    if (loading) {
        loadingElement = (
            <div>
                <p className="text-info">Loading...</p>
            </div>
        );
    }

    
    if (error) {
        errorElement = (
            <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        );
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    };
    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <div className="col-md-12 col-lg-10"></div>
                    <div className="wrap d-md-flex">
                        <div className="img">
                            <img
                                src="https://preview.colorlib.com/theme/bootstrap/login-form-14/images/xbg-1.jpg.pagespeed.ic.3OAd9jZTMD.webp"
                                alt=""
                            />
                        </div>
                        <div className="login-wrap p-5 p-md-5">
                            <h2 className="text-center mb-5">Login Here</h2>
                            <Form onSubmit={handleLogin}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label className="label">
                                        Email address
                                    </Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        required
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                >
                                    <Form.Label className="label">
                                        Password
                                    </Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        required
                                    />
                                </Form.Group>

                                {loadingElement}
                                <div className="btn-wrap">
                                    <button
                                        className="btn w-100 btn-custom rounded px-3"
                                        type="submit"
                                    >
                                        Login
                                    </button>
                                </div>
                                <div className="forgot-password">
                                    <Link to="/">Forgot Password</Link>
                                </div>
                            </Form>
                            {errorElement}
                            <p className="text-center sign-toggle">
                                Don't Have account?
                                <Link to="/register" className="ps-2">
                                    Register
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Login;
