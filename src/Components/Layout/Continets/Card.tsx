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
  const { colorMode, toggleColorMode } = useColorMode()
  return(
      <Box maxW="16%" borderWidth="1px" borderRadius="lg" borderColor="#FFBA08" overflow="hidden" >
        <Image src={imageUrl} alt={imageAlt} height="12rem" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge 
              borderRadius="full"
              px="2"
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