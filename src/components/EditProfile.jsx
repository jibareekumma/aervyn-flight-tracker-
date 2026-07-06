


import leftArr from "/icons/left_arrow_icon.png"
import cancelIcon from "/icons/cancel_icon2.png"
import cameraIcon from "/icons/camera_icon.png"
import logoutIcon from "/icons/logout_icon.png"



import { useState, useEffect } from "react"
import { useRef } from "react"
import { supabase } from "../lib/supabaseClient"
import { useNavigate } from "react-router-dom"

import "../css/EditProfile.css"

const EditProfile = function ({ onClose, pfp, name, handleSave }) {

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setIsActive(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    const handleClose = () => {
        setIsActive(false);
        setTimeout(() => {
            onClose();
        }, 350); 
    };

    const [selectedImg, setSelectedImg] = useState(pfp);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputref = useRef(null);

    const handleImgChange = (e) => {
        const file = e.target.files[0];

        if(!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            setSelectedImg(reader.result);
        };

        reader.readAsDataURL(file);

        setSelectedFile(file);
    };


    const [fullName, setFullName] = useState(name);

    const onSave = () => {

        handleSave(fullName.trim() || name, selectedImg);

        handleClose();
    };

    const navigate = useNavigate();

    const handleLogOut = async () => {

        await supabase.auth.signOut();
        navigate('/login')
    }
   

    return <>
        <div
            className={`overlay ${isActive ? "overlay--active" : ""}`}
            onClick={handleClose}
        ></div>

        <div className={`profile-edit-window ${isActive ? 
            "profile-edit-window--active" : ""}`}>


            <div className = 'edit-header'>
                <div className="icon-container"
                    onClick = {handleClose}
                >
                    <img src= {leftArr} alt="Left Arrow" 
                    loading="lazy" 

                    />
                </div>
                <h4>Edit Profile</h4>
                <div className="icon-container"
                    onClick = {handleClose}
                >
                    <img src = {cancelIcon} alt="Cancel Icon" 
                    loading="lazy"
                    />
                </div>
            </div>


            <div className="edit-container">
                <div className="profile-details">
                                    <div className="profile-image-container">
                                        <div className="profile-avatar">
                                            <img src={selectedImg}
                                                alt="User profile photo"
                                                loading="lazy" />
                                            <div className='icon-container'
                                            >
                                                <img src={cameraIcon}
                                                    alt="Icon of camera" 
                                                    loading='lazy' 
                                                    onClick = {() => fileInputref.current.click()}
                                                    />

                                                    <input type="file" 
                                                        ref = {fileInputref}
                                                        style={{ display: "none" }}
                                                        accept="image/*"
                                                        onChange = {handleImgChange}
                                                    />
                                            </div>
                                        </div>
                                    </div>
                                    <h4>Change Photo</h4>
                                    <p>JPG, PNG, or WebP, Max 5MB.</p>
                                </div>



                <div className="edit-form">
                    <h5>Full Name</h5>
                    <input type="text" placeholder="New Name"
                        maxLength={50}
                        value={fullName}
                        onChange = {(e) => setFullName(e.target.value)}
                    />
                    <p>This is how your name will 
                        appear in the site</p>
                </div>


                <button className="edit-btn"
                onClick={onSave}
                >
                    Save Changes
                </button>
            </div>




            <button className="log-out-btn"
                onClick = {handleLogOut}
            >
                <img src = {logoutIcon} alt="Log Out icon" 
                loading = "lazy"
                />
                <p>Log out</p>
            </button>

        </div>
    </>
}

export default EditProfile;