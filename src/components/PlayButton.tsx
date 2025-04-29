"use client"

import { FC } from "react";

//import { BsFillPlayFill } from "react-icons/bs";

import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

interface PlayButtonProps {
  gameLink?: string;
}
const PlayButton: FC<PlayButtonProps> = ({ gameLink }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(`${gameLink}`)}
      className="flex w-auto flex-row items-center rounded-md bg-white px-2 py-1 text-xs font-semibold transition hover:bg-neutral-300 md:px-4 md:py-2 lg:text-lg"
    >
      <Play size={25} className="25" />
      Play
    </button>
  );
};

export default PlayButton;
