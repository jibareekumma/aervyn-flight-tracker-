

import { createContext, useContext, useState } from "react"
import pfp from "/photos/pfp 1.jpg"

const ProfileContext = createContext()

const getStoredProfile = function(){
    const stored = localStorage.getItem("jetpulse_profile")

    if(!stored) return null

    return JSON.parse(stored)
}

export const ProfileProvider = function({ children }){

    const storedProfile = getStoredProfile()

    const [profileImg, setProfileImg] = useState(storedProfile?.image || pfp)
    const [profileName, setProfileName] = useState(storedProfile?.name || "User Name")

    const updateProfile = function(name, image){
        setProfileImg(image)
        setProfileName(name)

        localStorage.setItem("jetpulse_profile", JSON.stringify({ name, image }))
    }

    return <ProfileContext.Provider value={{ profileImg, profileName, updateProfile }}>
        {children}
    </ProfileContext.Provider>
}

export const useProfile = function(){
    return useContext(ProfileContext)
}