import { sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import GoogleLogo from "../../../images/google.svg";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../firebase.init";
import "../../../styles/Login.css";


const Login = () => {
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        email: "",
        password: "",
        general: "",
    })

    const [signInWithEmail, user, loading, hookError] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, googleUser, loading2, googleError] = useSignInWithGoogle(auth);

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
    const handlePasswordChange = (event) => {
        const passwordRegex = /.{6,}/;
        const validPassword = passwordRegex.test(event.target.value);

        if (validPassword) {
            setUserInfo({ ...userInfo, password: event.target.value });
            setErrors({ ...errors, password: "" });
        } else {
            setErrors({ ...errors, password: "Minimum 6 characters!" });
            setUserInfo({ ...userInfo, password: "" })
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
        signInWithEmail(userInfo.email, userInfo.password);
        toast(`Login Successfully as ${userInfo.email.slice(0, 10)}`);

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
        const error = hookError || googleError;
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("Invalid email provided, please provide a valid email");
                    break;

                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!")
                    break;
                default:
                    toast("Wrong password or Email")
            }
        }
    }, [hookError, googleError])

    return (
        <div className="login-container">
            <div className="login-title">Login</div>
            <form className="login-form" onSubmit={handleLogin}>
                <input type="text" placeholder="Your Email" onChange={handleEmailChange} required />
                {errors?.email && <p className="error-message">{errors.email}</p>}
                <input type="password" placeholder="password" onChange={handlePasswordChange} />
                {errors?.password && <p className="error-message">{errors.password}</p>}
                <button>Login</button>
                <ToastContainer />

                <p className="py-3">Don't have an account? <Link to="/signup" className="text-blue-600">Register Now</Link> </p>
            </form>

            <button onClick={handlePasswordReset}>Forget Password?</button>

            <button onClick={() => signInWithGoogle()}>
                <div className="flex items-center justify-center gap-x-2" >
                    <img src={GoogleLogo} alt='' />
                    <p> Continue with Google </p>
                </div>
            </button>
        </div>
    );
};

export default Login;