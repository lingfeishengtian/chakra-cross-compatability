import type { chakrav2, chakrav3 } from "chakra-ts-compatability-layer";
import * as chakra from "@chakra-ui/react";

export type ChakraVersion = chakrav2 | chakrav3;
export function chakraVersionSplitter<T extends ChakraVersion>() {
  return chakra as unknown as T;
}