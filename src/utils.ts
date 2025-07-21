import type { TupleToMappedType } from "./types";

export function TupleToMap<T extends ReadonlyArray<readonly [string, string]>>(
  tuple: T
): TupleToMappedType<T> {
  return Object.fromEntries(
    tuple.map(([oldKey, newKey]) => [oldKey, newKey])
  ) as TupleToMappedType<T>;
}

export function TranslateProps<
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

  return translatedProps;
}
