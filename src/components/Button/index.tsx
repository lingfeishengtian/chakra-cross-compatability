import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import {
  createCompatibleComponent,
  type ForwardedRefComponent,
} from "../utils";

const v2ButtonPropEntries = [...V2UniversallyRenamedProps] as const;

export type ButtonProps = PropType<
  typeof v2ButtonPropEntries,
  ChakraButtonProps
>;

const ChakraCompatibleButton: ForwardedRefComponent<ButtonProps> =
  createCompatibleComponent(Button, v2ButtonPropEntries);

export default ChakraCompatibleButton;
