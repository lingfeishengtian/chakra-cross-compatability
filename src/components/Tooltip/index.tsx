import { chakraVersion, type ChakraVersion } from '../../global/chakraVersion';
import {
    openablePositionableExtraTranslation,
    V2OpenablePositionableProps,
    V2UniversallyRenamedProps,
} from '../../global/propMigrations';
import type { PropType } from '../../types';
import { type ForwardedRefComponent, createCompatibleComponent } from '../utils';
import { Tooltip as V3Tooltip, type TooltipProps } from './components/v3-tooltip';
import * as chakra from '@chakra-ui/react';
import { Tooltip as V2Tooltip } from '@chakra-ui/react';

const v2TextPropEntries = [...V2UniversallyRenamedProps, ...V2OpenablePositionableProps] as const;

type BaseTooltipProps = ChakraVersion extends '3'
    ? TooltipProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.TooltipProps;

export type TextProps = PropType<typeof v2TextPropEntries, BaseTooltipProps>;

const ChakraCompatibleText: ForwardedRefComponent<TextProps> = createCompatibleComponent(
    // @ts-ignore: This is a workaround to allow the component to be compatible with both Chakra 2 and Chakra 3.
    chakraVersion === '3' ? V3Tooltip : V2Tooltip,
    v2TextPropEntries,
    openablePositionableExtraTranslation
);

export default ChakraCompatibleText;
