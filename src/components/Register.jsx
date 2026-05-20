

import leftArrow from "/icons/left_arrow_icon.png"
import mainLogo from "/icons/main-icon.png"
import profileIcon from "/icons/profile_icon.png"
import mailIcon from "/icons/email icon.png"
import padlockIcon from "/icons/padlock icon.png"
import googleIcon from "/icons/google-icon.png"
import githubIcon from "/icons/github-icon.png"
import facebookIcon from "/icons/facebook-icon.png"
import githubIcon1 from "/icons/github 1.png"
import { useNavigate } from "react-router-dom"
import windowImage from "/photos/window image .png"


import "../css/Register.css"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

const Register = function (){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [name, setName ] = useState("")

    // Sign up Logics
    // const [user, setUser] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleRegister = async function(){
        setError("")

        if (password !== confirmPassword) {
        return setError("Passwords do not match")
    }


        setLoading(true)
        const {data, error} = await supabase.auth.signUp({email, password})

        setLoading(false)
        if (error) return setError(error.message);

          if (error) {
        if (error.message.toLowerCase().includes("already registered")) {
            return setError("An account with this email already exists. Please log in instead.")
        }
        return setError(error.message)
    }

        // setUser(data.user ?? null)

         navigate('/dashboard')
    }


    return <>

    <div id="register-container-dskp">
            <div className="image-container-dskp">
                <img src = {windowImage}  
                alt="Image of flight window"
                loading="lazy"
                className = 'flight-window-image'
                />
            </div>



            {/* Mobile Starts here  */}
             <div className = 'entry-page' 
        id = 'register-container'>

                <div className = 'register-header'>
                    <div>
                    <button onClick = {() => navigate('/')}>
                        <img src = {leftArrow} alt="Left Arrow" 
                        title = 'Go back to Intro page'
                        loading ='lazy'
                        />
                    </button>
                    <div className = 'logo-container'></div>
                    <img src = {mainLogo} 
                    alt="Company Logo" 
                    loading = 'lazy'
                    className = 'company-logo'
                    />
                    </div>
                </div>

                <div id = "register-main">

                    <div className = 'header-main'>
                        <h4>Create Account</h4>
                        <p>Join us and start 
                            enjoying your journey</p>
                    </div>

                    <form>
                    {error && <p>{error}</p>}
                    <div className="form-inputs">
                        <div className = 'input-container'>
                        <div className = 'icon-box'>
                                <img src = {profileIcon} 
                                alt="User profile icon" 
                                />
                         </div>

                        <input type="text" 
                        maxLength = {40}
                        placeholder = "Full Name"
                        value = {name}
                        onChange = {(e) => setName(e.target.value)}
                        disabled = {loading}
                        />
                    </div>


                <div className = 'input-container'>
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

                     <div className = 'input-container'>
                        <div className = 'icon-box'>
                                <img src = {padlockIcon} 
                                alt="User mail icon" 
                                />
                         </div>

                        <input type="password" 
                        maxLength = {40}
                        placeholder = "New Password"
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                        disabled = {loading}
                        />
                    </div>

                    <div className = 'input-container'>
                        <div className = 'icon-box'>
                                <img src = {padlockIcon} 
                                alt="User password icon" 
                                />
                         </div>

                        <input type="password" 
                        maxLength = {40}
                        placeholder = "Confirm Password"
                        value = {confirmPassword}
                        onChange = {(e) => setConfirmPassword(e.target.value)}
                        disabled = {loading}
                        />
                    </div>

                    </div>

                    <div className = 'checkbox-container'>
                    <input type = "checkbox" 
                    className = 'checkbox-input'
                    />
                    <p>I agree to the <a href="">terms & conditions</a></p>
                    </div>

                    <button type = 'button'
                    className = 'register-btn'
                    onClick = {handleRegister}
                    disabled = {loading}

                    >
                        {loading? "Please wait..." : "Register"}
                        
                    </button>
                        </form>
                </div>


            <footer>
                <p>Or continue with</p>

                <div className = 'footer-icon'>
                    <div className = 'items'>
                        <img src = {googleIcon} 
                        alt="Google sign in icon"
                        />
                    </div>

                    <div className = 'items' 
                    id = 'github-item'>
                        <img src = {githubIcon1} 
                        alt="Github sign in icon"
                        />
                    </div>

                    <div className = 'items'>
                        <img src = {facebookIcon} 
                        alt="Facebook sign in icon"
                        />
                    </div>
                </div>

                <p
                className = 'login-paragraph'
                >Already have an account? <a onClick = {() => navigate('/login')}>
                    Log in
                </a>
                </p>

            </footer>
        </div>

    </div>


       

        
    </>
}


export default Register 