import { Box, Stack, Text } from '@chakra-ui/react'
import { Logo } from './logo'
import { SocialMediaLinks } from './socialMediaLinks'
import { Copyright } from './Copyright'
export function Footer(){
  return(
    <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
        <SocialMediaLinks />
      </Stack>
      <Copyright alignSelf={{ base: 'center', sm: 'start' }} />
    </Stack>
  </Box>
  )
}