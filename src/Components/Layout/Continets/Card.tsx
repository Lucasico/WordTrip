import { useWideVersion } from '../../../hooks/useWideVersion';
import { Box,Image,Badge } from '@chakra-ui/react'
import { MdStar } from "react-icons/md";
import { useColorMode } from '@chakra-ui/color-mode'

type cardProps = {
  imageUrl: string,
  imageAlt: string,
  beds: number,
  baths: number,
  title: string,
  formattedPrice: string,
  reviewCount: number,
  rate:number
}
  
export function Card({imageUrl,imageAlt,beds,baths,title,formattedPrice,reviewCount,rate}:cardProps){
  const { colorMode } = useColorMode()
  const {isWideVersion} = useWideVersion()
  return(
      <Box 
        maxW={isWideVersion ? "16%" : "100%"}
        borderWidth="1px"
        borderRadius="lg"
        borderColor="#FFBA08"
        overflow="hidden"
        display="flex"
        flexDirection={isWideVersion ? "column" : "row"}
        justifyContent={isWideVersion ? "":"space-between"}
        marginBottom={isWideVersion ? "0" : "1rem"}
      >
        <Image src={imageUrl} alt={imageAlt} height={isWideVersion ? "12rem" : "100%"} />

        <Box p = {isWideVersion ? "6" : "2 2 1 0"}>
          <Box d="flex" alignItems="baseline">
            <Badge 
              borderRadius="full"
              px="0"
              colorScheme="orange"
              color={ colorMode === "light" ? "#47585B" : "#FFBA08"}
            >
              New
            </Badge>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
              {beds} beds &bull; {baths} baths
            </Box>
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
            color={ colorMode === "light" ? "#47585B" : "#FFBA08"}
          >
            {title}
          </Box>

          <Box>
            {formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / R$
            </Box>
          </Box>

          <Box d="flex" mt="2" alignItems="center">
            {Array(rate)
              .fill("")
              .map((_, i) => (
                <MdStar
                  key={i}
                  color="#FFBA08"
                />
              ))}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {reviewCount} reviews
            </Box>
          </Box>
        </Box>
      </Box>
  )
}