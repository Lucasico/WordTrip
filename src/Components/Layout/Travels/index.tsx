import { useColorMode } from '@chakra-ui/color-mode'
import { Flex, Box, Img, Text as TextChakra } from "@chakra-ui/react";
import { Text } from './components/Text';
export function Travels() {

  const { colorMode } = useColorMode()
  return(
    <Flex
      marginTop="5rem"
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