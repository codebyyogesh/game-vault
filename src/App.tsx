import { Grid,GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import GameGrid from "./components/GameGrid"



function App() {
  return (
      <>
       <Grid 
            templateAreas={{
                base : `"navbar" "main"`, // for mobile devices
                lg   : `"navbar navbar" "leftside main"` // for desktop
            }}
        >
            <GridItem pl='2' area={'navbar'}>
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem pl='2' area={'leftside'}>Aside</GridItem>
            </Show>
            <GridItem pl='2'area={'main'}>
                <GameGrid/>
            </GridItem>

        </Grid>
      </>
  )
}

export default App
