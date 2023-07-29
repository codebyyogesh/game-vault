import { Grid,GridItem, Show } from "@chakra-ui/react"
import NavBar from "./components/NavBar"



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
                <GridItem pl='2' bg='gold' area={'leftside'}>Aside</GridItem>
            </Show>
            <GridItem pl='2' bg='blue' area={'main'}>Main</GridItem>

        </Grid>
      </>
  )
}

export default App
