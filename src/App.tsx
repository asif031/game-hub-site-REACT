import { useState } from "react";
import SearchBar from "./components/SearchBar";
import { Button } from "./components/ui/button";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componentsNative/NavBar";

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
          <Show when="lg">
            <GridItem area="aside" bg="gold">
              Aside
            </GridItem>
          </Show>

          <GridItem area="main" bg="dodgerblue">
            Main
          </GridItem>
        </Grid>
      </div>
      <div className="App">
        {/* {isDark && (document.body.style.backgroundColor = "black")} */}
        <SearchBar onToggle={() => setIsDark(!isDark)} />
      </div>
    </>
  );
}

export default App;
