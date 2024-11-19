import { useState } from "react";
import SearchBar from "./components/SearchBar";

import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Button } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <div>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" paddingX={5}>
              <GenreList
                selectedGenre={selectedGenre}
                onSelectGenre={(genre) => setSelectedGenre(genre)}
              />
            </GridItem>
          </Show>

          <GridItem area="main">
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <GameGrid
              selectedGenre={selectedGenre}
              selectedPlatform={selectedPlatform}
            />
          </GridItem>
        </Grid>
      </div>
      <div className="App">
        {/* {isDark && (document.body.style.backgroundColor = "black")} */}
        {/* <SearchBar onToggle={() => setIsDark(!isDark)} /> */}
      </div>
    </>
  );
}

export default App;
