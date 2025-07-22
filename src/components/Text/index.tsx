import type { TextProps as ChakraTextProps } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import {
  createCompatibleComponent,
  type ForwardedRefComponent,
} from "../utils";

const v2TextPropEntries = [...V2UniversallyRenamedProps] as const;

export type TextProps = PropType<typeof v2TextPropEntries, ChakraTextProps>;

const ChakraCompatibleText: ForwardedRefComponent<TextProps> =
  createCompatibleComponent(Text, v2TextPropEntries);

export default ChakraCompatibleText;
