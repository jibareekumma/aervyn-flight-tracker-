

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


import "../css/Register.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

import { supabase } from "../lib/supabaseClient"

const Login = function (){

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


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
                        <h4>Welcome back</h4>
                        <p>We have really missed you</p>
                    </div>

                    <form>
                    {error && <p>{error}</p>}

                    <div className="form-inputs">
                        
                    

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

                    

                    </div>

                    <div className = 'checkbox-container'>
                    <input type = "checkbox" 
                    className = 'checkbox-input'
                    />
                    <p>I agree to the <a href="">terms & conditions</a></p>
                    </div>

                    <button type = 'button'
                    className = 'register-btn'
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
                >Don't have an account yet? 
                <a onClick = {() => navigate('/register')}>
                    Sign up
                </a>
                </p>

            </footer>
        </div>
        </div>
    </>
}


export default Login 