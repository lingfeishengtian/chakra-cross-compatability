import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import {
  createCompatibleComponent,
  type ForwardedRefComponent,
} from "../utils";

const v2InputPropEntries = [...V2UniversallyRenamedProps] as const;

export type InputProps = PropType<typeof v2InputPropEntries, ChakraInputProps>;

const ChakraCompatibleInput: ForwardedRefComponent<InputProps> =
  createCompatibleComponent(Input, v2InputPropEntries);

export default ChakraCompatibleInput;
