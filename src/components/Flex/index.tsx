import type { FlexProps as ChakraFlexProps } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import {
  createCompatibleComponent,
  type ForwardedRefComponent,
} from "../utils";

const v2FlexPropEntries = [...V2UniversallyRenamedProps] as const;

export type FlexProps = PropType<typeof v2FlexPropEntries, ChakraFlexProps>;

const ChakraCompatibleFlex: ForwardedRefComponent<FlexProps> =
  createCompatibleComponent(Flex, v2FlexPropEntries);

export default ChakraCompatibleFlex;
