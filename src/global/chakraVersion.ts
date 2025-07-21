import * as chakra from "@chakra-ui/react";

export const chakraVersion = 'useToast' in chakra && 'useDisclosure' in chakra ? '2' : '3';
type InferChakraVersion<T> =
  'useToast' extends keyof T
  ? 'useDisclosure' extends keyof T
  ? '2'
  : never
  : '3';

export type ChakraVersion = InferChakraVersion<typeof chakra>;