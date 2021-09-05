import { useWideVersion } from '../../../hooks/useWideVersion';
import { properties } from './mocks'
import { Flex } from '@chakra-ui/react'
import { Card } from './Card';

export function Continets(){
  const { isWideVersion } = useWideVersion()
  return(
    <>
    <Flex
      width="80%"
      height="28.125rem"    
      marginTop="2rem"
      marginBottom="2rem"
      alignItems="center"
      justifyContent={"space-between"}
      flexDirection={isWideVersion ? "row" : "column"}
   >
     {
       properties.map((props, index) => {
         return(
           <Card 
            key={index}
            imageAlt={props.imageAlt}
            imageUrl={props.imageUrl}
            baths={props.baths}
            beds={props.beds}
            formattedPrice={props.formattedPrice}
            reviewCount={props.reviewCount}
            title={props.title}
            rate={props.rate}
          />
         )
       })
     }
    </Flex>
  
    </>
  );
  
}

