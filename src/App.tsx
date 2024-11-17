import { useState } from "react";
import SearchBar from "./components/SearchBar";

import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import { Button } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <>
      <div>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside">
              <GenreList />
            </GridItem>
          </Show>

          <GridItem area="main">
            <GameGrid />
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
