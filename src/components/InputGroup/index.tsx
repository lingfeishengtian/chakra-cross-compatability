import type { InputGroupProps as ChakraInputGroupProps } from '@chakra-ui/react';
import * as chakra from '@chakra-ui/react';
import { InputGroup } from '@chakra-ui/react';
import { V2UniversallyRenamedProps } from '../../global/propMigrations';
import type { PropType } from '../../types';
import { chakraAsV2 } from '../../utils';
import { createCompatibleComponent, type ForwardedRefComponent } from '../utils';

const v2InputGroupPropEntries = [...V2UniversallyRenamedProps] as const;

export type InputGroupProps = PropType<typeof v2InputGroupPropEntries, ChakraInputGroupProps> & {
    startAddon?: React.ReactNode;
    endAddon?: React.ReactNode;
};

const ChakraCompatibleInputGroup: ForwardedRefComponent<InputGroupProps> = createCompatibleComponent(
    InputGroup,
    v2InputGroupPropEntries,
    (props) => {
        const { startAddon, endAddon, ...restProps } = props;

        const { InputLeftAddon, InputRightAddon } = chakraAsV2(chakra);

        if (!startAddon && !endAddon) {
            return props;
        }

        return {
            ...restProps,
            children: (
                <>
                    {startAddon && <InputLeftAddon height="unset">{startAddon}</InputLeftAddon>}
                    {restProps.children}
                    {endAddon && <InputRightAddon height="unset">{endAddon}</InputRightAddon>}
                </>
            ),
        };
    }
);

export default ChakraCompatibleInputGroup;
