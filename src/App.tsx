import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"navbar" "main"`, // for mobile devices
          md: `"navbar navbar" "leftside main"`, // for desktop
        }}
        templateColumns={{ base: "1fr", md: "200px 1fr" }}
      >
        <GridItem pl="2" area={"navbar"}>
          <NavBar
            onSearch={(text) =>
              setGameQuery({ ...gameQuery, searchText: text })
            }
          />
        </GridItem>
        <Show above="md">
          <GridItem area={"leftside"} paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              sortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
