"use server"

import db from "@/lib/prisma-db"

export async function getGames() {
  try {
    const games = await db.game.findMany()
    return games
  } catch (error) {
    console.error("Error fetching games:", error)
    return []
  }
}


export async function getRandomGame() {
  try {
    const gameCount = await db.game.count()

    if (gameCount === 0) {
      return null
    }

    const randomGame = await db.game.findFirst({
      skip: Math.floor(Math.random() * gameCount),
    })

    return randomGame
  } catch (error) {
    console.error("Error fetching random game:", error)
    return null
  }
}