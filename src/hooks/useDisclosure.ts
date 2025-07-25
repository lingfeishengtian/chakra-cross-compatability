import { useDisclosure as chakraUseDisclosure } from '@chakra-ui/react';
import { chakraVersion } from '../global/chakraVersion';

export type DisclosureElements = {
    open: boolean;
    onOpen: () => void;
    onClose: () => void;
    onToggle: () => void;
};

export function useDisclosure(): DisclosureElements {
    const disclosureElements = chakraUseDisclosure();

    if (chakraVersion === '2') {
        // @ts-ignore: This is a workaround for Chakra v2, where the useDisclosure hook does not return the same structure as in v3.
        const { isOpen, ...rest } = disclosureElements;

        return {
            // @ts-ignore: Chakra v2 does not have `open` so we need to create it manually.
            open: isOpen,
            ...rest,
        };
    }

    return disclosureElements;
}
