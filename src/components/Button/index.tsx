import { Button } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
// import type { ButtonProps as V2ButtonProps } from 'chakra-ts-compatability-layer/v2';
// import type { ButtonProps as V3ButtonProps } from 'chakra-ts-compatability-layer/v3';
import { chakraVersion, type ChakraVersion } from '../../global/chakraVersion';

const V2ButtonPropsTranslation = {
    colorPalette: 'colorScheme',
    // Add other mappings here...
} as const;

type V2ButtonPropsTranslation = typeof V2ButtonPropsTranslation;

type TranslatedProps<T extends Record<string, keyof ChakraButtonProps>> = {
    [K in keyof T]?: ChakraButtonProps[T[K]];
};

export type ButtonProps =
    ChakraVersion extends '2'
    ? ChakraButtonProps & TranslatedProps<V2ButtonPropsTranslation>
    : ChakraButtonProps;

export default function ChakraCompatibleButton(props: ButtonProps) {
    if (chakraVersion === '2') {
        const translatedProps: Record<any, any> = {};

        Object.keys(props).forEach((key) => {
            const translatedKey = (V2ButtonPropsTranslation as Record<string, string>)[key] || key;

            (translatedProps as any)[translatedKey] = (props as any)[key];
        });

        return <Button {...translatedProps}>Meow</Button>;
    }

    return <Button {...props}>Meow</Button>;
}