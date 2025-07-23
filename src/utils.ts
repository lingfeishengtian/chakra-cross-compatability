import type { chakrav2 } from "../packages/chakra-ts-compatibility-layer/dist";
import type { TupleToMappedType } from "./types";

/**
 * @inline
 * Internal type guard to imitate the current namespace as Chakra v2.
 */
export const chakraAsV2 = (chakra: any) => chakra as unknown as chakrav2;

/**
 * Maps a tuple of translations to an object with custom typing.
 *
 * @param tuple - A tuple of translations where each element is a tuple of [oldKey, newKey].
 * @returns An object where each oldKey is mapped to its corresponding newKey in the correct type.
 */
export function TupleToMap<T extends ReadonlyArray<readonly [string, string]>>(
  tuple: T
): TupleToMappedType<T> {
  return Object.fromEntries(
    tuple.map(([oldKey, newKey]) => [oldKey, newKey])
  ) as TupleToMappedType<T>;
}

/**
 * Translates props based on the provided translation type
 *
 * @param props Any chakra props, ie ButtonProps, BoxProps, etc.
 * @param translations A tuple of translations where each element is a tuple of [oldKey, newKey].
 * @returns An object where each oldKey is mapped to its corresponding newKey in the correct type while preserving the original props.
 */
export function translateProps<
  Props extends Record<string, any>,
  Translations extends ReadonlyArray<readonly [string, string]>
>(props: Props, translations: Translations): Record<string, any> {
  const translatedProps: Record<string, any> = {};
  const V2ButtonPropsTranslationObject = TupleToMap(translations);

  Object.keys(props as Record<string, any>).forEach((key) => {
    if (key in V2ButtonPropsTranslationObject) {
      const translatedKey = (V2ButtonPropsTranslationObject as any)[key];
      translatedProps[translatedKey] = (props as Record<string, any>)[key];
    } else {
      translatedProps[key] = (props as Record<string, any>)[key];
    }
  });

  Object.keys(V2ButtonPropsTranslationObject).forEach((oldKey) => {
    delete translatedProps[oldKey];
  });

  return translatedProps;
}
