import type { StackProps as ChakraStackProps } from '@chakra-ui/react';
import { Stack } from '@chakra-ui/react';
import { V2UniversallyRenamedProps } from '../../global/propMigrations';
import type { PropType } from '../../types';
import { createCompatibleComponent, type ForwardedRefComponent } from '../utils';

const v2StackPropEntries = [...V2UniversallyRenamedProps] as const;

export type StackProps = PropType<typeof v2StackPropEntries, ChakraStackProps>;

const ChakraCompatibleStack: ForwardedRefComponent<StackProps> = createCompatibleComponent(Stack, v2StackPropEntries);

export default ChakraCompatibleStack;
