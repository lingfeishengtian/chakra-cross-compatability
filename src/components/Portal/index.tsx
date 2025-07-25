import type { PortalProps as ChakraPortalProps } from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';

export type PortalProps = PropsWithChildren<ChakraPortalProps>;

/**
 * Warning: This component uses react-portals in Chakra v2 which may cause issues with framer-motion animations.
 */
const ChakraCompatiblePortal = (props: PortalProps) => {
    const { children, ...rest } = props;
    return <Portal {...rest}>{children}</Portal>;
};

export default ChakraCompatiblePortal;
