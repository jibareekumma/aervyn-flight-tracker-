


import leftArrow from "/icons/left_arrow_icon.png";
import mainLogo from "/icons/main-icon.png";
import profileIcon from "/icons/profile_icon.png";
import mailIcon from "/icons/email icon.png";
import padlockIcon from "/icons/padlock icon.png";
import googleIcon from "/icons/google-icon.png";
import githubIcon1 from "/icons/github 1.png";
import facebookIcon from "/icons/facebook-icon.png";
import dskBgImage from "/photos/login-page-bgimage.png";
import showPasswordIcon from "/icons/show_password.png";
import hidePasswordIcon from "/icons/hide_password.png";

import "../css/Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

const Register = function () {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [name, setName] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = async function () {

        setError("");

        if (!name.trim()) {
            return setError("Please enter your full name");
        }

        if (!email.trim()) {
            return setError("Please enter your email");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters");
        }

        if (password !== confirmPassword) {
            return setError("Passwords do not match");
        }

        setLoading(true);

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: name,
                },
            },
        });

        setLoading(false);

        if (error) {

            if (
                error.message
                    .toLowerCase()
                    .includes("already registered")
            ) {
                return setError(
                    "An account with this email already exists. Please log in instead."
                );
            }

            return setError(error.message);
        }

        navigate("/dashboard");
    };

    return (
        <>
            <div id="register-container-dskp">

                <div className="login-card-dskp">

                    {/* DESKTOP LEFT SIDE */}
                    <div
                        className="image-container-dskp"
                        style={{
                            backgroundImage: `url(${dskBgImage})`,
                        }}
                    >

                        <div className="dskp-overlay">

                            <img
                                src={mainLogo}
                                alt="Company Logo"
                                loading="lazy"
                                className="dskp-logo"
                            />

                            <div className="dskp-welcome-text">
                                <h4>
                                    Start your <span className="highlight-text">
                                        journey
                                    </span>
                                </h4>

                                <p>
                                    Your next adventure begins here
                                </p>
                            </div>

                            <div className="dskp-badge">

                                <span className="badge-icon">
                                    🛡
                                </span>

                                <div className="badge-text">
                                    <p>Your journey awaits.</p>
                                    <p>Let's get you in the air.</p>
                                </div>

                            </div>

                        </div>

                    </div>


                    {/* REGISTER FORM */}
                    <div
                        className="entry-page"
                        id="register-container"
                    >

                        <div className="language-selector">
                            <span className="lang-globe">🌐</span>
                            <span>English</span>
                            <span className="lang-caret">⌄</span>
                        </div>


                        {/* MOBILE HEADER */}
                        <div className="register-header">

                            <div>

                                <button
                                    onClick={() => navigate("/")}
                                >
                                    <img
                                        src={leftArrow}
                                        alt="Left Arrow"
                                        title="Go back to Intro page"
                                        loading="lazy"
                                    />
                                </button>

                                <img
                                    src={mainLogo}
                                    alt="Company Logo"
                                    loading="lazy"
                                    className="company-logo"
                                />

                            </div>

                        </div>


                        <div id="register-main">

                            <div className="header-main">

                                {/* MOBILE TEXT */}
                                <h4 className="mobile-only">
                                    Create Account
                                </h4>

                                <p className="mobile-only">
                                    Join us and start enjoying your journey
                                </p>


                                {/* DESKTOP TEXT */}
                                <h4 className="desktop-only">
                                    Create your account
                                </h4>

                                <p className="desktop-only">
                                    Enter your details below to get started
                                </p>

                            </div>


                            <form>

                                {error && (
                                    <p className="error-message">
                                        {error}
                                    </p>
                                )}


                                <div className="form-inputs">


                                    {/* NAME INPUT */}
                                    <div className="input-container">

                                        <div className="icon-box">
                                            <img
                                                src={profileIcon}
                                                alt="User profile icon"
                                            />
                                        </div>

                                        <input
                                            type="text"
                                            maxLength={40}
                                            placeholder="Username"
                                            value={name}
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                            disabled={loading}
                                        />

                                    </div>


                                    {/* EMAIL INPUT */}
                                    <div className="input-container">

                                        <div className="icon-box">
                                            <img
                                                src={mailIcon}
                                                alt="User mail icon"
                                            />
                                        </div>

                                        <input
                                            type="email"
                                            maxLength={40}
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            disabled={loading}
                                        />

                                    </div>


                                    {/* PASSWORD INPUT */}
                                    <div className="input-container">

                                        <div className="icon-box">
                                            <img
                                                src={padlockIcon}
                                                alt="Password icon"
                                            />
                                        </div>

                                        <input
                                            maxLength={40}
                                            placeholder="New Password"
                                            value={password}
                                            onChange={(e) =>
                                                setPassword(e.target.value)
                                            }
                                            disabled={loading}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    prev => !prev
                                                )
                                            }
                                            className="toggle-password-btn"
                                        >

                                            {showPassword ? (
                                                <img
                                                    src={hidePasswordIcon}
                                                    className="password-sensitive"
                                                    alt="Hide password"
                                                />
                                            ) : (
                                                <img
                                                    src={showPasswordIcon}
                                                    className="password-sensitive"
                                                    alt="Show password"
                                                />
                                            )}

                                        </button>

                                    </div>


                                    {/* CONFIRM PASSWORD */}
                                    <div className="input-container">

                                        <div className="icon-box">
                                            <img
                                                src={padlockIcon}
                                                alt="Confirm password icon"
                                            />
                                        </div>

                                        <input
                                            maxLength={40}
                                            placeholder="Confirm Password"
                                            value={confirmPassword}
                                            onChange={(e) =>
                                                setConfirmPassword(
                                                    e.target.value
                                                )
                                            }
                                            disabled={loading}
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                        />

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    prev => !prev
                                                )
                                            }
                                            className="toggle-password-btn"
                                        >

                                            {showPassword ? (
                                                <img
                                                    src={hidePasswordIcon}
                                                    className="password-sensitive"
                                                    alt="Hide password"
                                                />
                                            ) : (
                                                <img
                                                    src={showPasswordIcon}
                                                    className="password-sensitive"
                                                    alt="Show password"
                                                />
                                            )}

                                        </button>

                                    </div>

                                </div>


                                <div className="checkbox-container">

                                    <input
                                        type="checkbox"
                                        className="checkbox-input"
                                    />

                                    <p>
                                        I agree to the{" "}
                                        <a href="">
                                            terms & conditions
                                        </a>
                                    </p>

                                </div>


                                <button
                                    type="button"
                                    className="register-btn"
                                    onClick={handleRegister}
                                    disabled={loading}
                                >

                                    {loading
                                        ? "Please wait..."
                                        : "Register"}

                                </button>

                            </form>

                        </div>


                        <footer>

                            <p>Or continue with</p>

                            <div className="footer-icon">

                                <button
                                    type="button"
                                    className="social-btn"
                                >
                                    <img
                                        src={googleIcon}
                                        alt="Google sign in icon"
                                    />

                                    <span className="social-label">
                                        Google
                                    </span>
                                </button>


                                <button
                                    type="button"
                                    className="social-btn"
                                >
                                    <img
                                        src={githubIcon1}
                                        alt="GitHub sign in icon"
                                    />

                                    <span className="social-label">
                                        GitHub
                                    </span>
                                </button>


                                <button
                                    type="button"
                                    className="social-btn"
                                >
                                    <img
                                        src={facebookIcon}
                                        alt="Facebook sign in icon"
                                    />

                                    <span className="social-label">
                                        Facebook
                                    </span>
                                </button>

                            </div>


                            <p className="login-paragraph">

                                Already have an account?

                                <a
                                    onClick={() =>
                                        navigate("/login")
                                    }
                                >
                                    Log in
                                </a>

                            </p>

                        </footer>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Register;