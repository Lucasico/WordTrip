import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

interface LayoutProps{
  children: ReactNode;
}

export function Layout({children}:LayoutProps){

  return(
    <Flex 
      w="100vw" 
      h="100vh" 
      flexDirection="column"
      alignItems="center"
      overflowX="hidden"
    >
      {
        children
      }
    </Flex>
  )
}