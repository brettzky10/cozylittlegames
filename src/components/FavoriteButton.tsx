"use client"

import { useState } from "react"
import { toggleFavorite } from "@/lib/actions/favorites"

export function FavoriteButton({ gameId, initialIsFavorite = false }:{gameId: string, initialIsFavorite: boolean}) {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite)
  const [isLoading, setIsLoading] = useState(false)
  
  const handleToggleFavorite = async () => {
    try {
      setIsLoading(true)
      const result = await toggleFavorite(gameId)
      setIsFavorite(result.isFavorite)
    } catch (error) {
      console.error("Failed to toggle favorite:", error)
    } finally {
      setIsLoading(false)
    }
  }
  
  return (
    <button 
      onClick={handleToggleFavorite}
      disabled={isLoading}
      className={`p-2 rounded-full ${isFavorite ? 'bg-red-500' : 'bg-gray-200'}`}
    >
      {isFavorite ? '❤️' : '🤍'}
    </button>
  )
}