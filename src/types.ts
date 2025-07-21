import type { ChakraVersion } from "./global/chakraVersion";

export type KeysInBoth<T, U> = Extract<keyof T, keyof U>;

export type Merge<T, U> = {
  [K in keyof T | keyof U]: K extends keyof U
    ? U[K]
    : K extends keyof T
    ? T[K]
    : never;
};

export type TupleToMappedType<
  Translations extends ReadonlyArray<readonly [string, string]>
> = {
  [E in Translations[number] as E[0]]: E[1];
};

type TranslatedPropsType<
  Translations extends ReadonlyArray<readonly [string, string]>,
  Props
> = {
  // @ts-ignore
  [K in keyof TupleToMappedType<Translations>]?: Props[TupleToMappedType<Translations>[K]];
};

export type PropType<
  Translations extends ReadonlyArray<readonly [string, string]>,
  Props
> = ChakraVersion extends "2"
  ? TranslatedPropsType<Translations, Props> & Props
  : Props;
