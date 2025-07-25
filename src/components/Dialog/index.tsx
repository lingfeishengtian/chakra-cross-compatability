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

const v2DialogPropEntries = [...V2UniversallyRenamedProps, ...V2OpenablePositionableProps] as const;

/**
 * Root Props
 */
type BaseDialogRootProps = ChakraVersion extends '3'
    ? chakra.Dialog.RootProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.ModalProps;

// Require props since Chakra v2 does not have a Dialog.Trigger, nor does the ModalContext component allow for a setOpen function.
type RootProps = PropType<typeof v2DialogPropEntries, BaseDialogRootProps> & {
    open: boolean;
    onOpenChange: ({ open }: { open: boolean }) => void;
};

const DialogRoot: ForwardedRefComponent<RootProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Dialog.Root : chakra.Modal,
    v2DialogPropEntries,
    openablePositionableExtraTranslation
);

/**
 * Dialog.Content
 */
type BaseDialogContentProps = ChakraVersion extends '3'
    ? chakra.Dialog.ContentProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.ModalContentProps;

type ContentProps = PropType<typeof v2DialogPropEntries, BaseDialogContentProps>;
const DialogContent: ForwardedRefComponent<ContentProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Dialog.Content : chakra.ModalContent,
    v2DialogPropEntries
);

/**
 * Dialog.Header
 */
type BaseDialogHeaderProps = ChakraVersion extends '3'
    ? chakra.Dialog.HeaderProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.ModalHeaderProps;

type HeaderProps = PropType<typeof v2DialogPropEntries, BaseDialogHeaderProps>;
const DialogHeader: ForwardedRefComponent<HeaderProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Dialog.Header : chakra.ModalHeader,
    v2DialogPropEntries
);

/**
 * Dialog.Footer
 */
type BaseDialogFooterProps = ChakraVersion extends '3'
    ? chakra.Dialog.FooterProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.ModalFooterProps;

type FooterProps = PropType<typeof v2DialogPropEntries, BaseDialogFooterProps>;
const DialogFooter: ForwardedRefComponent<FooterProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Dialog.Footer : chakra.ModalFooter,
    v2DialogPropEntries
);

/**
 * Dialog.Backdrop
 */
type BaseDialogBackdropProps = ChakraVersion extends '3'
    ? chakra.Dialog.BackdropProps
    : // @ts-ignore: Since this is compiled with Chakra 3, this type doesn't exist, so ignore it. Since we check ChakraVersion though, this is safe and will work in Chakra 2.
      chakra.ModalOverlayProps;

type BackdropProps = PropType<typeof v2DialogPropEntries, BaseDialogBackdropProps>;
const DialogBackdrop: ForwardedRefComponent<BackdropProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Dialog.Backdrop : chakra.ModalOverlay,
    v2DialogPropEntries
);

/**
 * Dialog.Positioner
 */
type BaseDialogPositionerProps = ChakraVersion extends '3'
    ? chakra.Dialog.PositionerProps
    : React.ComponentPropsWithoutRef<typeof React.Fragment>;

type PositionerProps = PropType<typeof v2DialogPropEntries, BaseDialogPositionerProps>;
const DialogPositioner: ForwardedRefComponent<PositionerProps> = createCompatibleComponent(
    // @ts-ignore
    chakraVersion === '3' ? chakra.Dialog.Positioner : React.Fragment,
    v2DialogPropEntries
);

/**
 * Begin export
 */

export {
    DialogBackdrop as Backdrop,
    DialogContent as Content,
    DialogFooter as Footer,
    DialogHeader as Header,
    DialogPositioner as Positioner,
    DialogRoot as Root,
};
export type { BackdropProps, ContentProps, FooterProps, HeaderProps, PositionerProps, RootProps };
