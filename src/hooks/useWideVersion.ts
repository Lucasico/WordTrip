import { useBreakpointValue } from "@chakra-ui/react";

export function useWideVersion() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return ({ isWideVersion })
}