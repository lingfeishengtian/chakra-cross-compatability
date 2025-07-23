import * as chakra from '@chakra-ui/react';
import { Tooltip as V2Tooltip } from '@chakra-ui/react';
import { chakraVersion, type ChakraVersion } from '../../global/chakraVersion';
import {
    openablePositionableExtraTranslation,
    V2OpenablePositionableProps,
    V2UniversallyRenamedProps,
} from '../../global/propMigrations';
import type { PropType } from '../../types';
import { createCompatibleComponent, type ForwardedRefComponent } from '../utils';
import { Tooltip as V3Tooltip, type TooltipProps as ChakraTooltipProps } from './components/v3-tooltip';

const v2TooltipPropEntries = [
    ...V2UniversallyRenamedProps,
    ...V2OpenablePositionableProps,
    ['content', 'label'],
] as const;

type BaseTooltipProps = ChakraVersion extends '3'
    ? ChakraTooltipProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.TooltipProps;

export type TooltipProps = PropType<typeof v2TooltipPropEntries, BaseTooltipProps>;

const ChakraCompatibleTooltip: ForwardedRefComponent<TooltipProps> = createCompatibleComponent(
    // @ts-ignore: This is a workaround to allow the component to be compatible with both Chakra 2 and Chakra 3.
    chakraVersion === '3' ? V3Tooltip : V2Tooltip,
    v2TooltipPropEntries,
    (props) => {
        const { contentProps, ...restProps } = props;

        return {
            ...openablePositionableExtraTranslation(restProps),
            ...(contentProps || {}),
        };
    }
);

export default ChakraCompatibleTooltip;
