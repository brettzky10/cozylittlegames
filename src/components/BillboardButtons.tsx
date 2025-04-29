"use client"

import { useCallback } from "react"
import { CircleAlert } from "lucide-react"
import useInfoModal from "@/hooks/useInfoMocal"

interface BillboardButtonsProps {
  gameId: string
}

const BillboardButtons = ({ gameId }: BillboardButtonsProps) => {
  const { openModal } = useInfoModal()

  const handleOpenModal = useCallback(() => {
    openModal(gameId)
  }, [gameId, openModal])

  return (
    <button
      onClick={handleOpenModal}
      className="flex w-auto flex-row items-center rounded-md bg-white bg-opacity-30 px-2 py-1 text-xs font-semibold text-white transition hover:bg-opacity-20 md:px-4 md:py-2 lg:text-lg"
    >
      <CircleAlert className="mr-2" />
      More Info
    </button>
  )
}

export default BillboardButtons
