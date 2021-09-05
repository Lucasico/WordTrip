import { Text, TextProps } from '@chakra-ui/layout'

export const Copyright = (props: TextProps) => (
  <Text fontSize="sm" {...props}>
    &copy; {new Date().getFullYear()} Lucas Santos, Inc. All rights reserved.
  </Text>
)