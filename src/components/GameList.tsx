import { FC } from "react";
import { Game } from "@prisma/client";
import GameCard from "@/components/GameCard";

interface GameListProps {
  games: Game[];
  title: string;
}

const GameList: FC<GameListProps> = ({ games, title }) => {
  if (!games || !games.length) {
    return null;
  }
  return (
    <div className="mt-6 space-y-8 px-4 md:px-12">
      <div>
        <p className="text-md text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
          {title}
        </p>
        <div className="grid grid-cols-4 gap-2">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameList;
