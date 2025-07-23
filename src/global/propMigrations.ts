// TODO: Gradient translations
// TODO: Renamed sx to css and changes
export const V2UniversallyRenamedProps = [
    ['colorPalette', 'colorScheme'],
    ['open', 'isOpen'],
    ['defaultOpen', 'defaultIsOpen'],
    ['disabled', 'isDisabled'],
    ['invalid', 'isInvalid'],
    ['required', 'isRequired'],
    ['lineClamp', 'noOfLines'],
    ['truncate', 'truncated'],
    ['_currentPage', '_activeLink'],
    ['_currentStep', '_activeStep'],
    ['_osDark', '_mediaDark'],
    ['_osLight', '_mediaLight'],
] as const;

export const V2OpenablePositionableProps = [
    ['open', 'isOpen'],
    ['defaultOpen', 'defaultIsOpen'],
    ['lazyMount', 'isLazy'],
] as const;

export const openablePositionableExtraTranslation = (props: Record<string, any>) => {
    const { positioning, ...rest } = props;

    const onOpenClose = (() => {
        if (props?.onOpenChange) {
            return {
                onOpen: () => props.onOpenChange({ open: true }),
                onClose: () => props.onOpenChange({ open: false }),
            };
        }
        return {};
    })();

    return {
        ...rest,
        ...onOpenClose,
        placement: positioning?.placement,
        strategy: positioning?.strategy,
        offset: positioning?.offset,
    };
};
