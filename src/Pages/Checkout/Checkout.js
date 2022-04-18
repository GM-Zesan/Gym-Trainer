import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import auth from "../../firebase.init";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Checkout.css"
const Checkout = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const { checkoutId } = useParams();
    const handleBooking = (event) => {
        event.preventDefault();
        toast.success("Thanks for booking", {
            position: "top-right",
        });
    };
    return (
        <div>
            <Header></Header>
            <div className="container">
                <form onSubmit={handleBooking}>
                    <h2 className="text-center title mt-5">Checkout Here</h2>
                    <div className="form_box">
                        <div className="row justify-content-center">
                            <div className="col-md-6 mt-3">
                                <label className="label_text">Full Name</label>
                                <input
                                    type="text"
                                    className="input_box"
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="label_text">
                                    Phone-number
                                </label>
                                <input type="number" className="input_box" />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="label_text">Email</label>
                                <input
                                    type="email"
                                    className="input_box"
                                    required
                                />
                            </div>
                            <div className="col-md-6 mt-3">
                                <label className="label_text">Service ID</label>
                                <input
                                    type="text"
                                    className="input_box"
                                    value={checkoutId}
                                    required
                                    disabled
                                />
                            </div>
                            <div className="col-md-12 mt-3">
                                <label className="label_text">
                                    Write your comment
                                </label>
                                <textarea className="input_box"></textarea>
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
                <ToastContainer />
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Checkout;