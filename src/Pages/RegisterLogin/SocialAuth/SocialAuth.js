import React from 'react';
import auth from "../../../firebase.init";
import {
    useSignInWithGithub,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import "./SocialAuth.css"
import { useLocation, useNavigate } from "react-router-dom";



const SocialAuth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, gitLoading, gitError] =
        useSignInWithGithub(auth);
    let errorElement;
    let loadingElement;

    if (googleLoading || gitLoading) {
        loadingElement = (
            <div>
                <p className="text-info">Loading...</p>
            </div>
        );
    }
    if (googleError || gitError) {
        errorElement = (
            <div>
                <p className="text-danger">
                    Error: {googleError?.message}
                    {gitError?.message}
                </p>
            </div>
        );
    }
    if (user || user1) {
        navigate(from, { replace: true });
        console.log("Hhiwhduiw");
    }
    return (
        <div>
            <div className="or-container">
                <div className="line-separator"></div>
                <div className="or-label">or</div>
                <div className="line-separator"></div>
            </div>
            {loadingElement}
            {errorElement}
            <div className="row">
                <div className="col-md-12">
                    <button
                        onClick={() => signInWithGoogle()}
                        className="d-block mx-auto my-2 loginBtn loginBtn-google"
                    >
                        Continue with Google
                    </button>
                    <button
                        onClick={() => signInWithGithub()}
                        className="d-block mx-auto my-2 loginBtn loginBtn-git"
                    >
                        Continue with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialAuth;