import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleLogo from "../../../images/google.svg";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";
import "../../../styles/Login.css";

const ResetPass = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, googleError] = useSignInWithGoogle(auth);

    const handleEmailChange = (event) => {
        const emailRegex = /\S+@\S+\.\S+/;
        const validEmail = emailRegex.test(event.target.value);

        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value })
            setErrors({ ...errors, email: "" })
        } else {
            setErrors({ ...errors, email: "Invalid email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    const handlePasswordReset = () => {
        sendPasswordResetEmail(auth, userInfo.email)
            .then(() => {
                console.log("Reset Email Sent");
                toast(`Password Reset link sent to ${userInfo.email}`);
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmail(userInfo.email)
    }

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from);
        }
    }, [user]);

    useEffect(() => {
        const error = hookError || googleError || user;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;
                    case "auth/user-not-found":
                    toast("User not found");
                    // default:
                    //     toast("Invalid email or user not found");
            }
        }
    }, [hookError, googleError])

    return (
        <div className="login-container">
            <div className="login-title">Forget Password</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} required />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <button onClick={handlePasswordReset}>Password Reset</button>
                <ToastContainer />

                <p className="py-3">Don't have an account? <Link to="/signup" className="text-blue-600">Register Now</Link> </p>
            </form>
            <p className="py-3">Already have an account? <Link className="pointer text-blue-500" to="/login">Login</Link></p>

            <button onClick={() => signInWithGoogle()}>
                <div className="flex items-center justify-center gap-x-2" >
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </div>
            </button>
        </div>
    );
};

export default ResetPass;