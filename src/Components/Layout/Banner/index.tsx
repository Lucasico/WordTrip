import {Box, Flex,Text,Image} from "@chakra-ui/react"
export function Banner(){

  return (
    <Flex 
      w="100vw" 
      h="20.9rem" 
      backgroundImage="url('/img/Background.svg')"
      bgRepeat="no-repeat"
      backgroundSize= "cover"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
          minWidth="80vw" 
          minHeight={100}
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap" 
      >
        <Box>
          <Text fontSize="1.7rem" color="white">
            5 continentes,
          </Text> 
          <Text fontSize="1.7rem" color="white" paddingBottom="1.5rem">
            infinitas possibilidades
          </Text>
          <Text color="white" fontSize="1.2rem">
            Chegou a hora de tirar do papel a viagem que você 
          </Text>
          <Text color="white" fontSize="1.2rem">
            sempre sonhou
          </Text>
        </Box>
        <Box display="flex">  
    
        <Image 
          src="/img/Airplane.svg" 
          alt="word trip"
          width="25.06rem"
          height="18.94rem"
          marginTop="7rem"
          transform= "rotate(5deg)"
        />
        </Box>
      </Flex>
    </Flex> 
  )
}