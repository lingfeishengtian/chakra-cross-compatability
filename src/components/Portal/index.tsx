import type { PortalProps as ChakraPortalProps } from "@chakra-ui/react";
import { Portal } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { V2UniversallyRenamedProps } from "../../global/propMigrations";
import type { PropType } from "../../types";
import {
  createCompatibleComponent,
  type ForwardedRefComponent,
} from "../utils";

const v2PortalPropEntries = [...V2UniversallyRenamedProps] as const;

export type PortalProps = PropType<
  typeof v2PortalPropEntries,
  PropsWithChildren<ChakraPortalProps>
>;

const ChakraCompatiblePortal: ForwardedRefComponent<PortalProps> =
  createCompatibleComponent(Portal, v2PortalPropEntries);

export default ChakraCompatiblePortal;
