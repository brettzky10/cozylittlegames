"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Billboard from "@/components/Billboard"
import GameList from "@/components/GameList"
//import InfoModal from "@/components/InfoModal"
import useInfoModal from "@/hooks/useInfoMocal"
import CozyGames from "./CozyGames"
import Testimonials from "./Testimonials"
import BasicFAQ from "./global/FAQ"
import { Footer } from "./global/Footer"
import Image from "next/image"

interface ClientHomeProps {
  //initialGames: any[]
  //initialFavorites: any[]
}

export default function ClientHome({ }: ClientHomeProps) { //initialFavorites
  //const [games] = useState(initialGames)
  //const [favorites] = useState(initialFavorites)
  //const { data: favorites = [] } = useFavorites();
  const { isOpen, closeModal } = useInfoModal()

  return (
    <>
      {/* <InfoModal onClose={closeModal} visible={isOpen} /> */}
      <Navbar />
      <Billboard />
      <CozyGames/>
      <div className="bg-zinc-800">
        <img src="/images/grass.avif" alt="grass" height={30} className="w-full"/>
      </div>
      {/* <div className="pb-40 bg-zinc-800">
        <GameList games={games} title="Trending Now" />
        <GameList games={favorites} title="My List" />
      </div> */}
      {/* <Testimonials/> */}
      <BasicFAQ/>
      <Footer/>
    </>
  )
}