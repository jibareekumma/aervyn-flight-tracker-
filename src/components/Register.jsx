

import leftArrow from "/icons/left_arrow_icon.png"
import mainLogo from "/icons/main-icon.png"
import profileIcon from "/icons/profile_icon.png"
import mailIcon from "/icons/email icon.png"
import padlockIcon from "/icons/padlock icon.png"
import googleIcon from "/icons/google-icon.png"
import githubIcon from "/icons/github-icon.png"
import facebookIcon from "/icons/facebook-icon.png"


import "../css/Register.css"

const Register = function (){
    return <>
        <div className = 'entry-page' 
        id = 'register-container'>

                <header>
                    <div>
                    <button>
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
                </header>

                <main id = "register-main">

                    <section className = 'header-main'>
                        <h4>Create Account</h4>
                        <p>Join us and start 
                            enjoying your journey</p>
                    </section>

                    <form>

                    <section className="form-inputs">
                <div className = 'input-container'>
                        <div className = 'icon-box'>
                                <img src = {profileIcon} 
                                alt="User profile icon" 
                                />
                         </div>

                        <input type="text" 
                        maxLength = {40}
                        placeholder = "Full Name"
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
                        />
                    </div>

                    </section>

                    <input type = "checkbox" />

                    <button type = 'button'>
                        Register
                    </button>
                        </form>
                </main>


            <footer>
                <p>Or continue with</p>

                <div className = 'footer-icon'>
                    <div className = 'items'>
                        <img src = {googleIcon} 
                        alt="Google sign in icon"
                        />
                    </div>

                    <div className = 'items'>
                        <img src = {githubIcon} 
                        alt="Github sign in icon"
                        />
                    </div>

                    <div className = 'items'>
                        <img src = {facebookIcon} 
                        alt="Facebook sign in icon"
                        />
                    </div>
                </div>

                <p>Already have an account?</p> <a 
                onClick = {() => Navigate('/login')}>
                    Log in
                </a>

            </footer>
        </div>
    </>
}


export default Register 