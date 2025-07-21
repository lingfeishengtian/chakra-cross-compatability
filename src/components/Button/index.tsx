import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { chakraVersion } from "../../global/chakraVersion";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import { translateProps } from "../../utils";

const v2ButtonPropEntries = [...V2UniversallyRenamedProps] as const;

export type ButtonProps = PropType<
  typeof v2ButtonPropEntries,
  ChakraButtonProps
>;

export default function ChakraCompatibleButton(props: ButtonProps) {
  if (chakraVersion === "2") {
    const translatedProps = translateProps(props, v2ButtonPropEntries);

    return <Button {...translatedProps} />;
  }

  return <Button {...props} />;
}
