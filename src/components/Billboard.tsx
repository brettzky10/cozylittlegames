"use client"

import { useState, useEffect } from "react"
import { getRandomGame } from "@/lib/actions/games"
import PlayButton from "@/components/PlayButton"
import { CircleAlert } from "lucide-react"
//import useInfoModal from "@/hooks/useInfoMocal"

const Billboard = () => {
  //const [game, setGame] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  //const { openModal } = useInfoModal()


   const game = [
    {
      id: "1",
      title: "Small Defenders",
      description: "Cozy tower defense game with an RTS feel.",
      link: "/cozy/smalldefenders",
      videoUrl: "/video/smalldefenders.mp4",
      thumbnailUrl: "/images/bg-cozygames.png"
    }
  ]

  useEffect(() => {
    const fetchRandomGame = async () => {
      try {
        setIsLoading(true)
        //const randomGame = await getRandomGame()
        //setGame(randomGame)
      } catch (error) {
        console.error("Failed to fetch random game:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchRandomGame()
  }, [])

  /* const handleOpenModal = () => {
    if (game) {
      openModal(game[0].id)
    }
  } */

  // Loading state
  if (isLoading) {
    return (
      <div className="relative h-[56.25vw] bg-black">
        <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
          <p className="text-1xl h-full w-[50%] font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
            Loading...
          </p>
        </div>
      </div>
    )
  }

  // No game available
  if (!game) {
    return (
      <div className="relative h-[56.25vw] bg-black">
        <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
          <p className="text-1xl h-full w-[50%] font-bold text-white drop-shadow-xl md:text-5xl lg:text-6xl">
            No games available
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-[56.25vw]">
      <video
        className="h-[56.25vw] w-full object-cover brightness-[60%] transition duration-500"
        autoPlay
        muted
        loop
        src={game[0].videoUrl}
        poster={game[0].thumbnailUrl}
      />

      <div className="absolute top-[30%] ml-4 md:top-[40%] md:ml-16">
        <p className="text-1xl h-full w-[50%] font-bold text-white drop-shadow-xl text-xl md:text-5xl lg:text-6xl">
          {game[0].title}
        </p>
        <p className="mt-3 w-[90%] text-[8px] text-white drop-shadow-xl md:mt-8 md:w-[80%] text-sm md:text-lg lg:w-[50%]">
          {game[0].description}
        </p>
        <div className="mt-3 flex flex-row items-center gap-3 md:mt-4">
          <PlayButton gameLink={game[0].link} />
          <button
            //onClick={handleOpenModal}
            className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 px-2 py-1 text-xs font-semibold text-white transition hover:bg-opacity-20 md:px-4 md:py-2 lg:text-lg"
          >
            <CircleAlert className="mr-2" />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard