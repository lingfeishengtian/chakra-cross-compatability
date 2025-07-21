import * as chakra from "@chakra-ui/react";
import type {
  chakrav2,
  chakrav3,
} from "../../packages/chakra-ts-compatibility-layer/dist";

export type ChakraVersion = chakrav2 | chakrav3;
export function chakraVersionSplitter<T extends ChakraVersion>() {
  return chakra as unknown as T;
}
