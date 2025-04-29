import { useRouter } from "next/router";
//import useGame from "@/hooks/useGame";
import { ArrowLeft } from "lucide-react";
//import { AiOutlineArrowLeft } from "react-icons/ai";

const Watch = () => {
  const router = useRouter();
  const gameId = router.query.gameId as string;
  //const { data: game } = useGame(gameId);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed z-10 flex w-full flex-row items-center gap-4 bg-black bg-opacity-70 p-4">
        <ArrowLeft
          onClick={() => router.push("/")}
          className="cursor-pointer text-white"
          size={30}
        />
        <p className="text-1xl font-bold text-white md:text-3xl">
          <span className="font-light">Watching:</span>&nbsp;
          {/* {game?.title} */}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
       /*  src={game?.videoUrl} */
      ></video>
    </div>
  );
};

export default Watch;
