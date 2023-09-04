import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

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
          <NavBar />
        </GridItem>
        <Show above="md">
          <GridItem pl="2" area={"leftside"} paddingX={5}>
            <GenreList
              onSelectGenre={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem pl="2" area={"main"}>
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
