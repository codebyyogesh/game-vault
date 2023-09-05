import { GameQuery } from "@/App";
import useData from "./useData";

export interface Platform {
  id: number;
  slug: string;
  name: string;
}

export interface GameResults {
  id: number;
  name: string;
  background_image: string;
  platforms: Array<{ platform: Platform }>;
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<GameResults>(
    "/games",
    {
      params: { genre: gameQuery.genre?.id, platforms: gameQuery.platform?.id },
    },
    [gameQuery]
  );

export default useGames;
