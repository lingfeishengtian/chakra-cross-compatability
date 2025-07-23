# Chakra Cross Compatibility Layer

Provides a compatibility layer for Chakra UI components across V2 and V3 versions, allowing developers to use a consistent API regardless of the Chakra UI version.

Components will follow coding practices and API conventions of Chakra UI V3, while maintaining compatibility with V2.

**Note:** This is not intended to be run in a local project, rather it is meant to be used in external libraries that need to support both Chakra UI V2 and V3.

## Limitations

The goal of this package is for things to "just work" without needing to change the code in your project. However, there are some limitations to be aware of.

### ChakraProvider

The `ChakraProvider` is not supported in this package. Translating this component would require completely translating the Chakra UI theme system. Furthermore, if your project is in need of translating the `ChakraProvider`, it is probably time to upgrade your project to Chakra UI V3.

### Toaster

In an attempt to keep the API consistent, the `Toaster` component is provided in this package. It will use the Chakra UI V3 API, but for V2 will internally use the V2 `useToast` hook. This means on V2, you will have to import `toaster` from this package instead of the Chakra UI V2 `useToast` hook to create toasts on both V2 and V3 with one codebase.

