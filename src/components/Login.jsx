



import leftArrow from "/icons/left_arrow_icon.png"
import mainLogo from "/icons/main-icon.png"
import profileIcon from "/icons/profile_icon.png"
import mailIcon from "/icons/email icon.png"
import padlockIcon from "/icons/padlock icon.png"
import googleIcon from "/icons/google-icon.png"
import githubIcon from "/icons/github-icon.png"
import facebookIcon from "/icons/facebook-icon.png"
import githubIcon1 from "/icons/github 1.png"
import windowImage from "/photos/window image .png"
import dskBgImage from "/photos/login-page-bgimage.png"
import showPasswordIcon from "/icons/show_password.png"
import hidePasswordIcon from "/icons/hide_password.png"


import "../css/Register.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { supabase } from "../lib/supabaseClient"

const Login = function (){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const [showPassword, setShowPassword] = useState(false);



       // Sign in Logics
        // const [user, setUser] = useState(null)
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
    
        const handleLogin = async function(){
            setError("")
            setLoading(true)
            const {data, error} = await supabase.auth.signInWithPassword({email, password})
    
            setLoading(false)
            if (error) return setError(error.message);
    
            // setUser(data.user ?? null)

            navigate('/dashboard')
        }
    


    
    return <>

        <div id="register-container-dskp">

            <div className = 'login-card-dskp'>

                <div className="image-container-dskp"
                style = {{ backgroundImage: `url(${dskBgImage})` }}
                >
                    <div className = 'dskp-overlay'>

                        <img src = {mainLogo}
                        alt="Company Logo"
                        loading="lazy"
                        className = 'dskp-logo'
                        />

                        <div className = 'dskp-welcome-text'>
                            <h4>Welcome <span className = 'highlight-text'>back</span></h4>
                            <p>We've missed you</p>
                        </div>

                        <div className = 'dskp-badge'>
                            <span className = 'badge-icon'>🛡</span>
                            <div className = 'badge-text'>
                                <p>Your journey awaits.</p>
                                <p>Let's get you back in the air.</p>
                            </div>
                        </div>

                    </div>
                </div>


                {/* Mobile Starts here  */}

                <div className = 'entry-page'
                id = 'register-container'>

                    <div className = 'language-selector'>
                        <span className = 'lang-globe'>🌐</span>
                        <span>English</span>
                        <span className = 'lang-caret'>⌄</span>
                    </div>

                    <div className = 'register-header'>
                        <div>
                            <button onClick = {() => navigate('/')}>
                            <img src = {leftArrow} alt="Left Arrow" 
                            title = 'Go back to Intro page'
                            loading ='lazy'
                            />
                        </button>
                        
                        <img src = {mainLogo} 
                        alt="Company Logo" 
                        loading = 'lazy'
                        className = 'company-logo'
                        
                        />
                        </div>
                    </div>

                    <div id = "register-main">

                        <div className = 'header-main'>
                            <h4 className = 'mobile-only'>Welcome <span className = 'highlight-text'>back</span></h4>
                            <p className = 'mobile-only'>We've missed you</p>

                            <h4 className = 'desktop-only'>Login to your account</h4>
                            <p className = 'desktop-only'>Enter your details below to continue</p>
                        </div>

                        <form>
                        {error && <p className = "error-message">{error}</p>}

                        <div className="form-inputs">
                            

                    <div className = 'input-container'
                        id = 'mail-input'
                        >
                            <div className = 'icon-box'>
                                    <img src = {mailIcon} 
                                    alt="User mail icon" 
                                    />
                             </div>

                            <input type="email" 
                            maxLength = {40}
                            placeholder = "Email Address"
                            value = {email}
                            onChange = {(e) => setEmail(e.target.value)}
                            disabled = {loading}
                            />
                        </div>

                         <div className = 'input-container'
                         id = 'password-input'
                         >
                            <div className = 'icon-box'>
                                    <img src = {padlockIcon} 
                                    alt="password icon" 
                                    />
                             </div>

                            <input 
                            maxLength = {40}
                            placeholder = "Input Password"
                            value = {password}
                            onChange = {(e) => setPassword(e.target.value)}
                            disabled = {loading}
                            type={showPassword ? "text" : "password"}
                            />


                            <button
                        type="button"
                        onClick={() => setShowPassword(prev => !prev)}
                    className="toggle-password-btn"
                         >
                    {showPassword 
                    ? <img src = {hidePasswordIcon} 
                    className = 'password-sensitive'/> 
                    : <img src = {showPasswordIcon} 
                    className = 'password-sensitive'/>}
                    </button>
                        </div>

                        

                        </div>

                        <div className = 'checkbox-container'
                        
                        >
                        <div className = 'remember-me'>
                            <input type = "checkbox" 
                            className = 'checkbox-input'
                            id = 'remember-me'
                            />
                            <label htmlFor = 'remember-me'>Remember me</label>
                        </div>

                        <a href="" className = 'forgot-password'>Forgot password?</a>
                        </div>

                        <button type = 'button'
                        className = 'register-btn'
                        id="login-btn"
                        onClick = {handleLogin}
                        disabled = {loading}
                        >
                            {loading? "Please wait..." : "Login"}
                        </button>
                            </form>
                    </div>


                <footer>
                    <p>Or continue with</p>

                    <div className = 'footer-icon'>
                        <button type = 'button' className = 'social-btn' id = 'google-btn'>
                            <img src = {googleIcon} 
                            alt="Google sign in icon"
                            />
                            <span className = 'social-label'>Google</span>
                        </button>

                        <button type = 'button' className = 'social-btn' id = 'github-btn'>
                            <img src = {githubIcon1} 
                            alt="Github sign in icon"
                            />
                            <span className = 'social-label'>GitHub</span>
                        </button>

                        <button type = 'button' className = 'social-btn' id = 'facebook-btn'>
                            <img src = {facebookIcon} 
                            alt="Facebook sign in icon"
                            />
                            <span className = 'social-label'>Facebook</span>
                        </button>
                    </div>

                    <p
                    className = 'login-paragraph'
                    >Don't have an account yet? 
                    <a onClick = {() => navigate('/register')}>
                        Sign up
                    </a>
                    </p>

                </footer>
                </div>

            </div>

        </div>
    </>
}


export default Login