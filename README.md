# Chakra UI Cross Compatibility Layer

Provides a compatibility layer for Chakra UI components across V2 and V3 versions, allowing developers to use a consistent API regardless of the Chakra UI version.

Chakra V3 ➡️ Chakra V2 ✅
Chakra V2 ➡️ Chakra V3 ❌

The package translates Chakra v3 props/components to Chakra v2 props/components **not the other way around**.

Components will follow coding practices and API conventions of Chakra UI V3, while maintaining compatibility with V2.

## ⚠️ Warning

This package can run on Chakra v2, but does not officially support Chakra v3 syntax on Chakra v2. Rather, it is meant to be used in external libraries extending Chakra v3, then compiled to be used in Chakra v2. If the package is installed in a project using Chakra v2, it will not support all the prop typings during development, although it'll try its best to translate them (if you @ts-ignore the type errors).

Under the hood, the package does prop manipulations (for example, expanding `onOpenChange` to `onOpen` and `onClose`), but does not add these props to the typings as compiling from Chakra v2 to Chakra v3 _IS NOT SUPPORTED_.

Essentially, if the package is used in Chakra v2, it would look funky as V3 components would need to have V2 props attached to them. For example:

```tsx
<Dialog.Root isOpen={isOpen} onClose={() => setIsOpen(false)} />
```

**TLDR:** Install into Chakra v2 at your own discretion.

## Differences Between Official Chakra V3

Although we try to keep the API as close to Chakra V3 as possible, some things straight up don't make sense and work better in V2.

### Tooltip

Open delay is default set to 0 (overridable) through props.

## Limitations

The goal of this package is for things to "just work" without needing to change the code in your project. However, there are some limitations to be aware of.

### ChakraProvider

The `ChakraProvider` is not supported in this package. Translating this component would require completely translating the Chakra UI theme system. Furthermore, if your project is in need of translating the `ChakraProvider`, it is probably time to upgrade your project to Chakra UI V3.

### Toaster

In an attempt to keep the API consistent, the `Toaster` component is provided in this package. It will use the Chakra UI V3 API, but for V2 will internally use the V2 `useToast` hook. This means on V2, you will have to import `toaster` from this package instead of the Chakra UI V2 `useToast` hook to create toasts on both V2 and V3 with one codebase.

### Menu

In V2, Menu.Trigger (MenuButton under the hood) will wrap the children in an additional `<span>` which would cause props like `gap` to not work, however, the translation layer merges:

```
'& > *': {
    display: 'inherit',
    flex: 'inherit',
    flexDirection: 'inherit',
    height: 'inherit',
    width: 'inherit',
    gap: 'inherit',
    padding: 'inherit',
    margin: 'inherit',
    justifyItems: 'inherit',
    justifyContent: 'inherit',
    alignContent: 'inherit',
    alignItems: 'inherit',
}
```

to the underlying MenuButton component's css styling in order to force the `span` to obey layout props provided.

### Dialog/Modal

In Chakra V3, the way dialogs behave are similar to Menus in that their internal contexts store the open/close state of the component. However in Chakra v2, the Modal context only stores `onClose` and `isOpen` making it impossible to cleanly recreate similar behavior in v2. Therefore, I have forced the props `open` and `onOpenChange` for dialogs and removed the Dialog.Trigger component to provide compatibility with Chakra v2.

### Portal-Based Components (ie. Menu)

Portals in Chakra v2 internally use the `react-portals` package which does not fit well with `framer-motion`. Do not try animating with portal based actions. If you need custom portal based animations, please use the `ReactDOM.createPortal` API.
