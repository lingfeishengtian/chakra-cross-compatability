import type { BoxProps as ChakraBoxProps } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import {
  createCompatibleComponent,
  type ForwardedRefComponent,
} from "../utils";

const v2BoxPropEntries = [...V2UniversallyRenamedProps] as const;

export type BoxProps = PropType<typeof v2BoxPropEntries, ChakraBoxProps>;

const ChakraCompatibleBox: ForwardedRefComponent<BoxProps> =
  createCompatibleComponent(Box, v2BoxPropEntries);

export default ChakraCompatibleBox;
