


import { createContext, useContext, useState, useEffect } from "react"

const FavoritesContext = createContext()

const FAVORITES_KEY = "jetpulse_favorites"

export const FavoritesProvider = function ({ children }) {
    const [favorites, setFavorites] = useState(function () {
        const stored = localStorage.getItem(FAVORITES_KEY)
        return stored ? JSON.parse(stored) : []
    })

    useEffect(function () {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
    }, [favorites])

    const getFavoriteId = function (item, type) {
        if (type === "flight") return `flight-${item.flightNumber}-${item.departureDate}`
        if (type === "hotel") return `hotel-${item.id || item.name}`
        if (type === "car") return `car-${item.id || item.name}`
        return null
    }

    const isFavorite = function (item, type) {
        const favId = getFavoriteId(item, type)
        return favorites.some(function (fav) {
            return fav.favId === favId
        })
    }

    const toggleFavorite = function (item, type) {
        const favId = getFavoriteId(item, type)
        setFavorites(function (prev) {
            const exists = prev.some(function (fav) {
                return fav.favId === favId
            })
            if (exists) {
                return prev.filter(function (fav) {
                    return fav.favId !== favId
                })
            }
            return [...prev, { favId, type, data: item }]
        })
    }

    const removeFavorite = function (favId) {
        setFavorites(function (prev) {
            return prev.filter(function (fav) {
                return fav.favId !== favId
            })
        })
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite, removeFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = function () {
    return useContext(FavoritesContext)
}