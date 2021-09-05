
import { Text } from './components/Text';
import { Flex, Box } from "@chakra-ui/react";
export function Travels() {

  return(
    
    <Flex
      marginTop="5rem"
      marginBottom="2rem"
      minWidth="80vw" 
      minHeight={100}
      alignItems="center"
      justifyContent="space-between"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text 
          imageName="cocktail.svg"
          text="Vida noturna"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text 
         imageName="/surf.svg"
         text="Praia"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text 
         imageName="/building.svg"
         text="Moderno"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text 
         imageName="/museum.svg"
         text="clássico"
        />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Text 
         imageName="/earth.svg"
         text="e mais..."
        />
      </Box>
    </Flex>
  )
}