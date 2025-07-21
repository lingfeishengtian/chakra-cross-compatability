import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { chakraVersion } from "../../global/chakraVersion";
import type { PropType } from "../../types";
import { TranslateProps } from "../../utils";

const v2ButtonPropEntries = [
  ["colorPalette", "colorScheme"],
  ["disabled", "isDisabled"],
] as const;

export type ButtonProps = PropType<
  typeof v2ButtonPropEntries,
  ChakraButtonProps
>;

export default function ChakraCompatibleButton(props: ButtonProps) {
  if (chakraVersion === "2") {
    const translatedProps = TranslateProps(props, v2ButtonPropEntries);

    return <Button {...translatedProps} />;
  }

  return <Button {...props} />;
}
