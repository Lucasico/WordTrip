import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Text } from "@chakra-ui/react"
export function LetsGo(){
  const { colorMode } = useColorMode()
  return(
    <Box 
      borderTop={`1px solid ${colorMode  === "light" ? "#47585B" : "white"}`}
      textAlign="center"
      fontWeight="bold"
      fontSize="1.25rem"
      lineHeight="2.375rem"
      color={colorMode === "light" ? "#47585B" : "white"}
    >
      <Text paddingTop="1.5rem">
          Vamos nessa? 
      </Text>
      <Text>
        Então escolha seu continente
      </Text>
    </Box>
  )
}