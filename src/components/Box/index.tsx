const v2ButtonPropEntries = [
  ["colorPalette", "colorScheme"],
  ["disabled", "isDisabled"],
] as const;

type AllEntries = typeof v2ButtonPropEntries;
export type V2ButtonPropsTranslation = {
  [E in AllEntries[number] as E[0]]: E[1];
};

export const V2ButtonPropsTranslationObject = Object.fromEntries(
  v2ButtonPropEntries.map(([oldKey, newKey]) => [oldKey, newKey])
) as { [K in keyof V2ButtonPropsTranslation]: V2ButtonPropsTranslation[K] };
