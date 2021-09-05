import { useColorMode } from '@chakra-ui/color-mode'
import {  Text as TextChakra, Img} from "@chakra-ui/react"

type TextProps ={
  imageName: string,
  text: string
}

export function Text({imageName, text}: TextProps){
  const { colorMode } = useColorMode()
  return(
    <>
      <Img src={`/img/${imageName}`} 
        alt={text} 
        width="5.31rem" 
        height="5.31rem"
      />
      <TextChakra 
        paddingTop="1.2rem"
        color={colorMode === "light" ? "#47585B" : "white"}
        fontWeight="600"
      >
      {text}
      </TextChakra>
    </>
  )
}