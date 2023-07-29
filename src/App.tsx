import { Grid,GridItem, Show } from "@chakra-ui/react"



function App() {
  return (
      <>
       <Grid 
            templateAreas={{
                base : `"navbar" "main"`,
                lg   : `"navbar navbar" "leftside main"`
            }}
        >
            <GridItem pl='2' bg='coral' area={'navbar'}>NavBar</GridItem>
            <Show above="lg">
                <GridItem pl='2' bg='gold' area={'leftside'}>Aside</GridItem>
            </Show>
            <GridItem pl='2' bg='blue' area={'main'}>Main</GridItem>

        </Grid>
      </>
  )
}

export default App
