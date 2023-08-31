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

const useGames = () => useData<GameResults>("/games");

export default useGames;
