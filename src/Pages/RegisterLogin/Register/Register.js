import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import "./Register.css";
import SocialAuth from "../SocialAuth/SocialAuth";
const Register = () => {
    const [terms, setTerms] = useState(false);
    const navigate = useNavigate();


    let loadingElement;
    let errorElement;
    const [createUserWithEmailAndPassword, user, loading, error] =
        useCreateUserWithEmailAndPassword(auth, {
            sendEmailVerification: true,
        });
    

    const [updateProfile] = useUpdateProfile(auth);

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
    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName:name });
        console.log("name update complete");
        navigate("/home");

    };
    return (
        <div>
            <Header></Header>
            <div className="container reg w-50 p-5 my-5 mx-auto">
                <h2 className="text-center mb-5">Registration</h2>
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Enter email"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check
                            onClick={() => setTerms(!terms)}
                            type="checkbox"
                            label="Accept terms and conditions"
                        />
                    </Form.Group>
                    {loadingElement}
                    <div className="btn-wrap">
                        <button
                            disabled={!terms}
                            className="btn w-100 btn-custom rounded px-3"
                            type="submit"
                        >
                            Register
                        </button>
                    </div>
                </Form>
                {errorElement}
                <p className="text-center reg-toggle">
                    Already have an account?
                    <Link to="/login" className="ps-2">
                        Login
                    </Link>
                </p>
                <SocialAuth></SocialAuth>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;
