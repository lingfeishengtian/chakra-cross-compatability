import type { IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { V2UniversallyRenamedProps } from '../../global/propMigrations';
import type { PropType } from '../../types';
import { createCompatibleComponent, type ForwardedRefComponent } from '../utils';

const v2IconButtonPropEntries = [...V2UniversallyRenamedProps] as const;

export type IconButtonProps = PropType<typeof v2IconButtonPropEntries, ChakraIconButtonProps>;

const ChakraCompatibleIconButton: ForwardedRefComponent<ChakraIconButtonProps> = createCompatibleComponent(
    IconButton,
    v2IconButtonPropEntries
);

export default ChakraCompatibleIconButton;
