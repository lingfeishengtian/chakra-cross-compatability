import React, { forwardRef } from "react";
import { chakraVersion } from "../global/chakraVersion";
import { translateProps } from "../utils";

export type ForwardedRefComponent<Props> = React.ForwardRefExoticComponent<
  React.PropsWithoutRef<Props> & React.RefAttributes<any>
>;

// TODO: MAKE PROPS TYPE ADD FROM AS PROPS
export function createCompatibleComponent<PropType extends Record<string, any>>(
  Component: React.JSXElementConstructor<any>,
  entries: readonly any[],
  extraTranslationHandler: (
    props: Record<string, any>
  ) => Record<string, any> = (props) => props
) {
  const Compat = forwardRef<any, PropType>((props, ref) => {
    const finalProps =
      chakraVersion === "2"
        ? extraTranslationHandler(translateProps(props, entries))
        : props;

    if (Component === React.Fragment) {
      return <Component key={props.key} children={props.children} />;
    }

    if (chakraVersion === "2") {
      if (props.asChild) {
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
    }

    // @ts-ignore
    return <Component ref={ref} {...finalProps} />;
  });

  return Compat;
}
