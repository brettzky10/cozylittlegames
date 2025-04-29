const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  try {
    // Create 5 users
    const users = []

    for (let i = 1; i <= 5; i++) {
      const user = await prisma.user.create({
        data: {
          email: `user${i}@example.com`,
          name: `User ${i}`,
          image: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${i}.jpg`,
          emailVerified: new Date(),
          favoriteGames: [],
        },
      })

      users.push(user)
      console.log(`Created user: ${user.name}`)
    }


    // Game data
    const games = [
        {
          title: "Elden Ring",
          description:
            "An action RPG developed by FromSoftware and published by Bandai Namco Entertainment. The game was made in collaboration with fantasy novelist George R. R. Martin.",
          videoUrl: "https://www.youtube.com/watch?v=E3Huy2cdih0",
          thumbnailUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
          genre: "Action RPG",
          duration: "60+ hours",
          userId: users[0].id,
        },
        {
          title: "Cyberpunk 2077",
          description:
            "An open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification.",
          videoUrl: "https://www.youtube.com/watch?v=8X2kIfS6fb8",
          thumbnailUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
          genre: "Action RPG",
          duration: "40+ hours",
          userId: users[1].id,
        },
        {
          title: "The Legend of Zelda: Breath of the Wild",
          description:
            "An action-adventure game developed and published by Nintendo. The player controls Link, who awakens from a hundred-year slumber to defeat Calamity Ganon.",
          videoUrl: "https://www.youtube.com/watch?v=zw47_q9wbBE",
          thumbnailUrl:
            "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero",
          genre: "Action-Adventure",
          duration: "50+ hours",
          userId: users[2].id,
        },
        {
          title: "Red Dead Redemption 2",
          description:
            "An epic tale of life in America's unforgiving heartland. The game's vast and atmospheric world also provides the foundation for a brand new online multiplayer experience.",
          videoUrl: "https://www.youtube.com/watch?v=eaW0tYpxyp0",
          thumbnailUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg",
          genre: "Action-Adventure",
          duration: "60+ hours",
          userId: users[3].id,
        },
        {
          title: "Hades",
          description:
            "A god-like rogue-like dungeon crawler that combines the best aspects of Supergiant's critically acclaimed titles, including the fast-paced action of Bastion.",
          videoUrl: "https://www.youtube.com/watch?v=mD8x5xLHRho",
          thumbnailUrl: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/header.jpg",
          genre: "Roguelike",
          duration: "25+ hours",
          userId: users[4].id,
        },
      ]

    // Create games
    for (const gameData of games) {
      const game = await prisma.game.create({
        data: gameData,
      })

      console.log(`Created game: ${game.title}`)
    }

    console.log("Database seeding completed successfully!")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
