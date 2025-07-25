import type { ImageProps as ChakraImageProps } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { V2UniversallyRenamedProps } from '../../global/propMigrations';
import type { PropType } from '../../types';
import { createCompatibleComponent, type ForwardedRefComponent } from '../utils';

const v2ImagePropEntries = [
    ...V2UniversallyRenamedProps,
    ['fit', 'objectFit'],
    ['htmlWidth', 'width'],
    ['htmlHeight', 'height'],
] as const;

export type ImageProps = Omit<PropType<typeof v2ImagePropEntries, ChakraImageProps>, 'aspectRatio'>;

const ChakraCompatibleImage: ForwardedRefComponent<ImageProps> = createCompatibleComponent(Image, v2ImagePropEntries);

export default ChakraCompatibleImage;
