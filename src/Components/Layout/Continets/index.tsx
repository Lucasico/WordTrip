import {properties} from './mocks'
import { Flex, Box} from '@chakra-ui/react'
import { Card } from './Card';

export function Continets(){
  return(
    <>
    <Flex
      width="80%"
      height="28.125rem"    
      marginTop="2rem"
      marginBottom="2rem"
      justifyContent="space-between"
     
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

