import type { ChakraVersion } from "./global/chakraVersion";

export type KeysInBoth<T, U> = Extract<keyof T, keyof U>;

export type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

/**
 * Props that do not exist in Chakra v2 but are used in Chakra v3.
 */
export type UniversalNewProps = {
  asChild?: boolean;
};

/**
 * Converts a tuple of translations into a mapped type.
 * For example, [['en', 'English'], ['fr', 'French']] becomes { en: 'English', fr: 'French' }.
 */
export type TupleToMappedType<
  Translations extends ReadonlyArray<readonly [string, string]>
> = {
  [E in Translations[number] as E[0]]: E[1];
};

/**
 * Translates props based on the provided translation type
 */
type TranslatedPropsType<
  Translations extends ReadonlyArray<readonly [string, string]>,
  Props
> = {
  // @ts-ignore: Since we build the package using Chakra v3, this will complain when we're trying to convert to a prop that doesn't exist in Chakra v2.
  [K in keyof TupleToMappedType<Translations>]?: Props[TupleToMappedType<Translations>[K]];
};

/**
 * Combines translations with additional props depending on the Chakra version.
 */
export type PropType<
  Translations extends ReadonlyArray<readonly [string, string]>,
  Props
> = ChakraVersion extends "2"
  ? TranslatedPropsType<Translations, Props> & Props & UniversalNewProps
  : Props;
