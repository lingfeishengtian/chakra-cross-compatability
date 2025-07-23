import React, { forwardRef } from "react";
import { chakraVersion } from "../global/chakraVersion";
import { translateProps } from "../utils";

export type ForwardedRefComponent<Props> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<any>
>;

export function createCompatibleComponent<PropType extends Record<string, any>>(
  Component: React.JSXElementConstructor<any>,
  entries: readonly any[],
  extraTranslationHandler: (
    props: Record<string, any>
  ) => Record<string, any> = (props) => props
) {
  const Compat = forwardRef<any, PropType>((props, ref) => {
    // Translate props based on the provided entries
    const finalProps =
      chakraVersion === "2"
        ? extraTranslationHandler(translateProps(props, entries))
        : props;

    // If the component is a fragment, return it directly (avoid console warnings)
    if (Component === React.Fragment) {
      return <Component key={props.key} children={props.children} />;
    }

    /**
     * Since Chakra UI v2 uses `as` for component polymorphism while Chakra UI v3 uses `asChild`, we stray away from `as` and prefer
     * to translate `asChild` to `as` for Chakra UI v2 compatibility.
     */
    if (chakraVersion === "2" && props.asChild) {
      const onlyChild = React.Children.only(props.children);

      const { asChild, ...propsWithoutAsChild } = finalProps;

      const clonedChild = React.cloneElement(
        onlyChild,
        {
          ...propsWithoutAsChild,
          as: Component,
          ref: ref,
        },
        onlyChild.props.children
      );

      return clonedChild;
    }

    return <Component ref={ref} {...finalProps} />;
  });

  return Compat;
}
