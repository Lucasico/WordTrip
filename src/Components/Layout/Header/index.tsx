import { useWideVersion } from "../../../hooks/useWideVersion"
import { Button, Image,Box, Flex, Icon, useBreakpointValue} from "@chakra-ui/react"
import { useColorMode } from '@chakra-ui/color-mode'
import { useRouter } from 'next/router'
import { RiSunLine, RiMoonFill } from "react-icons/ri"
import { MdKeyboardArrowLeft } from "react-icons/md"

export function Header(){
  const router = useRouter();
  const {isWideVersion} = useWideVersion();
  const { colorMode, toggleColorMode } = useColorMode()
  return(
    <Flex>
        {
          router.asPath === '/' && (
            <Flex
              justifyContent="center"
              alignItems="center"
            >
              <Box>
                <Button variant="ghost">
                   <Icon as={MdKeyboardArrowLeft} fontSize={["10","15","20"]} />
                </Button >
              </Box>
            </Flex>
          )
        }
        <Flex
          minWidth="70vw" 
          minHeight={100}
          alignItems="center"
          justifyContent="center"
        >
          
          <Box 
            boxSize="sm" 
            width="184px"
            height="45px"
          >
            <Image src="/img/Logo.svg" alt="word trip" width={["81","61","41"]} />
          </Box>
        </Flex>
        {
          isWideVersion && (
            <Flex
              justifyContent="center"
              alignItems="center"
            >
            <Button onClick={toggleColorMode} variant="ghost">
                {
                  colorMode === "light" ? (
                    <Icon as = {RiMoonFill} fontSize={["10","15","20"]}/>
                    ) : (
                    <Icon as = {RiSunLine} fontSize={["10","15","20"]}/>
                  ) 
                }
              </Button>
            </Flex>
          )
        }
    </Flex>
 
  )
}