import * as chakra from '@chakra-ui/react';
import React from 'react';
import { chakraVersion, type ChakraVersion } from '../../global/chakraVersion';
import {
    openablePositionableExtraTranslation,
    V2OpenablePositionableProps,
    V2UniversallyRenamedProps,
} from '../../global/propMigrations';
import type { PropType } from '../../types';
import { createCompatibleComponent, type ForwardedRefComponent } from '../utils';

const v2MenuPropEntries = [...V2UniversallyRenamedProps, ...V2OpenablePositionableProps] as const;

/**
 * Root Props
 */
type BaseMenuRootProps = ChakraVersion extends '3'
    ? chakra.Menu.RootProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.MenuProps;

type RootProps = PropType<typeof v2MenuPropEntries, BaseMenuRootProps>;

const MenuRoot: ForwardedRefComponent<RootProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Menu.Root : chakra.Menu,
    v2MenuPropEntries,
    openablePositionableExtraTranslation
);

/**
 * Menu.Trigger
 */
type BaseMenuTriggerProps = ChakraVersion extends '3'
    ? chakra.Menu.TriggerProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.MenuButtonProps;

type TriggerProps = PropType<typeof v2MenuPropEntries, BaseMenuTriggerProps>;
const MenuTrigger: ForwardedRefComponent<TriggerProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Menu.Trigger : chakra.MenuButton,
    v2MenuPropEntries,
    (props) => {
        const { sx } = props;
        const newSxProps = {
            ...sx,
            '& > *': {
                ...(sx?.['& > *'] ?? {}),
                display: 'inherit',
                flex: 'inherit',
                flexDirection: 'inherit',
                height: 'inherit',
                width: 'inherit',
                gap: 'inherit',
                padding: 'inherit',
                margin: 'inherit',
                justifyItems: 'inherit',
                justifyContent: 'inherit',
                alignContent: 'inherit',
                alignItems: 'inherit',
            },
        };

        return {
            ...props,
            sx: newSxProps,
        };
    }
);

/**
 * Menu.Positioner
 */

type BaseMenuPositionerProps = ChakraVersion extends '3'
    ? chakra.Menu.PositionerProps
    : React.ComponentPropsWithoutRef<typeof React.Fragment>;

type PositionerProps = PropType<typeof v2MenuPropEntries, BaseMenuPositionerProps>;
const MenuPositioner: ForwardedRefComponent<PositionerProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Menu.Positioner : React.Fragment,
    v2MenuPropEntries
);

/**
 * Menu.Content
 */
type BaseMenuContentProps = ChakraVersion extends '3'
    ? chakra.Menu.ContentProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.MenuListProps;

type ContentProps = PropType<typeof v2MenuPropEntries, BaseMenuContentProps>;
const MenuContent: ForwardedRefComponent<ContentProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Menu.Content : chakra.MenuList,
    v2MenuPropEntries
);

/**
 * Menu.Item
 */
type BaseMenuItemProps = ChakraVersion extends '3'
    ? chakra.Menu.ItemProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.MenuItemProps;

type ItemProps = PropType<typeof v2MenuPropEntries, BaseMenuItemProps>;
const MenuItem: ForwardedRefComponent<ItemProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Menu.Item : chakra.MenuItem,
    v2MenuPropEntries
);

/**
 * Menu.Separator
 */
type BaseMenuSeparatorProps = ChakraVersion extends '3'
    ? chakra.Menu.SeparatorProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.MenuDividerProps;

type SeparatorProps = PropType<typeof v2MenuPropEntries, BaseMenuSeparatorProps>;
const MenuSeparator: ForwardedRefComponent<SeparatorProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Menu.Separator : chakra.MenuDivider,
    v2MenuPropEntries
);

/**
 * Begin export
 */

export {
    MenuContent as Content,
    MenuItem as Item,
    MenuPositioner as Positioner,
    MenuRoot as Root,
    MenuSeparator as Separator,
    MenuTrigger as Trigger,
};
export type { ContentProps, ItemProps, PositionerProps, RootProps, SeparatorProps, TriggerProps };
