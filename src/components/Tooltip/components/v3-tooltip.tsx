import * as chakra from '@chakra-ui/react';
import { Portal } from '@chakra-ui/react';
import * as React from 'react';
import type { ChakraVersion } from '../../../global/chakraVersion';

type ChakraTooltipRootProps = ChakraVersion extends '3' ? chakra.Tooltip.RootProps : {};
type ChakraTooltipContentProps = ChakraVersion extends '3' ? chakra.Tooltip.ContentProps : {};

export interface TooltipProps extends ChakraTooltipRootProps {
    showArrow?: boolean;
    portalled?: boolean;
    portalRef?: React.RefObject<HTMLElement>;
    content: React.ReactNode;
    contentProps?: ChakraTooltipContentProps;
    disabled?: boolean;
}

export const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(function Tooltip(props, ref) {
    const { Tooltip: ChakraTooltip } = chakra;

    const { showArrow, children, disabled, portalled = true, content, contentProps, portalRef, ...rest } = props;

    if (disabled) return children;

    return (
        <ChakraTooltip.Root openDelay={0} {...rest}>
            <ChakraTooltip.Trigger asChild>{children}</ChakraTooltip.Trigger>
            <Portal disabled={!portalled} container={portalRef}>
                <ChakraTooltip.Positioner>
                    <ChakraTooltip.Content ref={ref} {...contentProps}>
                        {showArrow && (
                            <ChakraTooltip.Arrow>
                                <ChakraTooltip.ArrowTip />
                            </ChakraTooltip.Arrow>
                        )}
                        {content}
                    </ChakraTooltip.Content>
                </ChakraTooltip.Positioner>
            </Portal>
        </ChakraTooltip.Root>
    );
});
