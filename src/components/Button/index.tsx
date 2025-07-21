import { Button } from '@chakra-ui/react';
import type { ButtonProps as ChakraButtonProps } from '@chakra-ui/react';
// import type { ButtonProps as V2ButtonProps } from 'chakra-ts-compatability-layer/v2';
// import type { ButtonProps as V3ButtonProps } from 'chakra-ts-compatability-layer/v3';
import { chakraVersion, type ChakraVersion } from '../../global/chakraVersion';

type V2ButtonPropsTranslation = {
    colorPalette: 'colorScheme';
    // Add other mappings here...
};

const V2ButtonPropsTranslationObject: V2ButtonPropsTranslation = {
    colorPalette: 'colorScheme',
    // Add other mappings here...
};

// type V2ButtonPropsTranslation = typeof V2ButtonPropsTranslation;

type TranslatedProps = {
    [K in keyof V2ButtonPropsTranslation]?: ChakraButtonProps[V2ButtonPropsTranslation[K]];
};

export type ButtonProps =
    ChakraVersion extends '2'
    ? ChakraButtonProps & TranslatedProps
    : ChakraButtonProps;

export default function ChakraCompatibleButton(props: ButtonProps) {
    if (chakraVersion === '2') {
        const translatedProps: Record<any, any> = {};

        Object.keys(props as Record<string, any>).forEach((key) => {
            if (key in V2ButtonPropsTranslationObject) {
                const translatedKey = V2ButtonPropsTranslationObject[key as keyof V2ButtonPropsTranslation];
                translatedProps[translatedKey] = (props as Record<string, any>)[key];
            } else {
                translatedProps[key] = (props as Record<string, any>)[key];
            }
        });

        return <Button {...translatedProps} />;
    }

    return <Button {...props} />;
}