"use server"

//import { auth } from "@/lib/auth"
import  db  from "@/lib/prisma-db"

export async function getFavoriteGames() {
  try {
    // Get the current user session
    const session = await auth()

    if (!session || !session.user || !session.user.email) {
      throw new Error("Unauthorized")
    }

    // Get the user from the database with their email
    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!currentUser) {
      throw new Error("User not found")
    }

    // Check if the user has any favorite games
    if (!currentUser.favoriteGames.length) {
      return []
    }

    // Fetch the games that match the user's favorite game IDs
    const favoriteGames = await db.game.findMany({
      where: {
        id: {
          in: currentUser.favoriteGames,
        },
      },
    })

    return favoriteGames
  } catch (error: any) {
    console.error("Error fetching favorite games:", error)
    throw new Error(`Failed to fetch favorite games: ${error.message}`)
  }
}

// Add/remove a game from favorites
export async function toggleFavorite(gameId: string) {
  try {
    // Get the current user session
    const session = await auth()

    if (!session || !session.user || !session.user.email) {
      throw new Error("Unauthorized")
    }

    // Get the current user
    const currentUser = await db.user.findUnique({
      where: {
        email: session.user.email,
      },
    })

    if (!currentUser) {
      throw new Error("User not found")
    }

    // Check if the game is already in favorites
    const isFavorite = currentUser.favoriteGames.includes(gameId)

    // Update the user's favorites
    const updatedUser = await db.user.update({
      where: {
        email: session.user.email,
      },
      data: {
        favoriteGames: isFavorite
          ? currentUser.favoriteGames.filter((id) => id !== gameId) // Remove if already a favorite
          : [...currentUser.favoriteGames, gameId], // Add if not a favorite
      },
    })

    return {
      favoriteGames: updatedUser.favoriteGames,
      isFavorite: !isFavorite,
    }
  } catch (error: any) {
    console.error("Error toggling favorite:", error)
    throw new Error(`Failed to toggle favorite: ${error.message}`)
  }
}
